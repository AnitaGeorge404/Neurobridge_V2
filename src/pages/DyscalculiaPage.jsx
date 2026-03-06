import { useState, useCallback } from "react";
import { initializeUserProfile, saveUserProfile } from "@/lib/dyscalculiaAdaptiveEngine";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const QUESTION_BANK = [
  { id: 1, question: "You have 3 apples. Your friend gives you 2 more. How many apples do you have?", answer: 5, representation: "dots", hint: "3 + 2 = ?" },
  { id: 2, question: "There are 8 birds on a fence. 3 fly away. How many are left?", answer: 5, representation: "blocks", hint: "8 − 3 = ?" },
  { id: 3, question: "You have 4 coins and find 4 more. How many coins in total?", answer: 8, representation: "dots", hint: "4 + 4 = ?" },
  { id: 4, question: "A bag has 10 sweets. You eat 6. How many remain?", answer: 4, representation: "number_line", hint: "10 − 6 = ?" },
  { id: 5, question: "You share 6 stickers equally with 1 friend. How many does each person get?", answer: 3, representation: "blocks", hint: "6 ÷ 2 = ?" },
  { id: 6, question: "You walk 5 steps forward then 3 more. How many steps in total?", answer: 8, representation: "number_line", hint: "5 + 3 = ?" },
  { id: 7, question: "There are 9 pennies. You spend 4. How many are left?", answer: 5, representation: "dots", hint: "9 − 4 = ?" },
  { id: 8, question: "You have 2 groups of 4 grapes. How many grapes altogether?", answer: 8, representation: "blocks", hint: "2 × 4 = ?" },
];

function DotRepresentation({ count }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-5 h-5 rounded-full bg-indigo-400" />
      ))}
    </div>
  );
}

function BlockRepresentation({ count }) {
  return (
    <div className="flex flex-wrap gap-1 justify-center my-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-7 h-7 rounded bg-emerald-400 border border-emerald-600" />
      ))}
    </div>
  );
}

function NumberLineRepresentation({ answer }) {
  const max = Math.max(answer + 2, 10);
  return (
    <div className="flex items-center gap-0.5 justify-center my-3 overflow-x-auto pb-1">
      {Array.from({ length: max + 1 }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
            ${i === answer ? "bg-amber-400 text-amber-900" : "bg-slate-200 text-slate-600"}`}>
            {i}
          </div>
          <div className="w-full h-0.5 bg-slate-300" />
        </div>
      ))}
    </div>
  );
}

export default function DyscalculiaPage() {
  const [profile] = useState(() => initializeUserProfile());
  const [questionIdx, setQuestionIdx] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null); // null | "correct" | "wrong"
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [done, setDone] = useState(false);

  const currentQ = QUESTION_BANK[questionIdx % QUESTION_BANK.length];

  const handleSubmit = useCallback(() => {
    const val = parseInt(input, 10);
    const isCorrect = val === currentQ.answer;
    setFeedback(isCorrect ? "correct" : "wrong");
    setAttempted((a) => a + 1);
    if (isCorrect) setScore((s) => s + 1);
    const updated = { ...profile, session_count: profile.session_count + 1 };
    saveUserProfile(updated);
  }, [input, currentQ, profile]);

  const handleNext = useCallback(() => {
    if (questionIdx + 1 >= QUESTION_BANK.length) {
      setDone(true);
    } else {
      setQuestionIdx((i) => i + 1);
      setInput("");
      setFeedback(null);
      setShowHint(false);
    }
  }, [questionIdx]);

  const handleRestart = () => {
    setQuestionIdx(0);
    setInput("");
    setFeedback(null);
    setShowHint(false);
    setScore(0);
    setAttempted(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / QUESTION_BANK.length) * 100);
    return (
      <div className="max-w-lg mx-auto py-10 px-4 text-center space-y-6">
        <h1 className="text-3xl font-bold text-indigo-700">Session Complete 🎉</h1>
        <p className="text-slate-600 text-lg">You got <strong>{score}</strong> out of <strong>{QUESTION_BANK.length}</strong> correct.</p>
        <Progress value={pct} className="h-4" />
        <p className="text-slate-500">{pct >= 75 ? "Excellent work! Keep building those skills." : "Good effort — try again to improve your score."}</p>
        <Button onClick={handleRestart} className="mt-4">Try Again</Button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-8 px-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-indigo-700">Number Confidence Builder</h1>
          <p className="text-slate-500 text-sm mt-0.5">Step-by-step numeric support for daily tasks</p>
        </div>
        <Badge variant="outline" className="text-indigo-600 border-indigo-300">
          {questionIdx + 1} / {QUESTION_BANK.length}
        </Badge>
      </div>

      <Progress value={((questionIdx) / QUESTION_BANK.length) * 100} className="h-2" />

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold text-slate-700">
            {currentQ.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentQ.representation === "dots" && <DotRepresentation count={currentQ.answer} />}
          {currentQ.representation === "blocks" && <BlockRepresentation count={currentQ.answer} />}
          {currentQ.representation === "number_line" && <NumberLineRepresentation answer={currentQ.answer} />}

          {showHint && (
            <div className="text-sm text-amber-700 bg-amber-50 rounded p-2 border border-amber-200">
              💡 Hint: {currentQ.hint}
            </div>
          )}

          {feedback === null && (
            <div className="flex gap-3 items-center">
              <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && input !== "" && handleSubmit()}
                className="w-24 border border-slate-300 rounded px-3 py-2 text-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="?"
                autoFocus
              />
              <Button onClick={handleSubmit} disabled={input === ""}>Check</Button>
              {!showHint && (
                <Button variant="ghost" size="sm" onClick={() => setShowHint(true)}>
                  Show hint
                </Button>
              )}
            </div>
          )}

          {feedback === "correct" && (
            <div className="text-green-700 bg-green-50 rounded p-3 border border-green-200 font-medium">
              ✅ Correct! Well done.
            </div>
          )}
          {feedback === "wrong" && (
            <div className="text-red-700 bg-red-50 rounded p-3 border border-red-200 font-medium">
              ❌ Not quite. The answer was <strong>{currentQ.answer}</strong>.
            </div>
          )}

          {feedback !== null && (
            <Button onClick={handleNext} className="w-full mt-2">
              {questionIdx + 1 >= QUESTION_BANK.length ? "See Results" : "Next Question →"}
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="text-sm text-slate-500 text-center">
        Score so far: <strong className="text-indigo-600">{score}</strong> / {attempted} answered
      </div>
    </div>
  );
}
