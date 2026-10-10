import React from 'react';
import { QuizMode } from '../types';
import { ArrowLeft, BarChart2, Award, CheckCircle, Target, Sparkles } from 'lucide-react';
import { QUESTIONS } from '../data/questions';

interface AnalyticsProps {
  setMode: (mode: QuizMode) => void;
}

export const Analytics: React.FC<AnalyticsProps> = ({ setMode }) => {
  const categories = Array.from(new Set(QUESTIONS.map(q => q.category)));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setMode('dashboard')}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-white">Statistik & Analisis Belajar</h2>
            <p className="text-xs text-slate-400">Pantau kesiapan dan penguasaan materi UTS Anda</p>
          </div>
        </div>

        <button
          onClick={() => setMode('exam')}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
        >
          Mulai Simulasi UTS
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
            <BarChart2 className="w-5 h-5" />
          </div>
          <div className="text-2xl font-bold text-white">50 Soal</div>
          <p className="text-xs text-slate-400">Total Soal Bank Pilihan Ganda</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div className="text-2xl font-bold text-white">8 Modul</div>
          <p className="text-xs text-slate-400">Cakupan Materi Perkuliahan</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <div className="text-2xl font-bold text-white">100%</div>
          <p className="text-xs text-slate-400">Standar Kurikulum UTS Resmi</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
        <h3 className="text-lg font-bold text-white flex items-center space-x-2">
          <Target className="w-5 h-5 text-indigo-400" />
          <span>Breakdown Kategori Soal UTS</span>
        </h3>

        <div className="space-y-4">
          {categories.map((cat, idx) => {
            const count = QUESTIONS.filter(q => q.category === cat).length;
            const percentage = Math.round((count / QUESTIONS.length) * 100);
            return (
              <div key={idx} className="space-y-2 bg-slate-800/40 border border-slate-800 p-4 rounded-xl">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-white">{cat}</span>
                  <span className="text-xs text-indigo-400 font-medium">{count} Soal ({percentage}%)</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
