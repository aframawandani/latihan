import React from 'react';
import { QuizMode } from '../types';
import { PlayCircle, Layers, Sparkles, ArrowRight, Target, Award, BookMarked } from 'lucide-react';

interface DashboardProps {
  setMode: (mode: QuizMode) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setMode }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-violet-950 border border-indigo-500/20 shadow-2xl p-8 sm:p-12">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 -top-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Aplikasi Latihan Soal Akademik & Persistent Storage (IndexedDB)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Asah Kemampuan dengan <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Latihan Soal Interaktif</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Tersedia <strong className="text-white font-semibold">200 soal pilihan ganda</strong> (masing-masing 100 soal untuk Modul 1 & Modul 2) yang disusun komprehensif, tidak terlalu mudah, dan terhubung langsung dengan materi.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setMode('practice')}
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Mulai Latihan Soal</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => setMode('bank')}
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl border border-slate-700 transition-all hover:scale-105"
            >
              <Layers className="w-5 h-5 text-violet-400" />
              <span>Direktori Bank Soal</span>
            </button>

            <button
              onClick={() => setMode('materials')}
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl border border-slate-700 transition-all hover:scale-105"
            >
              <BookMarked className="w-5 h-5 text-emerald-400" />
              <span>Ringkasan Materi</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid inside Hero */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">
              200
            </div>
            <div>
              <div className="text-xs text-slate-400">Total Soal</div>
              <div className="text-sm font-bold text-white">100 Soal / Modul</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold">
              2
            </div>
            <div>
              <div className="text-xs text-slate-400">Modul Utama</div>
              <div className="text-sm font-bold text-white">Modul 1 & 2</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Storage</div>
              <div className="text-sm font-bold text-white">IndexedDB Aman</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Pembahasan</div>
              <div className="text-sm font-bold text-white">Mendalam & Relevan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Mode Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div 
          onClick={() => setMode('practice')}
          className="group bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-1 shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 text-indigo-400 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <PlayCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Mode Latihan Soal</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Jawab soal per modul dengan pilihan jumlah soal dan penjelasan instan di setiap jawaban. Progress tersimpan otomatis di IndexedDB.
            </p>
          </div>
          <div className="mt-6 flex items-center text-indigo-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
            <span>Mulai Latihan</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => setMode('bank')}
          className="group bg-slate-900 border border-slate-800 hover:border-violet-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-1 shadow-xl hover:shadow-violet-500/10 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-violet-600/10 text-violet-400 flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Direktori Bank Soal</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Telusuri seluruh 200 soal pilihan ganda lengkap dengan fitur pencarian dan kunci pembahasan.
            </p>
          </div>
          <div className="mt-6 flex items-center text-violet-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
            <span>Lihat Bank Soal</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => setMode('materials')}
          className="group bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-1 shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <BookMarked className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Ringkasan Materi</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pelajari kembali ringkasan materi Modul 1 dan Modul 2 secara mendalam sebelum mengerjakan soal.
            </p>
          </div>
          <div className="mt-6 flex items-center text-emerald-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
            <span>Baca Materi</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};
