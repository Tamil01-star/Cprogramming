import React from 'react';
import { Question } from '../types';
import { QuestionCard } from './QuestionCard';

interface BrowseViewProps {
  questions: Question[];
  masteredIds: Set<number>;
  onToggleMastered: (id: number) => void;
  bookmarkedIds: Set<number>;
  onToggleBookmarked: (id: number) => void;
  onSelectQuestion: (id: number) => void;
}

export const BrowseView: React.FC<BrowseViewProps> = ({
  questions,
  masteredIds,
  onToggleMastered,
  bookmarkedIds,
  onToggleBookmarked,
  onSelectQuestion
}) => {
  if (questions.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
        <p className="text-lg font-semibold text-slate-700">No questions match your current search or filters.</p>
        <p className="text-sm mt-1 text-slate-400">Try clearing your search query or selecting "All Sections".</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {questions.map((q, idx) => (
        <QuestionCard
          key={q.id}
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
      ))}
    </div>
  );
};
