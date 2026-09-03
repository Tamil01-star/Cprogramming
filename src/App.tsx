import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { QUESTIONS, SECTIONS } from './data/questionsData';
import { Question } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MobileDrawer } from './components/MobileDrawer';
import { TopicFilter } from './components/TopicFilter';
import { QuestionCard } from './components/QuestionCard';
import { BrowseView } from './components/BrowseView';
import { Footer } from './components/Footer';

export default function App() {
  // Mastered & Bookmarked persisted in localStorage
  const [masteredIds, setMasteredIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('c_prep_mastered');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('c_prep_bookmarked');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Current question ID (read from URL hash if available)
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(() => {
    const hash = window.location.hash;
    const match = hash.match(/#q=(\d+)/);
    if (match) {
      const id = parseInt(match[1], 10);
      if (id >= 1 && id <= QUESTIONS.length) return id;
    }
    return 1;
  });

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Basic' | 'Medium' | 'Hard' | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'mastered' | 'bookmarked'>('all');
  const [viewMode, setViewMode] = useState<'study' | 'browse'>('study');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync Mastered state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('c_prep_mastered', JSON.stringify(Array.from(masteredIds)));
    } catch (e) {
      console.error(e);
    }
  }, [masteredIds]);

  // Sync Bookmarked state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('c_prep_bookmarked', JSON.stringify(Array.from(bookmarkedIds)));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  // Sync URL hash
  useEffect(() => {
    window.location.hash = `q=${currentQuestionId}`;
  }, [currentQuestionId]);

  // Unique topics list
  const allTopics = useMemo(() => {
    const topicsSet = new Set<string>();
    QUESTIONS.forEach((q) => {
      if (selectedSectionId === null || q.sectionId === selectedSectionId) {
        topicsSet.add(q.topic);
      }
    });
    return Array.from(topicsSet).sort();
  }, [selectedSectionId]);

  // Filtered questions computation
  const filteredQuestions = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return QUESTIONS.filter((q) => {
      // 1. Status Filter
      if (filterStatus === 'mastered' && !masteredIds.has(q.id)) return false;
      if (filterStatus === 'bookmarked' && !bookmarkedIds.has(q.id)) return false;

      // 2. Section Filter
      if (selectedSectionId !== null && q.sectionId !== selectedSectionId) return false;

      // 3. Topic Filter
      if (selectedTopic !== null && q.topic !== selectedTopic) return false;

      // 4. Difficulty Filter
      if (selectedDifficulty !== null && q.difficulty !== selectedDifficulty) return false;

      // 5. Search Query
      if (query) {
        const inQuestion = q.question.toLowerCase().includes(query);
        const inTopic = q.topic.toLowerCase().includes(query);
        const inSubtopic = q.subtopic.toLowerCase().includes(query);
        const inDirect = q.answer.directAnswer.toLowerCase().includes(query);
        const inCode = (q.givenCode || '').toLowerCase().includes(query) || (q.answer.codeExample || '').toLowerCase().includes(query);
        const inPdfId = q.pdfId.toLowerCase().includes(query);
        const inNum = String(q.id).includes(query);

        if (!inQuestion && !inTopic && !inSubtopic && !inDirect && !inCode && !inPdfId && !inNum) {
          return false;
        }
      }

      return true;
    });
  }, [
    searchQuery,
    selectedSectionId,
    selectedTopic,
    selectedDifficulty,
    filterStatus,
    masteredIds,
    bookmarkedIds
  ]);

  // Current Question object
  const currentQuestion = useMemo(() => {
    // If currentQuestionId is inside filtered list, pick it
    const found = filteredQuestions.find((q) => q.id === currentQuestionId);
    if (found) return found;
    // Otherwise pick first filtered question, or fallback to first overall
    return filteredQuestions.length > 0 ? filteredQuestions[0] : QUESTIONS[0];
  }, [filteredQuestions, currentQuestionId]);

  // Current index in filtered list
  const currentFilteredIndex = useMemo(() => {
    return filteredQuestions.findIndex((q) => q.id === currentQuestion.id);
  }, [filteredQuestions, currentQuestion]);

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    if (currentFilteredIndex > 0) {
      setCurrentQuestionId(filteredQuestions[currentFilteredIndex - 1].id);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  }, [currentFilteredIndex, filteredQuestions]);

  const handleNext = useCallback(() => {
    if (currentFilteredIndex < filteredQuestions.length - 1) {
      setCurrentQuestionId(filteredQuestions[currentFilteredIndex + 1].id);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  }, [currentFilteredIndex, filteredQuestions]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input field
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext]);

  // Toggle helpers
  const handleToggleMastered = (id: number) => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleToggleBookmarked = (id: number) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectQuestion = (id: number) => {
    setCurrentQuestionId(id);
    if (viewMode === 'browse') {
      setViewMode('study');
    }
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalQuestions={QUESTIONS.length}
        totalSections={SECTIONS.length}
        totalTopics={allTopics.length}
        masteredCount={masteredIds.size}
        bookmarkedCount={bookmarkedIds.size}
        onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
        filterStatus={filterStatus}
        onFilterStatusChange={setFilterStatus}
      />

      {/* Sticky Filter Bar */}
      <TopicFilter
        sections={SECTIONS}
        selectedSectionId={selectedSectionId}
        onSelectSection={(id) => {
          setSelectedSectionId(id);
          setSelectedTopic(null); // Reset topic when switching sections
        }}
        topics={allTopics}
        selectedTopic={selectedTopic}
        onSelectTopic={setSelectedTopic}
        selectedDifficulty={selectedDifficulty}
        onSelectDifficulty={setSelectedDifficulty}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        filteredCount={filteredQuestions.length}
      />

      {/* Mobile Slide-out Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        questions={filteredQuestions}
        currentQuestionId={currentQuestion.id}
        onSelectQuestion={handleSelectQuestion}
        masteredIds={masteredIds}
        bookmarkedIds={bookmarkedIds}
      />

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-start gap-8">
          {/* Desktop Left Sidebar */}
          <Sidebar
            questions={filteredQuestions}
            currentQuestionId={currentQuestion.id}
            onSelectQuestion={handleSelectQuestion}
            masteredIds={masteredIds}
            bookmarkedIds={bookmarkedIds}
          />

          {/* Right / Center Question Display Area */}
          <section className="flex-1 min-w-0">
            {filteredQuestions.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 shadow-xs">
                <p className="text-lg font-bold text-slate-800">No questions matched your criteria</p>
                <p className="text-sm mt-1 text-slate-500">
                  Try clearing your search query or reset filter pills to view all questions.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedSectionId(null);
                    setSelectedTopic(null);
                    setSelectedDifficulty(null);
                    setFilterStatus('all');
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs"
                >
                  Reset All Filters
                </button>
              </div>
            ) : viewMode === 'study' ? (
              <QuestionCard
                question={currentQuestion}
                currentIndex={currentFilteredIndex >= 0 ? currentFilteredIndex : 0}
                totalFiltered={filteredQuestions.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
                isMastered={masteredIds.has(currentQuestion.id)}
                onToggleMastered={() => handleToggleMastered(currentQuestion.id)}
                isBookmarked={bookmarkedIds.has(currentQuestion.id)}
                onToggleBookmarked={() => handleToggleBookmarked(currentQuestion.id)}
                hasPrevious={currentFilteredIndex > 0}
                hasNext={currentFilteredIndex < filteredQuestions.length - 1}
              />
            ) : (
              <BrowseView
                questions={filteredQuestions}
                masteredIds={masteredIds}
                onToggleMastered={handleToggleMastered}
                bookmarkedIds={bookmarkedIds}
                onToggleBookmarked={handleToggleBookmarked}
                onSelectQuestion={handleSelectQuestion}
              />
            )}
          </section>
        </div>
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
