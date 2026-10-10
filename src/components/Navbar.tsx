import React from 'react';
import { QuizMode } from '../types';
import { BookOpen, Award, CheckCircle, Clock, Home, Layers, BarChart2, ShieldCheck, PlayCircle } from 'lucide-react';

interface NavbarProps {
  currentMode: QuizMode;
  setMode: (mode: QuizMode) => void;
  bookmarkedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentMode, setMode, bookmarkedCount }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div 
            onClick={() => setMode('dashboard')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-base sm:text-lg bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Latihan UTS SI & Web
              </h1>
              <p className="text-xs text-slate-400">50 Soal Pilihan Ganda & Modul</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => setMode('dashboard')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                currentMode === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Beranda</span>
            </button>

            <button
              onClick={() => setMode('practice')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                currentMode === 'practice'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <PlayCircle className="w-4 h-4" />
              <span>Mode Latihan</span>
            </button>

            <button
              onClick={() => setMode('exam')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                currentMode === 'exam'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Simulasi UTS</span>
            </button>

            <button
              onClick={() => setMode('bank')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                currentMode === 'bank'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Bank Soal (50)</span>
            </button>

            <button
              onClick={() => setMode('materials')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                currentMode === 'materials'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Materi & Infografis</span>
            </button>

            <button
              onClick={() => setMode('analytics')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                currentMode === 'analytics'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Statistik</span>
            </button>
          </nav>

          {/* Right Action / Bookmarked Badge */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-full text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified UTS Blueprint</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="md:hidden flex items-center justify-around bg-slate-900 border-t border-slate-800 py-2.5 px-2">
        <button
          onClick={() => setMode('dashboard')}
          className={`flex flex-col items-center text-xs ${currentMode === 'dashboard' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
        >
          <Home className="w-5 h-5 mb-1" />
          <span>Home</span>
        </button>
        <button
          onClick={() => setMode('practice')}
          className={`flex flex-col items-center text-xs ${currentMode === 'practice' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
        >
          <PlayCircle className="w-5 h-5 mb-1" />
          <span>Latihan</span>
        </button>
        <button
          onClick={() => setMode('exam')}
          className={`flex flex-col items-center text-xs ${currentMode === 'exam' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
        >
          <Clock className="w-5 h-5 mb-1" />
          <span>Ujian</span>
        </button>
        <button
          onClick={() => setMode('bank')}
          className={`flex flex-col items-center text-xs ${currentMode === 'bank' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
        >
          <Layers className="w-5 h-5 mb-1" />
          <span>Soal</span>
        </button>
        <button
          onClick={() => setMode('materials')}
          className={`flex flex-col items-center text-xs ${currentMode === 'materials' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}
        >
          <BookOpen className="w-5 h-5 mb-1" />
          <span>Materi</span>
        </button>
      </div>
    </header>
  );
};
