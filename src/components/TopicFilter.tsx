import React from 'react';
import { SectionMeta } from '../types';
import { LayoutGrid, BookOpenCheck, Layers } from 'lucide-react';

interface TopicFilterProps {
  sections: SectionMeta[];
  selectedSectionId: number | null;
  onSelectSection: (id: number | null) => void;
  topics: string[];
  selectedTopic: string | null;
  onSelectTopic: (topic: string | null) => void;
  selectedDifficulty: string | null;
  onSelectDifficulty: (diff: 'Basic' | 'Medium' | 'Hard' | null) => void;
  viewMode: 'study' | 'browse';
  onViewModeChange: (mode: 'study' | 'browse') => void;
  filteredCount: number;
}

export const TopicFilter: React.FC<TopicFilterProps> = ({
  sections,
  selectedSectionId,
  onSelectSection,
  topics,
  selectedTopic,
  onSelectTopic,
  selectedDifficulty,
  onSelectDifficulty,
  viewMode,
  onViewModeChange,
  filteredCount
}) => {
  return (
    <div className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3 sticky top-[125px] z-20 shadow-2xs">
      <div className="w-full flex flex-col gap-3">
        {/* Row 1: PDF Sections Bar */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
          {/* Section Tabs */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mr-1">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              PDF Sections:
            </span>

            <button
              onClick={() => onSelectSection(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedSectionId === null
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All (201)
            </button>

            {sections.map((sec) => {
              const isSelected = selectedSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => onSelectSection(sec.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span className="font-bold">Sec {sec.id}:</span>
                  <span>{sec.shortTitle}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${isSelected ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'}`}>
                    {sec.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl shrink-0 border border-slate-200">
            <button
              onClick={() => onViewModeChange('study')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'study'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpenCheck className="w-3.5 h-3.5" />
              <span>Study Card</span>
            </button>
            <button
              onClick={() => onViewModeChange('browse')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'browse'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Browse All</span>
            </button>
          </div>
        </div>

        {/* Row 2: Topic & Difficulty Filters */}
        <div className="flex items-center justify-between gap-3 text-xs flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Topic Filter dropdown */}
            <div className="flex items-center gap-1">
              <span className="text-slate-500 font-medium">Topic:</span>
              <select
                value={selectedTopic || ''}
                onChange={(e) => onSelectTopic(e.target.value ? e.target.value : null)}
                className="bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">All Topics ({topics.length})</option>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Pills */}
            <div className="flex items-center gap-1">
              <span className="text-slate-500 font-medium ml-2">Level:</span>
              {(['Basic', 'Medium', 'Hard'] as const).map((lvl) => {
                const isSelected = selectedDifficulty === lvl;
                return (
                  <button
                    key={lvl}
                    onClick={() => onSelectDifficulty(isSelected ? null : lvl)}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-semibold transition-colors ${
                      isSelected
                        ? lvl === 'Basic'
                          ? 'bg-emerald-600 text-white'
                          : lvl === 'Medium'
                          ? 'bg-amber-600 text-white'
                          : 'bg-rose-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-slate-500 text-xs font-mono">
            Showing <strong className="text-slate-900 font-bold">{filteredCount}</strong> questions
          </div>
        </div>
      </div>
    </div>
  );
};
