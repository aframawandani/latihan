import React from 'react';
import { QuizMode } from '../types';
import { PlayCircle, Clock, Layers, BookOpen, BarChart2, CheckCircle, Sparkles, ArrowRight, Zap, Target, Award } from 'lucide-react';
import { MODULE_TOPICS } from '../data/modules';
import { QUESTIONS } from '../data/questions';

interface DashboardProps {
  setMode: (mode: QuizMode) => void;
  savedStats?: { totalCompleted: number; bestScore: number };
}

export const Dashboard: React.FC<DashboardProps> = ({ setMode, savedStats }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-violet-950 border border-indigo-500/20 shadow-2xl p-8 sm:p-12">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-10 -top-10 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Persiapan Ujian UTS Khusus Modul 1</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Latihan Soal <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Modul 1: Sistem Informasi & Web Programming</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Asah pemahamanmu untuk materi <strong className="text-white font-semibold">Modul 1</strong> dengan <strong className="text-white font-semibold">50 soal pilihan ganda</strong> lengkap dengan pembahasan mendalam berdasarkan modul perkuliahan dan infografis <em>Web Programming 101: The Client-Server Foundation</em>.
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
              onClick={() => setMode('exam')}
              className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl border border-slate-700 transition-all hover:scale-105"
            >
              <Clock className="w-5 h-5 text-amber-400" />
              <span>Simulasi Ujian Berwaktu</span>
            </button>

            <button
              onClick={() => setMode('materials')}
              className="flex items-center space-x-2 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium px-5 py-3 rounded-xl border border-slate-800 transition-all"
            >
              <BookOpen className="w-5 h-5 text-violet-400" />
              <span>Baca Ringkasan Materi</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid inside Hero */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800/80">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">
              50
            </div>
            <div>
              <div className="text-xs text-slate-400">Total Soal</div>
              <div className="text-sm font-bold text-white">Pilihan Ganda</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold">
              8
            </div>
            <div>
              <div className="text-xs text-slate-400">Modul Utama</div>
              <div className="text-sm font-bold text-white">Komprehensif</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Mode Belajar</div>
              <div className="text-sm font-bold text-white">Instan & Ujian</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Pembahasan</div>
              <div className="text-sm font-bold text-white">Lengkap & Detail</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Mode Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              Jawab soal satu per satu dengan penjelasan instan di setiap jawaban benar atau salah.
            </p>
          </div>
          <div className="mt-6 flex items-center text-indigo-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
            <span>Mulai Latihan</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>

        <div 
          onClick={() => setMode('exam')}
          className="group bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-1 shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-amber-600/10 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Simulasi Ujian UTS</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Simulasi ujian dengan batas waktu 60 menit, navigasi soal, dan rekap nilai akhir.
            </p>
          </div>
          <div className="mt-6 flex items-center text-amber-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
            <span>Mulai Ujian</span>
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
              Telusuri seluruh 50 soal pilihan ganda lengkap dengan kategori dan kunci jawaban.
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
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Materi & Infografis</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ringkasan materi kuliah Sistem Informasi, Client-Server, N-Tier, dan Infografis Web Programming 101.
            </p>
          </div>
          <div className="mt-6 flex items-center text-emerald-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
            <span>Baca Materi</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>

      {/* Module Highlights Grid */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Cakupan Modul UTS</h2>
            <p className="text-slate-400 text-sm">Topik utama yang diujikan dalam 50 soal pilihan ganda</p>
          </div>
          <button
            onClick={() => setMode('materials')}
            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center space-x-1"
          >
            <span>Lihat Semua Materi</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODULE_TOPICS.map((topic, index) => (
            <div key={topic.id} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  Modul {index + 1}
                </span>
                <span className="text-xs text-slate-500">
                  {QUESTIONS.filter(q => q.tierOrModule.toLowerCase().includes(topic.title.toLowerCase().slice(0, 5))).length || 6} Soal
                </span>
              </div>
              <h4 className="font-bold text-white text-base mb-1">{topic.title}</h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{topic.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
