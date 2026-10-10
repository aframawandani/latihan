import React, { useState } from 'react';
import { QuizMode } from '../types';
import { MODULE_TOPICS } from '../data/modules';
import { ArrowLeft, BookOpen, Cpu, Users, Server, Layers, Database, Cloud, Workflow, Sparkles } from 'lucide-react';

interface StudyMaterialsProps {
  setMode: (mode: QuizMode) => void;
}

export const StudyMaterials: React.FC<StudyMaterialsProps> = ({ setMode }) => {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const currentTopic = MODULE_TOPICS[activeTopicIndex] || MODULE_TOPICS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'Users': return <Users className="w-6 h-6 text-violet-400" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-400" />;
      case 'Server': return <Server className="w-6 h-6 text-amber-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-cyan-400" />;
      case 'Database': return <Database className="w-6 h-6 text-rose-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-blue-400" />;
      default: return <Workflow className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setMode('dashboard')}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl font-bold text-white">Ringkasan Materi & Infografis</h2>
            <p className="text-xs text-slate-400">Referensi lengkap Sistem Informasi, Web Programming, & Hierarki Data</p>
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Module Sidebar */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-3">Daftar Topik Pembelajaran</h3>
          {MODULE_TOPICS.map((topic, index) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopicIndex(index)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-center space-x-3 ${
                activeTopicIndex === index
                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-600/10'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800/80'
              }`}
            >
              <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                {getIcon(topic.iconName)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm truncate text-white">{topic.title.replace(/Modul \d+: /g, '')}</h4>
              </div>
            </button>
          ))}
        </div>

        {/* Module Detail View (2 Cols) */}
        <div className="lg:col-span-2 space-y-6">
          {currentTopic && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/30">
                  {getIcon(currentTopic.iconName)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{currentTopic.title.replace(/Modul \d+: /g, '')}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{currentTopic.subtitle}</p>
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/80 p-5 rounded-xl space-y-2">
                <h4 className="font-bold text-sm text-white flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>Ringkasan Konsep Utama</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentTopic.summary}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-sm text-white">Poin Penting (Key Takeaways):</h4>
                <div className="space-y-2">
                  {currentTopic.keyPoints.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-3 bg-slate-800/40 border border-slate-800 p-4 rounded-xl">
                      <span className="w-6 h-6 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {pIdx + 1}
                      </span>
                      <span className="text-sm text-slate-200 leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
