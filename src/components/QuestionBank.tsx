import React, { useState } from 'react';
import { QuizMode } from '../types';
import { QUESTIONS } from '../data/questions';
import { Search, ArrowLeft, CheckCircle2, ChevronDown, ChevronUp, Layers } from 'lucide-react';

interface QuestionBankProps {
  setMode: (mode: QuizMode) => void;
}

export const QuestionBank: React.FC<QuestionBankProps> = ({ setMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(QUESTIONS.map(q => q.category)))];

  const filteredQuestions = QUESTIONS.filter(q => {
    const matchesSearch = q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          q.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || q.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      {/* Top Header & Filters */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMode('dashboard')}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl font-bold text-white">Direktori Bank Soal (300 Soal)</h2>
              <p className="text-xs text-slate-400">Telusuri seluruh soal Modul 1, Modul 2 & Modul 3 beserta pembahasan lengkap</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-xl text-indigo-300 text-xs font-semibold">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>{filteredQuestions.length} Soal Ditemukan</span>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari kata kunci soal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-xl px-4 py-3 outline-none focus:border-indigo-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 bg-slate-900 border border-slate-800 rounded-2xl">
            <p className="text-slate-400 text-sm">Tidak ada soal yang sesuai dengan pencarian Anda.</p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id;
            return (
              <div 
                key={q.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-all shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-bold">
                      {q.id}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {q.category}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="flex items-center space-x-1 text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    <span>{isExpanded ? 'Sembunyikan Detail' : 'Lihat Kunci & Pembahasan'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  {q.question}
                </h3>

                {/* Options Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {q.options.map((opt, oIdx) => {
                    const isCorrect = oIdx === q.correctAnswer;
                    return (
                      <div 
                        key={oIdx}
                        className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start space-x-2.5 ${
                          isCorrect
                            ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                            : 'bg-slate-800/40 border-slate-800 text-slate-400'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                          isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="flex-1 pt-0.5">{opt}</span>
                        {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />}
                      </div>
                    );
                  })}
                </div>

                {/* Expanded Explanation */}
                {isExpanded && (
                  <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2 animate-fadeIn mt-3">
                    <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Jawaban Benar: {String.fromCharCode(65 + q.correctAnswer)} ({q.options[q.correctAnswer]})</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white">Pembahasan: </strong> {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
