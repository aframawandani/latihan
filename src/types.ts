export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-3 index (A, B, C, D)
  explanation: string;
  tierOrModule: string;
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
}

export interface ModuleTopic {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  keyPoints: string[];
  iconName: string;
}
