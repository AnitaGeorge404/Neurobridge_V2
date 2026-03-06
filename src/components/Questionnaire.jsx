export default function Questionnaire({ questions = [], answers = {}, onAnswer }) {
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div key={question.id} className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">{question.question}</p>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {question.options.map((option) => {
              const active = answers[question.id] === option.text;
              return (
                <button
                  key={`${question.id}-${option.text}`}
                  type="button"
                  onClick={() => onAnswer(question.id, option.text)}
                  className={`rounded-lg border px-3 py-2 text-sm transition ${
                    active
                      ? "border-green-500 bg-green-50 text-green-700"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {option.text}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
