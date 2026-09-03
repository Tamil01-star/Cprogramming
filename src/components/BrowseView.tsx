import React from 'react';
import { Question, SectionMeta } from '../types';
import { QuestionCard } from './QuestionCard';
import { Layers } from 'lucide-react';

interface BrowseViewProps {
  questions: Question[];
  sections: SectionMeta[];
  masteredIds: Set<number>;
  onToggleMastered: (id: number) => void;
  bookmarkedIds: Set<number>;
  onToggleBookmarked: (id: number) => void;
  onSelectQuestion: (id: number) => void;
}

export const BrowseView: React.FC<BrowseViewProps> = ({
  questions,
  sections,
  masteredIds,
  onToggleMastered,
  bookmarkedIds,
  onToggleBookmarked,
  onSelectQuestion
}) => {
  if (questions.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 shadow-xs">
        <p className="text-lg font-semibold text-slate-700">No questions match your current search or filters.</p>
        <p className="text-sm mt-1 text-slate-400">Try clearing your search query or selecting "All Sections".</p>
      </div>
    );
  }

  // Find SectionMeta by id
  const getSectionMeta = (sectionId: number) => {
    return sections.find((s) => s.id === sectionId);
  };

  return (
    <div className="space-y-8">
      {questions.map((q, idx) => {
        // Render Section Header Banner if it's the first question of a new section
        const prevQuestion = idx > 0 ? questions[idx - 1] : null;
        const showSectionHeader = !prevQuestion || prevQuestion.sectionId !== q.sectionId;
        const secMeta = getSectionMeta(q.sectionId);

        return (
          <React.Fragment key={q.id}>
            {showSectionHeader && secMeta && (
              <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-6 shadow-md border border-slate-800 my-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-500 text-white uppercase">
                        Section {secMeta.id}
                      </span>
                      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                        {secMeta.title}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {secMeta.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 text-slate-200 text-xs font-mono font-semibold border border-slate-700">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      {secMeta.count} Questions
                    </span>
                  </div>
                </div>
              </div>
            )}

            <QuestionCard
              question={q}
              currentIndex={idx}
              totalFiltered={questions.length}
              onPrevious={() => {
                if (idx > 0) onSelectQuestion(questions[idx - 1].id);
              }}
              onNext={() => {
                if (idx < questions.length - 1) onSelectQuestion(questions[idx + 1].id);
              }}
              isMastered={masteredIds.has(q.id)}
              onToggleMastered={() => onToggleMastered(q.id)}
              isBookmarked={bookmarkedIds.has(q.id)}
              onToggleBookmarked={() => onToggleBookmarked(q.id)}
              hasPrevious={idx > 0}
              hasNext={idx < questions.length - 1}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};
