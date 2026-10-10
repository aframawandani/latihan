export interface Question {
  id: number;
  moduleId: 'modul-1' | 'modul-2';
  category: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-3 index (A, B, C, D)
  explanation: string;
}

export type QuizMode = 'dashboard' | 'practice' | 'exam' | 'bank' | 'materials' | 'analytics';

export interface QuizState {
  mode: QuizMode;
  currentQuestionIndex: number;
  userAnswers: Record<number, number>; // questionId -> selectedOptionIndex
  bookmarked: number[]; // questionIds
  flagged: number[]; // questionIds for exam review
  isCompleted: boolean;
  score: number;
  timeSpent: number; // in seconds
  examTimeLeft: number; // in seconds
  isExamSubmitted: boolean;
  selectedModule: 'all' | 'modul-1' | 'modul-2';
}

export interface ModuleTopic {
  id: string;
  moduleId: 'modul-1' | 'modul-2';
  title: string;
  subtitle: string;
  summary: string;
  keyPoints: string[];
  iconName: string;
}

