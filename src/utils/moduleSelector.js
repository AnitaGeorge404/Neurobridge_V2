import { getModulesForChallenges } from "@/data/modulesRegistry";
import { getQuestionsForChallenges } from "@/utils/questionEngine";

const MATCH_THRESHOLD = 2;
const MIN_MODULES = 6;

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

export function scoreModules(userTags = {}, modules = []) {
  return modules
    .map((module) => {
      const score = (module.tags || []).reduce((sum, tag) => sum + (userTags[tag] || 0), 0);
      return { ...module, score };
    })
    .sort((a, b) => b.score - a.score);
}

export function selectModulesForUser({ selectedChallenges = [], answersByQuestionId = {} }) {
  const questions = getQuestionsForChallenges(selectedChallenges);
  const userTags = buildTagProfile(answersByQuestionId, questions);
  const candidateModules = getModulesForChallenges(selectedChallenges);
  const scored = scoreModules(userTags, candidateModules);

  const selected = scored.filter((module) => module.score >= MATCH_THRESHOLD);
  const finalSelection = selected.length >= MIN_MODULES ? selected : scored.slice(0, MIN_MODULES);

  return {
    questions,
    userTags,
    scoredModules: scored,
    enabledModules: finalSelection.map((module) => module.id),
    selectedModules: finalSelection,
  };
}
