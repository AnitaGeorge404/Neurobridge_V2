import { useMemo, useState } from "react";
import { CHALLENGE_CATEGORIES } from "@/data/modulesRegistry";
import { getQuestionsForChallenges } from "@/utils/questionEngine";
import { selectModulesForUser } from "@/utils/moduleSelector";
import Questionnaire from "@/components/Questionnaire";

export default function OnboardingFlow({ onComplete }) {
  const [step, setStep] = useState(1);
  const [selectedChallenges, setSelectedChallenges] = useState(new Set());
  const [answers, setAnswers] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const challengeList = [...selectedChallenges];
  const questions = useMemo(() => getQuestionsForChallenges(challengeList), [challengeList]);
  const unanswered = questions.filter((question) => !answers[question.id]).length;
  const recommendationPreview = useMemo(
    () => selectModulesForUser({ selectedChallenges: challengeList, answersByQuestionId: answers }).selectedModules,
    [challengeList, answers],
  );

  function toggleChallenge(id) {
    setSelectedChallenges((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleAnswer(questionId, optionText) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionText }));
  }

  async function handleFinish() {
    if (unanswered > 0 || isProcessing) return;
    setIsProcessing(true);
    setStep(4);

    const selection = selectModulesForUser({
      selectedChallenges: challengeList,
      answersByQuestionId: answers,
    });

    await onComplete({
      selectedChallenges: challengeList,
      answersByQuestionId: answers,
      tagProfile: selection.userTags,
      enabledModules: selection.enabledModules,
      selectedModules: selection.selectedModules,
    });

    setStep(5);
    setIsProcessing(false);
  }

  if (step === 1) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Welcome</h1>
        <p className="mt-2 text-sm text-slate-600">
          We’ll personalize your support tools in a few quick steps.
        </p>
        <button
          type="button"
          onClick={() => setStep(2)}
          className="mt-6 rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600"
        >
          Start
        </button>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Select areas where you feel you need support</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {CHALLENGE_CATEGORIES.map((challenge) => {
            const active = selectedChallenges.has(challenge.id);
            return (
              <button
                key={challenge.id}
                type="button"
                onClick={() => toggleChallenge(challenge.id)}
                className={`rounded-xl border px-3 py-3 text-sm transition ${
                  active
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {challenge.label}
              </button>
            );
          })}
        </div>
        <div className="mt-6 flex gap-2">
          <button type="button" onClick={() => setStep(1)} className="rounded-lg border border-slate-300 px-4 py-2 text-sm">
            Back
          </button>
          <button
            type="button"
            onClick={() => setStep(3)}
            disabled={challengeList.length === 0}
            className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm text-slate-600">Personalizing your dashboard...</p>
      </div>
    );
  }

  if (step === 5) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Your personalized tools are ready</h2>
        <p className="mt-2 text-sm text-slate-600">Redirecting to your home dashboard...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Quick Questionnaire</h2>
      <p className="mt-1 text-sm text-slate-600">Answer briefly so we can recommend the best tools.</p>

      <div className="mt-4">
        <Questionnaire questions={questions} answers={answers} onAnswer={handleAnswer} />
      </div>

      <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">
        <h3 className="text-sm font-semibold text-green-800">Recommended tools from your answers</h3>
        <p className="mt-1 text-xs text-green-700">These tools update as you answer the questionnaire.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {recommendationPreview.slice(0, 8).map((module) => (
            <span
              key={module.id}
              className="rounded-full border border-green-300 bg-white px-3 py-1 text-xs font-medium text-green-800"
            >
              {module.title}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        {unanswered === 0 ? "All questions answered" : `${unanswered} question${unanswered > 1 ? "s" : ""} remaining`}
      </p>

      <div className="mt-4 flex gap-2">
        <button type="button" onClick={() => setStep(2)} className="rounded-lg border border-slate-300 px-4 py-2 text-sm">
          Back
        </button>
        <button
          type="button"
          onClick={handleFinish}
          disabled={unanswered > 0 || isProcessing}
          className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Generate My Dashboard
        </button>
      </div>
    </div>
  );
}
