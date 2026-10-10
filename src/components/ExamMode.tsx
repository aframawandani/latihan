import React, { useState, useEffect } from 'react';
import { QuizMode } from '../types';
import { QUESTIONS } from '../data/questions';
import { Clock, ArrowLeft, ArrowRight, Flag, CheckCircle2, AlertTriangle, Award, RotateCcw, ShieldCheck, Home } from 'lucide-react';

interface ExamModeProps {
  setMode: (mode: QuizMode) => void;
}

export const ExamMode: React.FC<ExamModeProps> = ({ setMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = QUESTIONS[currentIndex];
  const selectedOption = userAnswers[currentQ.id];

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers({
      ...userAnswers,
      [currentQ.id]: optionIndex
    });
  };

  const toggleFlag = (id: number) => {
    if (flagged.includes(id)) {
      setFlagged(flagged.filter(f => f !== id));
    } else {
      setFlagged([...flagged, id]);
    }
  };

  // Calculate score
  const calculateResults = () => {
    let correct = 0;
    QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      incorrect: QUESTIONS.length - correct,
      unanswered: QUESTIONS.length - Object.keys(userAnswers).length,
      score: Math.round((correct / QUESTIONS.length) * 100)
    };
  };

  const results = calculateResults();
  const answeredCount = Object.keys(userAnswers).length;

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-500"></div>

          <div className="w-20 h-20 rounded-2xl bg-indigo-600/10 text-indigo-400 mx-auto flex items-center justify-center shadow-lg shadow-indigo-600/20">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Hasil Simulasi UTS Selesai
            </span>
            <h2 className="text-3xl font-extrabold text-white">Nilai Akhir Anda</h2>
            <p className="text-slate-400 text-sm">Evaluasi kompetensi Sistem Informasi & Web Programming</p>
          </div>

          {/* Score Display */}
          <div className="inline-flex flex-col items-center justify-center p-8 bg-slate-800/60 border border-slate-700/80 rounded-2xl shadow-inner">
            <div className="text-6xl font-black bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
              {results.score}
            </div>
            <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mt-1">Skala 100</div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto pt-2">
            <div className="bg-emerald-950/30 border border-emerald-500/20 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-emerald-400">{results.correct}</div>
              <div className="text-xs text-slate-400 mt-1">Benar</div>
            </div>
            <div className="bg-rose-950/30 border border-rose-500/20 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-rose-400">{results.incorrect}</div>
              <div className="text-xs text-slate-400 mt-1">Salah</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-slate-300">{results.unanswered}</div>
              <div className="text-xs text-slate-400 mt-1">Kosong</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setUserAnswers({});
                setFlagged([]);
                setTimeLeft(60 * 60);
                setCurrentIndex(0);
              }}
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-colors border border-slate-700"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Simulasi Ujian</span>
            </button>

            <button
              onClick={() => setMode('dashboard')}
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-600/30 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Kembali ke Beranda</span>
            </button>
          </div>
        </div>

        {/* Review Answers List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Review Jawaban & Pembahasan</h3>
          <div className="space-y-4">
            {QUESTIONS.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const isCorrectAns = userAns === q.correctAnswer;
              return (
                <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      Soal {idx + 1} - {q.category}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                      isCorrectAns 
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30' 
                        : 'bg-rose-950/60 text-rose-300 border border-rose-500/30'
                    }`}>
                      {isCorrectAns ? 'Benar' : 'Salah / Tidak Dijawab'}
                    </span>
                  </div>

                  <h4 className="font-bold text-white text-base">{q.question}</h4>

                  <div className="space-y-1.5 text-sm pt-1">
                    <div className="text-slate-300">
                      <strong className="text-slate-400">Jawaban Anda: </strong> 
                      <span className={isCorrectAns ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>
                        {userAns !== undefined ? `${String.fromCharCode(65 + userAns)}. ${q.options[userAns]}` : 'Tidak dijawab'}
                      </span>
                    </div>
                    {!isCorrectAns && (
                      <div className="text-emerald-300">
                        <strong className="text-slate-400">Jawaban Benar: </strong> 
                        <span>{String.fromCharCode(65 + q.correctAnswer)}. {q.options[q.correctAnswer]}</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-slate-800/60 border border-slate-700/60 p-4 rounded-xl text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                    <strong className="text-white">Pembahasan: </strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Question Area (3 Cols) */}
      <div className="lg:col-span-3 space-y-6">
        {/* Header Bar */}
        <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-2xl">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMode('dashboard')}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-lg font-bold text-white">Simulasi Ujian UTS (50 Soal)</h2>
              <p className="text-xs text-slate-400">Soal {currentIndex + 1} dari 50</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-xl text-amber-400 font-mono font-bold text-sm">
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {currentQ.category}
            </span>
            <button
              onClick={() => toggleFlag(currentQ.id)}
              className={`flex items-center space-x-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                flagged.includes(currentQ.id)
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-medium'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <Flag className={`w-4 h-4 ${flagged.includes(currentQ.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
              <span>{flagged.includes(currentQ.id) ? 'Ditandai Ragu' : 'Tandai Ragu'}</span>
            </button>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((option, index) => {
              const letter = String.fromCharCode(65 + index);
              const isSelected = selectedOption === index;
              return (
                <button
                  key={index}
                  onClick={() => handleSelectOption(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3 ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-600/10'
                      : 'bg-slate-800/60 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                  }`}
                >
                  <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {letter}
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed flex-1 pt-0.5">{option}</span>
                </button>
              );
            })}
          </div>

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
              {currentIndex + 1} / 50
            </span>

            <button
              onClick={() => setCurrentIndex(Math.min(QUESTIONS.length - 1, currentIndex + 1))}
              disabled={currentIndex === QUESTIONS.length - 1}
              className="flex items-center space-x-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-lg shadow-indigo-600/30"
            >
              <span>Selanjutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Palette (1 Col) */}
      <div className="space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 sticky top-24">
          <div>
            <h3 className="font-bold text-white text-base">Navigasi Soal</h3>
            <p className="text-xs text-slate-400">Klik nomor untuk melompat ke soal</p>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-emerald-500"></div>
              <span>Terjawab ({answeredCount})</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-amber-500"></div>
              <span>Ragu-ragu ({flagged.length})</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded bg-slate-800 border border-slate-700"></div>
              <span>Belum ({50 - answeredCount})</span>
            </div>
          </div>

          {/* Palette Grid */}
          <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1">
            {QUESTIONS.map((q, idx) => {
              const isAns = userAnswers[q.id] !== undefined;
              const isFlag = flagged.includes(q.id);
              const isCurr = currentIndex === idx;

              let btnClass = 'bg-slate-800 text-slate-300 border-slate-700';
              if (isAns) btnClass = 'bg-emerald-600/20 text-emerald-300 border-emerald-500/50';
              if (isFlag) btnClass = 'bg-amber-500/20 text-amber-300 border-amber-500/50';
              if (isCurr) btnClass += ' ring-2 ring-indigo-500 font-bold';

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-10 rounded-xl border text-xs font-semibold flex items-center justify-center transition-all ${btnClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Submit Exam Button */}
          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all text-sm"
          >
            Selesaikan Ujian
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-6 shadow-2xl animate-fadeIn">
            <div className="flex items-center space-x-3 text-amber-400">
              <AlertTriangle className="w-8 h-8 flex-shrink-0" />
              <h3 className="text-xl font-bold text-white">Konfirmasi Selesai Ujian</h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Anda telah menjawab <strong className="text-white">{answeredCount}</strong> dari <strong className="text-white">50</strong> soal. Yakin ingin mengakhiri dan melihat nilai akhir ujian?
            </p>

            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-3 rounded-xl text-sm transition-colors"
              >
                Lanjutkan Ujian
              </button>
              <button
                onClick={() => {
                  setShowConfirmSubmit(false);
                  setIsSubmitted(true);
                }}
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl text-sm shadow-lg shadow-emerald-600/30 transition-colors"
              >
                Ya, Selesaikan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
