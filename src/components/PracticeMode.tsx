import React, { useState } from 'react';
import { Question, QuizMode } from '../types';
import { QUESTIONS } from '../data/questions';
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, HelpCircle, RotateCcw, Award } from 'lucide-react';

interface PracticeModeProps {
  setMode: (mode: QuizMode) => void;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({ setMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(QUESTIONS.map(q => q.category)))];

  const filteredQuestions = selectedCategory === 'All'
    ? QUESTIONS
    : QUESTIONS.filter(q => q.category === selectedCategory);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const selectedOption = selectedAnswers[currentQ.id];
  const isAnswered = selectedOption !== undefined;
  const isCorrect = isAnswered && selectedOption === currentQ.correctAnswer;

  const handleSelectOption = (optionIndex: number) => {
    if (selectedAnswers[currentQ.id] !== undefined) return; // already answered
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

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowExplanation({});
    setCurrentIndex(0);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercent = Math.round((answeredCount / filteredQuestions.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Top Header & Category Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-2xl">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setMode('dashboard')}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-white">Mode Latihan Soal UTS</h2>
            <p className="text-xs text-slate-400">Soal {currentIndex + 1} dari {filteredQuestions.length}</p>
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentIndex(0);
            }}
            className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-xl px-3 py-2 outline-none focus:border-indigo-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Progres Latihan: {answeredCount} / {filteredQuestions.length} Terjawab</span>
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
            const letter = String.fromCharCode(65 + index); // A, B, C, D
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
            {currentIndex + 1} dari {filteredQuestions.length}
          </span>

          <button
            onClick={() => setCurrentIndex(Math.min(filteredQuestions.length - 1, currentIndex + 1))}
            disabled={currentIndex === filteredQuestions.length - 1}
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
