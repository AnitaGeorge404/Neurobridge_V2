import { CHALLENGE_MODULE_MAP, getModulesForChallenges } from "@/data/modulesRegistry";
import { getQuestionsForChallenges } from "@/utils/questionEngine";

const MATCH_THRESHOLD = 2;
const MIN_MODULES = 6;
const BOOST_WEIGHT = 2;

export function buildTagProfile(answersByQuestionId = {}, questions = []) {
  const tags = {};

  for (const question of questions) {
    const selectedOptionText = answersByQuestionId[question.id];
    if (!selectedOptionText) continue;
    const selected = question.options.find((option) => option.text === selectedOptionText);
    if (!selected) continue;

    for (const tag of selected.tags || []) {
      tags[tag] = (tags[tag] || 0) + 1;
    }
  }

  return tags;
}

export function buildModuleBoostProfile(answersByQuestionId = {}, questions = []) {
  const boosts = {};

  for (const question of questions) {
    const selectedOptionText = answersByQuestionId[question.id];
    if (!selectedOptionText) continue;
    const selected = question.options.find((option) => option.text === selectedOptionText);
    if (!selected) continue;

    for (const moduleId of selected.moduleBoosts || []) {
      boosts[moduleId] = (boosts[moduleId] || 0) + 1;
    }
  }

  return boosts;
}

export function scoreModules(userTags = {}, moduleBoosts = {}, modules = []) {
  return modules
    .map((module) => {
      const tagScore = (module.tags || []).reduce((sum, tag) => sum + (userTags[tag] || 0), 0);
      const boostScore = (moduleBoosts[module.id] || 0) * BOOST_WEIGHT;
      return { ...module, score: tagScore + boostScore, tagScore, boostScore };
    })
    .sort((a, b) => b.score - a.score);
}

function ensureChallengeCoverage(selectedModules = [], selectedChallenges = [], scoredModules = []) {
  const selectedIds = new Set(selectedModules.map((module) => module.id));
  const scoredById = new Map(scoredModules.map((module) => [module.id, module]));

  for (const challengeId of selectedChallenges) {
    const challengeModuleIds = CHALLENGE_MODULE_MAP[challengeId] || [];
    const hasCoverage = challengeModuleIds.some((moduleId) => selectedIds.has(moduleId));
    if (hasCoverage) continue;

    const fallbackModule = challengeModuleIds
      .map((moduleId) => scoredById.get(moduleId))
      .find(Boolean);

    if (!fallbackModule) continue;
    selectedModules.push(fallbackModule);
    selectedIds.add(fallbackModule.id);
  }

  return selectedModules;
}

export function selectModulesForUser({ selectedChallenges = [], answersByQuestionId = {} }) {
  const questions = getQuestionsForChallenges(selectedChallenges);
  const userTags = buildTagProfile(answersByQuestionId, questions);
  const moduleBoosts = buildModuleBoostProfile(answersByQuestionId, questions);
  const candidateModules = getModulesForChallenges(selectedChallenges);
  const scored = scoreModules(userTags, moduleBoosts, candidateModules);

  const selected = scored.filter((module) => module.score >= MATCH_THRESHOLD);
  const withMinimum = selected.length >= MIN_MODULES ? selected : scored.slice(0, MIN_MODULES);
  const withCoverage = ensureChallengeCoverage([...withMinimum], selectedChallenges, scored);

  const uniqueFinal = [];
  const seenIds = new Set();
  for (const module of withCoverage) {
    if (seenIds.has(module.id)) continue;
    seenIds.add(module.id);
    uniqueFinal.push(module);
  }

  return {
    questions,
    userTags,
    moduleBoosts,
    scoredModules: scored,
    enabledModules: uniqueFinal.map((module) => module.id),
    selectedModules: uniqueFinal,
  };
}
