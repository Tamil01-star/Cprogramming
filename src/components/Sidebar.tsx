import React, { useRef, useEffect } from 'react';
import { Question } from '../types';
import { CheckCircle2, Bookmark, ChevronRight } from 'lucide-react';

interface SidebarProps {
  questions: Question[];
  currentQuestionId: number;
  onSelectQuestion: (id: number) => void;
  masteredIds: Set<number>;
  bookmarkedIds: Set<number>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  questions,
  currentQuestionId,
  onSelectQuestion,
  masteredIds,
  bookmarkedIds
}) => {
  const activeItemRef = useRef<HTMLButtonElement | null>(null);

  // Auto-scroll active item into view within the sidebar
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [currentQuestionId]);

  return (
    <aside className="w-80 shrink-0 hidden lg:block bg-white border-r border-slate-200 h-[calc(100vh-180px)] sticky top-[180px] overflow-y-auto">
      <div className="p-3 border-b border-slate-200 bg-slate-50/70 sticky top-0 z-10 flex items-center justify-between">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Questions List ({questions.length})
        </h2>
        <span className="text-[11px] text-slate-400 font-mono">
          Jump to Question
        </span>
      </div>

      <div className="divide-y divide-slate-100 p-2 space-y-1">
        {questions.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-400">
            No questions match your current filters.
          </div>
        ) : (
          questions.map((q) => {
            const isSelected = q.id === currentQuestionId;
            const isMastered = masteredIds.has(q.id);
            const isBookmarked = bookmarkedIds.has(q.id);

            return (
              <button
                key={q.id}
                ref={isSelected ? activeItemRef : null}
                onClick={() => onSelectQuestion(q.id)}
                className={`w-full text-left p-2.5 rounded-xl text-xs transition-all duration-150 flex items-start gap-2.5 group ${
                  isSelected
                    ? 'bg-blue-50 border border-blue-200 text-blue-900 shadow-xs ring-1 ring-blue-500/30'
                    : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                }`}
              >
                {/* Question number tag */}
                <span
                  className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : isMastered
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                  }`}
                >
                  {String(q.id).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[10px] font-semibold text-slate-400 truncate">
                      {q.topic}
                    </span>
                    {isMastered && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                    )}
                    {isBookmarked && (
                      <Bookmark className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                    )}
                  </div>
                  <p className={`line-clamp-2 font-medium leading-snug ${isSelected ? 'text-blue-950 font-semibold' : 'text-slate-700'}`}>
                    {q.question}
                  </p>
                </div>

                <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-300 opacity-0 group-hover:opacity-100'}`} />
              </button>
            );
          })
        )}
      </div>
    </aside>
  );
};
