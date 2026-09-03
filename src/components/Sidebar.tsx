import React, { useRef, useEffect } from 'react';
import { Question, SectionMeta } from '../types';
import { CheckCircle2, Bookmark, ChevronRight, Layers } from 'lucide-react';

interface SidebarProps {
  questions: Question[];
  sections: SectionMeta[];
  currentQuestionId: number;
  onSelectQuestion: (id: number) => void;
  masteredIds: Set<number>;
  bookmarkedIds: Set<number>;
  selectedSectionId: number | null;
  onSelectSection: (id: number | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  questions,
  sections,
  currentQuestionId,
  onSelectQuestion,
  masteredIds,
  bookmarkedIds,
  selectedSectionId,
  onSelectSection
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

  // Group questions by sectionId
  const questionsBySection = React.useMemo(() => {
    const map = new Map<number, Question[]>();
    sections.forEach((sec) => map.set(sec.id, []));
    questions.forEach((q) => {
      const list = map.get(q.sectionId) || [];
      list.push(q);
      map.set(q.sectionId, list);
    });
    return map;
  }, [questions, sections]);

  return (
    <aside className="w-80 shrink-0 hidden lg:block bg-white border border-slate-200 rounded-2xl shadow-xs h-[calc(100vh-180px)] sticky top-[180px] overflow-y-auto">
      {/* Header */}
      <div className="p-3.5 border-b border-slate-200 bg-slate-50 sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-slate-800 font-bold text-xs uppercase tracking-wider">
          <Layers className="w-4 h-4 text-blue-600" />
          <span>Sections & Questions</span>
        </div>
        <span className="text-[11px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
          {questions.length} Qs
        </span>
      </div>

      <div className="p-2 space-y-4">
        {questions.length === 0 ? (
          <div className="p-8 text-center text-xs text-slate-400">
            No questions match your current filters.
          </div>
        ) : (
          sections.map((sec) => {
            const secQuestions = questionsBySection.get(sec.id) || [];
            if (selectedSectionId !== null && selectedSectionId !== sec.id) return null;
            if (secQuestions.length === 0) return null;

            return (
              <div key={sec.id} className="space-y-1">
                {/* Section Header Banner */}
                <button
                  onClick={() => onSelectSection(selectedSectionId === sec.id ? null : sec.id)}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-between group"
                >
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ backgroundColor: sec.color }}
                    ></span>
                    <span>Section {sec.id}: {sec.shortTitle}</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    {secQuestions.length}
                  </span>
                </button>

                {/* Question Items */}
                <div className="space-y-1 pl-1">
                  {secQuestions.map((q) => {
                    const isSelected = q.id === currentQuestionId;
                    const isMastered = masteredIds.has(q.id);
                    const isBookmarked = bookmarkedIds.has(q.id);

                    return (
                      <button
                        key={q.id}
                        ref={isSelected ? activeItemRef : null}
                        onClick={() => onSelectQuestion(q.id)}
                        className={`w-full text-left p-2 rounded-xl text-xs transition-all duration-150 flex items-start gap-2 group ${
                          isSelected
                            ? 'bg-blue-50 border border-blue-300 text-blue-950 font-semibold shadow-xs'
                            : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : isMastered
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                          }`}
                        >
                          Q{String(q.id).padStart(2, '0')}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-0.5">
                            <span className="text-[10px] text-slate-400 truncate">
                              {q.topic}
                            </span>
                            {isMastered && (
                              <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                            )}
                            {isBookmarked && (
                              <Bookmark className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                            )}
                          </div>
                          <p className={`line-clamp-2 leading-tight text-[11px] ${isSelected ? 'text-blue-950 font-bold' : 'text-slate-700'}`}>
                            {q.question.split('\n\n')[0]}
                          </p>
                        </div>

                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform mt-0.5 ${isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-300 opacity-0 group-hover:opacity-100'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </div>
    </aside>
  );
};
