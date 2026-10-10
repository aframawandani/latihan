import React, { useState, useEffect } from 'react';
import { Question, QuizMode } from '../types';
import { QUESTIONS } from '../data/questions';
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, RotateCcw, Save } from 'lucide-react';
import { saveProgressToIDB, getProgressFromIDB } from '../utils/db';

interface PracticeModeProps {
  setMode: (mode: QuizMode) => void;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({ setMode }) => {
  // Configuration state
  const [isConfiguring, setIsConfiguring] = useState<boolean>(true);
  const [selectedModules, setSelectedModules] = useState<string[]>(['modul-1', 'modul-2']);
  const [questionLimit, setQuestionLimit] = useState<number>(20);

  // Active quiz state
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved progress from IndexedDB on mount
  useEffect(() => {
    const loadSavedSession = async () => {
      const savedSession = await getProgressFromIDB('practice_session');
      if (savedSession && savedSession.activeQuestions && savedSession.activeQuestions.length > 0) {
        setActiveQuestions(savedSession.activeQuestions);
        setCurrentIndex(savedSession.currentIndex || 0);
        setSelectedAnswers(savedSession.selectedAnswers || {});
        setShowExplanation(savedSession.showExplanation || {});
        setBookmarked(savedSession.bookmarked || []);
        setSelectedModules(savedSession.selectedModules || ['modul-1', 'modul-2']);
        setQuestionLimit(savedSession.questionLimit ?? 20);
        setIsConfiguring(savedSession.isConfiguring ?? false);
      }
      setIsLoaded(true);
    };
    loadSavedSession();
  }, []);

  // Save session to IndexedDB whenever active state changes
  useEffect(() => {
    if (!isLoaded) return;
    saveProgressToIDB('practice_session', {
      isConfiguring,
      selectedModules,
      questionLimit,
      activeQuestions,
      currentIndex,
      selectedAnswers,
      showExplanation,
      bookmarked
    });
  }, [isConfiguring, selectedModules, questionLimit, activeQuestions, currentIndex, selectedAnswers, showExplanation, bookmarked, isLoaded]);

  const handleToggleModule = (mod: string) => {
    if (selectedModules.includes(mod)) {
      if (selectedModules.length === 1) return;
      setSelectedModules(selectedModules.filter(m => m !== mod));
    } else {
      setSelectedModules([...selectedModules, mod]);
    }
  };

  const handleStartQuiz = () => {
    let pool = QUESTIONS.filter(q => selectedModules.includes(q.moduleId));
    pool = [...pool].sort(() => Math.random() - 0.5);
    const finalPool = questionLimit === 0 ? pool : pool.slice(0, questionLimit);

    setActiveQuestions(finalPool);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation({});
    setIsConfiguring(false);
  };

  const currentQ = activeQuestions[currentIndex];
  const selectedOption = currentQ ? selectedAnswers[currentQ.id] : undefined;
  const isAnswered = selectedOption !== undefined;
  const isCorrect = isAnswered && currentQ && selectedOption === currentQ.correctAnswer;

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQ || selectedAnswers[currentQ.id] !== undefined) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQ.id]: optionIndex
    });
    setShowExplanation({
      ...showExplanation,
      [currentQ.id]: true
    });
  };

  const toggleBookmark = (id: number) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(b => b !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  const answeredCount = Object.keys(selectedAnswers).filter(id => 
    activeQuestions.some(q => q.id === Number(id))
  ).length;
  const progressPercent = activeQuestions.length > 0 ? Math.round((answeredCount / activeQuestions.length) * 100) : 0;

  if (!isLoaded) {
    return <div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-400">Memuat data dari penyimpanan...</div>;
  }

  // 1. Configuration Screen
  if (isConfiguring) {
    const totalAvailable = QUESTIONS.filter(q => selectedModules.includes(q.moduleId)).length;

    return (
      <div className="max-w-2xl mx-auto px-4 py-12 space-y-8 animate-fadeIn">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-500"></div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 text-indigo-400 flex items-center justify-center font-bold">
              <Save className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Pengaturan Latihan Soal</h2>
              <p className="text-xs text-slate-400">Progress Anda otomatis tersimpan aman di IndexedDB</p>
            </div>
          </div>

          {/* Module Multi-Selection */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-200">Pilih Modul:</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div 
                onClick={() => handleToggleModule('modul-1')}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  selectedModules.includes('modul-1')
                    ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-white">Modul 1</div>
                  <div className="text-xs text-slate-400 mt-0.5">Sistem Informasi & Web</div>
                </div>
                <input 
                  type="checkbox" 
                  checked={selectedModules.includes('modul-1')}
                  onChange={() => {}}
                  className="w-4 h-4 rounded text-indigo-600 accent-indigo-600 cursor-pointer"
                />
              </div>

              <div 
                onClick={() => handleToggleModule('modul-2')}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  selectedModules.includes('modul-2')
                    ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-600'
                }`}
              >
                <div>
                  <div className="font-bold text-sm text-white">Modul 2</div>
                  <div className="text-xs text-slate-400 mt-0.5">Hierarki Data & HTML5</div>
                </div>
                <input 
                  type="checkbox" 
                  checked={selectedModules.includes('modul-2')}
                  onChange={() => {}}
                  className="w-4 h-4 rounded text-indigo-600 accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Question Limit Selection */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-200">Jumlah Soal:</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[10, 20, 30, 50].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuestionLimit(num)}
                  className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                    questionLimit === num
                      ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                      : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {num} Soal
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setQuestionLimit(0)}
              className={`w-full p-3 rounded-xl border text-xs font-semibold transition-all ${
                questionLimit === 0
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                  : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Semua Soal Tersedia ({totalAvailable} Soal)
            </button>
          </div>

          {/* Start Button */}
          <div className="pt-2">
            <button
              onClick={handleStartQuiz}
              disabled={selectedModules.length === 0}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01] disabled:opacity-50"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Mulai Latihan Soal</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Tidak ada soal tersimpan</h2>
        <button
          onClick={() => setIsConfiguring(true)}
          className="bg-indigo-600 px-4 py-2 rounded-xl text-white text-sm"
        >
          Pengaturan Latihan
        </button>
      </div>
    );
  }

  // 2. Active Quiz Screen
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Top Header & Back to Config */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsConfiguring(true)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center space-x-1.5 text-xs font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ganti Pengaturan</span>
          </button>
          <div>
            <h2 className="text-lg font-bold text-white">Latihan Soal</h2>
            <p className="text-xs text-slate-400">Soal {currentIndex + 1} dari {activeQuestions.length}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs text-emerald-400 flex items-center space-x-1 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
            <Save className="w-3.5 h-3.5" />
            <span>Tersimpan di IndexedDB</span>
          </span>
          <button
            onClick={handleStartQuiz}
            className="flex items-center space-x-1.5 text-xs text-indigo-400 hover:text-indigo-300 bg-slate-800 px-3 py-2 rounded-xl border border-slate-700"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Acak Ulang</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Progres Latihan: {answeredCount} / {activeQuestions.length} Terjawab</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {currentQ.category}
          </span>
          <button
            onClick={() => toggleBookmark(currentQ.id)}
            className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700"
          >
            {bookmarked.includes(currentQ.id) ? (
              <>
                <BookmarkCheck className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 font-medium">Tandai</span>
              </>
            ) : (
              <>
                <Bookmark className="w-4 h-4" />
                <span>Tandai Soal</span>
              </>
            )}
          </button>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
          {currentQ.question}
        </h3>

        {/* Options List */}
        <div className="space-y-3 pt-2">
          {currentQ.options.map((option, index) => {
            const letter = String.fromCharCode(65 + index);
            const isSelected = selectedOption === index;
            const isThisCorrect = index === currentQ.correctAnswer;

            let optionStyle = 'bg-slate-800/60 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-indigo-500/50';

            if (isAnswered) {
              if (isThisCorrect) {
                optionStyle = 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200 shadow-lg shadow-emerald-950/50';
              } else if (isSelected && !isThisCorrect) {
                optionStyle = 'bg-rose-950/40 border-rose-500/60 text-rose-200';
              } else {
                optionStyle = 'bg-slate-800/30 border-slate-800 text-slate-500 opacity-60';
              }
            }

            return (
              <button
                key={index}
                disabled={isAnswered}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3 ${optionStyle}`}
              >
                <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                  isAnswered && isThisCorrect
                    ? 'bg-emerald-600 text-white'
                    : isAnswered && isSelected && !isThisCorrect
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-700 text-slate-300'
                }`}>
                  {letter}
                </span>
                <span className="text-sm sm:text-base leading-relaxed flex-1 pt-0.5">{option}</span>
                {isAnswered && isThisCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                )}
                {isAnswered && isSelected && !isThisCorrect && (
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Box */}
        {isAnswered && (
          <div className={`p-5 rounded-xl border animate-fadeIn ${
            isCorrect 
              ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200' 
              : 'bg-rose-950/20 border-rose-500/30 text-rose-200'
          }`}>
            <div className="flex items-center space-x-2 font-bold text-sm mb-1">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Jawaban Anda Benar!</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span className="text-rose-400">Jawaban Kurang Tepat</span>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300 pt-1">
              <strong className="text-white">Pembahasan: </strong> {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <span className="text-xs text-slate-400">
            {currentIndex + 1} dari {activeQuestions.length}
          </span>

          <button
            onClick={() => setCurrentIndex(Math.min(activeQuestions.length - 1, currentIndex + 1))}
            disabled={currentIndex === activeQuestions.length - 1}
            className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-600/30"
          >
            <span>Selanjutnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
