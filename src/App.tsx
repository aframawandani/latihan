import React, { useState } from 'react';
import { QuizMode } from './types';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { PracticeMode } from './components/PracticeMode';
import { QuestionBank } from './components/QuestionBank';
import { StudyMaterials } from './components/StudyMaterials';

export default function App() {
  const [currentMode, setMode] = useState<QuizMode>('dashboard');
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar currentMode={currentMode} setMode={setMode} bookmarkedCount={bookmarked.length} />

      <main className="flex-1 pb-16">
        {currentMode === 'dashboard' && <Dashboard setMode={setMode} />}
        {currentMode === 'practice' && <PracticeMode setMode={setMode} />}
        {currentMode === 'bank' && <QuestionBank setMode={setMode} />}
        {currentMode === 'materials' && <StudyMaterials setMode={setMode} />}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 text-center py-6 text-xs text-slate-400">
        <p>Aplikasi Latihan Soal • 200 Soal Pilihan Ganda Berstandar Akademik • Progress Tersimpan di IndexedDB</p>
      </footer>
    </div>
  );
}
