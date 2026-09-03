export type Difficulty = 'Basic' | 'Medium' | 'Hard';

export type QuestionType = 'Theory' | 'Pseudocode' | 'Dry Run' | 'Output Prediction' | 'Debugging';

export interface ComparisonTable {
  headers: string[];
  rows: string[][];
}

export interface DryRunTable {
  headers: string[];
  rows: (string | number)[][];
}

export interface QuestionAnswer {
  directAnswer: string;
  explanation?: string[];
  comparisonTable?: ComparisonTable;
  codeExample?: string;
  expectedOutput?: string;
  dryRunTable?: DryRunTable;
  algorithmSteps?: string[];
  identifiedBug?: string;
  whyItHappens?: string;
  interviewTip?: string;
}

export interface Question {
  id: number; // 1 to 201
  pdfId: string; // e.g. "Q1", "Q51", "Q91", etc.
  sectionId: number; // 1 to 5
  sectionName: string;
  topic: string;
  subtopic: string;
  difficulty: Difficulty;
  type: QuestionType;
  question: string;
  givenCode?: string;
  answer: QuestionAnswer;
}

export interface SectionMeta {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  count: number;
  color: string;
  badgeBg: string;
  badgeText: string;
}

export interface TopicMeta {
  name: string;
  count: number;
  sectionId: number;
}
