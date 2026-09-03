import React from 'react';
import { Question } from '../types';
import { CodeBlock } from './CodeBlock';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  CheckCircle2,
  Sparkles,
  Lightbulb,
  Table as TableIcon,
  AlertTriangle,
  FileCode2,
  HelpCircle,
  Hash
} from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalFiltered: number;
  onPrevious: () => void;
  onNext: () => void;
  isMastered: boolean;
  onToggleMastered: () => void;
  isBookmarked: boolean;
  onToggleBookmarked: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalFiltered,
  onPrevious,
  onNext,
  isMastered,
  onToggleMastered,
  isBookmarked,
  onToggleBookmarked,
  hasPrevious,
  hasNext
}) => {
  const { answer } = question;

  const difficultyColors = {
    Basic: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Medium: 'bg-amber-50 text-amber-700 border-amber-200',
    Hard: 'bg-rose-50 text-rose-700 border-rose-200'
  };

  const typeColors = {
    Theory: 'bg-blue-50 text-blue-700 border-blue-200',
    Pseudocode: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    'Dry Run': 'bg-purple-50 text-purple-700 border-purple-200',
    'Output Prediction': 'bg-amber-50 text-amber-700 border-amber-200',
    Debugging: 'bg-rose-50 text-rose-700 border-rose-200'
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Card Header Top Bar */}
      <div className="px-6 py-4 bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        {/* Number & Labels */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-1.5 bg-blue-600 text-white font-mono font-bold text-sm px-3 py-1 rounded-xl shadow-xs">
            <Hash className="w-4 h-4 opacity-80" />
            <span>QUESTION {String(question.id).padStart(2, '0')}</span>
          </div>

          <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
            PDF {question.pdfId}
          </span>

          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${typeColors[question.type]}`}>
            {question.type}
          </span>

          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${difficultyColors[question.difficulty]}`}>
            {question.difficulty}
          </span>

          <span className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-0.5 rounded-full">
            {question.topic} • {question.subtopic}
          </span>
        </div>

        {/* Mastered & Bookmark Action Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleMastered}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
              isMastered
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
            title={isMastered ? 'Marked as Mastered' : 'Mark as Mastered'}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isMastered ? 'Mastered' : 'Mark Mastered'}</span>
          </button>

          <button
            onClick={onToggleBookmarked}
            className={`p-1.5 rounded-xl text-xs font-semibold transition-all ${
              isBookmarked
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
            aria-label="Bookmark question"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Question Body */}
      <div className="p-6 sm:p-8 space-y-6">
        {/* Question Statement */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-blue-600 uppercase">
            <HelpCircle className="w-4 h-4" />
            <span>Interview Question</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            {question.question.split('\n\n')[0]}
          </h2>
        </div>

        {/* Provided Question Code (for Dry Run, Prediction, and Debugging) */}
        {question.givenCode && (
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
              <FileCode2 className="w-4 h-4 text-purple-600" />
              <span>
                {question.type === 'Debugging'
                  ? 'Buggy Code (From Question)'
                  : 'C Code to Analyze'}
              </span>
            </div>
            <CodeBlock
              code={question.givenCode}
              language="c"
              title={question.type === 'Debugging' ? 'buggy_code.c' : 'program.c'}
            />
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-6"></div>

        {/* ============================================================ */}
        {/* ANSWER SECTION */}
        {/* ============================================================ */}
        <div className="space-y-6">
          {/* 1. DIRECT INTERVIEW ANSWER (Prominent Callout) */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-blue-50/80 border border-blue-200/80 p-5 sm:p-6 shadow-xs relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-700 mb-2">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>Direct Interview Answer (Viva Punchline)</span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed">
              "{answer.directAnswer}"
            </p>
          </div>

          {/* 2. DEBUGGING BREAKDOWN (If Debugging Question) */}
          {question.type === 'Debugging' && (
            <div className="space-y-4">
              {answer.identifiedBug && (
                <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Error Identified</span>
                  </div>
                  <p className="text-sm font-semibold text-rose-950">
                    {answer.identifiedBug}
                  </p>
                </div>
              )}

              {answer.whyItHappens && (
                <div className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <strong className="block font-bold text-slate-900 mb-1">Why this error occurs in C:</strong>
                  <p className="leading-relaxed">{answer.whyItHappens}</p>
                </div>
              )}
            </div>
          )}

          {/* 3. EXPECTED OUTPUT BOX (For Dry Run & Output Prediction & Debugging) */}
          {answer.expectedOutput && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Expected Output
                </span>
                <span className="text-[11px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                  Console stdout
                </span>
              </div>
              <pre className="font-mono text-sm bg-slate-900 text-emerald-400 p-3.5 rounded-lg overflow-x-auto shadow-inner">
                <code>{answer.expectedOutput}</code>
              </pre>
            </div>
          )}

          {/* 4. DRY RUN EXECUTION TABLE (If present) */}
          {answer.dryRunTable && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                <TableIcon className="w-4 h-4 text-blue-600" />
                <span>Step-by-Step Execution Trace</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      {answer.dryRunTable.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {answer.dryRunTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-2.5 text-slate-700 font-mono text-xs">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 5. COMPARISON TABLE (If present) */}
          {answer.comparisonTable && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600">
                <TableIcon className="w-4 h-4 text-indigo-600" />
                <span>Key Differences & Comparison</span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      {answer.comparisonTable.headers.map((h, i) => (
                        <th key={i} className="px-4 py-3 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {answer.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-2.5 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 6. ALGORITHM / PSEUDOCODE STEPS (If present) */}
          {answer.algorithmSteps && (
            <div className="rounded-xl border border-cyan-200 bg-cyan-50/50 p-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-900 block mb-1">
                Algorithm & Logic Steps
              </span>
              <ol className="space-y-1.5 text-sm text-cyan-950 font-medium list-none">
                {answer.algorithmSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-600 font-bold shrink-0">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* 7. DETAILED EXPLANATION BULLETS */}
          {answer.explanation && answer.explanation.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Detailed Concept & Key Insights
              </span>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                {answer.explanation.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></span>
                    <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-semibold">$1</strong>') }}></span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 8. CODE EXAMPLE / CORRECTED CODE */}
          {answer.codeExample && (
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                <FileCode2 className="w-4 h-4 text-emerald-600" />
                <span>
                  {question.type === 'Debugging'
                    ? 'Corrected & Verified C Code'
                    : 'Clean C Program Implementation'}
                </span>
              </div>
              <CodeBlock
                code={answer.codeExample}
                language="c"
                title={question.type === 'Debugging' ? 'corrected.c' : 'example.c'}
              />
            </div>
          )}

          {/* 9. PRO INTERVIEW TIP */}
          {answer.interviewTip && (
            <div className="rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 p-4 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-0.5">
                  Placement Interview Tip / Viva Trap
                </strong>
                <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                  {answer.interviewTip}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Previous / Next Navigation */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            hasPrevious
              ? 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-xs'
              : 'bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed'
          }`}
          aria-label="Previous question"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <div className="text-xs sm:text-sm font-mono font-semibold text-slate-600 text-center">
          Question <span className="text-blue-600 font-bold text-base">{currentIndex + 1}</span> of <span className="font-bold">{totalFiltered}</span>
        </div>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            hasNext
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/20'
              : 'bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed'
          }`}
          aria-label="Next question"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
