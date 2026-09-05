import React from 'react';
import { Search, X, BookOpen, Layers, Award, Menu, Bookmark, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalQuestions: number;
  totalSections: number;
  totalTopics: number;
  masteredCount: number;
  bookmarkedCount: number;
  onToggleMobileMenu: () => void;
  filterStatus: 'all' | 'mastered' | 'bookmarked';
  onFilterStatusChange: (status: 'all' | 'mastered' | 'bookmarked') => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  totalQuestions,
  totalSections,
  totalTopics,
  masteredCount,
  bookmarkedCount,
  onToggleMobileMenu,
  filterStatus,
  onFilterStatusChange
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
      {/* Top Banner Gradient matching theme reference */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600"></div>

      <div className="w-full px-3 py-3">
        {/* Main Bar */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Titles */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <img
              src={logoImg}
              alt="C Programming Logo"
              className="w-11 h-11 rounded-xl object-cover border border-slate-200 shadow-md shrink-0"
            />

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  C Programming Interview Questions
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                  Campus Placement Bank
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-blue-600 flex items-center gap-1.5">
                <span>Learn.</span>
                <span className="text-slate-300">•</span>
                <span>Revise.</span>
                <span className="text-slate-300">•</span>
                <span>Prepare.</span>
              </p>
            </div>
          </div>

          {/* Quick Filter Toggles on Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => onFilterStatusChange('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                filterStatus === 'all'
                  ? 'bg-blue-50 text-blue-700 border border-blue-300'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All ({totalQuestions})
            </button>
            <button
              onClick={() => onFilterStatusChange('mastered')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                filterStatus === 'mastered'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Mastered ({masteredCount})
            </button>
            <button
              onClick={() => onFilterStatusChange('bookmarked')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                filterStatus === 'bookmarked'
                  ? 'bg-amber-50 text-amber-700 border border-amber-300'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 text-amber-500" />
              Saved ({bookmarkedCount})
            </button>
          </div>
        </div>

        {/* Subtitle description & Stats bar */}
        <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-slate-600">
          <p className="line-clamp-1 text-slate-600 max-w-2xl">
            Complete C programming interview questions and easy-to-understand answers for quick revision and campus placement preparation.
          </p>

          <div className="flex items-center flex-wrap gap-2 text-xs font-medium shrink-0">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <strong className="font-bold text-slate-900">{totalQuestions}</strong> Questions
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
              <Layers className="w-3.5 h-3.5 text-cyan-600" />
              <strong className="font-bold text-slate-900">{totalSections}</strong> Sections
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              <strong className="font-bold text-slate-900">{totalTopics}</strong> Topics
            </span>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-3 relative">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search questions by keyword, topic, code, or question text (e.g. pointer, malloc, palindrome)..."
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 focus:border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
