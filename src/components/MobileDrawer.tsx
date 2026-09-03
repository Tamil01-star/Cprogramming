import React, { useEffect } from 'react';
import { Question, SectionMeta } from '../types';
import { X, CheckCircle2, Bookmark, Layers } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  sections: SectionMeta[];
  currentQuestionId: number;
  onSelectQuestion: (id: number) => void;
  masteredIds: Set<number>;
  bookmarkedIds: Set<number>;
  selectedSectionId: number | null;
  onSelectSection: (id: number | null) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  questions,
  sections,
  currentQuestionId,
  onSelectQuestion,
  masteredIds,
  bookmarkedIds,
  selectedSectionId,
  onSelectSection
}) => {
  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col">
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-blue-600" />
            <div>
              <h2 className="text-sm font-bold text-slate-900">Sections & Questions</h2>
              <p className="text-xs text-slate-500 font-mono">
                {questions.length} questions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Question list grouped by Section */}
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {sections.map((sec) => {
            const secQuestions = questionsBySection.get(sec.id) || [];
            if (selectedSectionId !== null && selectedSectionId !== sec.id) return null;
            if (secQuestions.length === 0) return null;

            return (
              <div key={sec.id} className="space-y-1.5">
                <button
                  onClick={() => onSelectSection(selectedSectionId === sec.id ? null : sec.id)}
                  className="w-full text-left px-2.5 py-1.5 rounded-lg bg-slate-100 flex items-center justify-between"
                >
                  <span className="text-xs font-extrabold uppercase text-slate-800 flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ backgroundColor: sec.color }}
                    ></span>
                    Section {sec.id}: {sec.shortTitle}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                    {secQuestions.length}
                  </span>
                </button>

                <div className="space-y-1 pl-1">
                  {secQuestions.map((q) => {
                    const isSelected = q.id === currentQuestionId;
                    const isMastered = masteredIds.has(q.id);
                    const isBookmarked = bookmarkedIds.has(q.id);

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          onSelectQuestion(q.id);
                          onClose();
                        }}
                        className={`w-full text-left p-2 rounded-xl text-xs transition-colors flex items-start gap-2 ${
                          isSelected
                            ? 'bg-blue-50 border border-blue-300 text-blue-950 font-semibold'
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span
                          className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : isMastered
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-slate-100 text-slate-600'
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
                          <p className="line-clamp-2 leading-tight text-[11px]">
                            {q.question.split('\n\n')[0]}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
