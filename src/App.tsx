import React, { useState } from 'react';
import { QuizMode } from './types';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { PracticeMode } from './components/PracticeMode';
import { ExamMode } from './components/ExamMode';
import { QuestionBank } from './components/QuestionBank';
import { StudyMaterials } from './components/StudyMaterials';
import { Analytics } from './components/Analytics';

export default function App() {
  const [currentMode, setMode] = useState<QuizMode>('dashboard');
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar currentMode={currentMode} setMode={setMode} bookmarkedCount={bookmarked.length} />

      <main className="flex-1 pb-16">
        {currentMode === 'dashboard' && <Dashboard setMode={setMode} />}
        {currentMode === 'practice' && <PracticeMode setMode={setMode} />}
        {currentMode === 'exam' && <ExamMode setMode={setMode} />}
        {currentMode === 'bank' && <QuestionBank setMode={setMode} />}
        {currentMode === 'materials' && <StudyMaterials setMode={setMode} />}
        {currentMode === 'analytics' && <Analytics setMode={setMode} />}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 text-center py-6 text-xs text-slate-400">
        <p>Aplikasi Latihan UTS Sistem Informasi & Web Programming • 50 Soal Pilihan Ganda Berstandar Akademik</p>
      </footer>
    </div>
  );
}
