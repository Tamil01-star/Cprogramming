const fs = require('fs');
const path = require('path');

const sec1_1 = require('./section1.cjs');
const sec1_2 = require('./section1_part2.cjs');
const sec2_1 = require('./section2.cjs');
const sec2_2 = require('./section2_part2.cjs');
const sec3_1 = require('./section3_part1.cjs');
const sec3_2 = require('./section3_part2.cjs');
const sec4 = require('./section4.cjs');
const sec5 = require('./section5.cjs');

const allQuestions = [
  ...sec1_1,
  ...sec1_2,
  ...sec2_1,
  ...sec2_2,
  ...sec3_1,
  ...sec3_2,
  ...sec4,
  ...sec5
];

console.log('Total questions loaded:', allQuestions.length);

if (allQuestions.length !== 201) {
  console.error(`Error: Expected 201 questions, but found ${allQuestions.length}`);
  process.exit(1);
}

// Verify sequential IDs
for (let i = 0; i < allQuestions.length; i++) {
  const expectedId = i + 1;
  if (allQuestions[i].id !== expectedId) {
    console.error(`ID mismatch at index ${i}: expected ${expectedId}, got ${allQuestions[i].id}`);
    process.exit(1);
  }
}

// Calculate metadata and statistics
const sectionCounts = {};
const topicCounts = {};
const diffCounts = {};
const typeCounts = {};

allQuestions.forEach(q => {
  sectionCounts[q.sectionName] = (sectionCounts[q.sectionName] || 0) + 1;
  topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
  diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
  typeCounts[q.type] = (typeCounts[q.type] || 0) + 1;
});

console.log('Section counts:', sectionCounts);
console.log('Unique topics:', Object.keys(topicCounts).length);
console.log('Difficulty counts:', diffCounts);
console.log('Type counts:', typeCounts);

// Generate TypeScript code
const tsContent = `// Auto-generated comprehensive C Programming Interview Questions dataset
// Total Questions: 201 (All questions from C_Programming_Mock_Interview_Question_Bank.pdf)

import { Question, SectionMeta, TopicMeta } from '../types';

export const SECTIONS: SectionMeta[] = [
  {
    id: 1,
    title: "Technical Interview Questions",
    shortTitle: "Technical Interview",
    description: "Core C language fundamentals, data types, memory concepts, pointers, storage classes, and structures.",
    count: 51,
    color: "#2563eb",
    badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
    badgeText: "text-blue-700"
  },
  {
    id: 2,
    title: "Programming Logic & Pseudocode",
    shortTitle: "Logic & Pseudocode",
    description: "Algorithms, math problems, pattern printing, string manipulation, searching and sorting logic.",
    count: 40,
    color: "#0891b2",
    badgeBg: "bg-cyan-50 border-cyan-200 text-cyan-700",
    badgeText: "text-cyan-700"
  },
  {
    id: 3,
    title: "Placement Coding & Hard Dry Run",
    shortTitle: "Hard Dry Run",
    description: "In-depth code tracing, complex nested loops, pointers, dynamic memory, bitwise operations, and recursion.",
    count: 60,
    color: "#7c3aed",
    badgeBg: "bg-purple-50 border-purple-200 text-purple-700",
    badgeText: "text-purple-700"
  },
  {
    id: 4,
    title: "Output Prediction Questions",
    shortTitle: "Output Prediction",
    description: "Tricky syntax rules, operator precedence, evaluation orders, and scope rules.",
    count: 30,
    color: "#d97706",
    badgeBg: "bg-amber-50 border-amber-200 text-amber-700",
    badgeText: "text-amber-700"
  },
  {
    id: 5,
    title: "Debugging Questions",
    shortTitle: "Debugging",
    description: "Common compilation errors, segmentation faults, memory leaks, and logical pitfalls with bug fixes.",
    count: 20,
    color: "#e11d48",
    badgeBg: "bg-rose-50 border-rose-200 text-rose-700",
    badgeText: "text-rose-700"
  }
];

export const TOPIC_COUNTS = ${JSON.stringify(topicCounts, null, 2)};

export const QUESTIONS: Question[] = ${JSON.stringify(allQuestions, null, 2)};
`;

const outDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'questionsData.ts'), tsContent, 'utf-8');
console.log('Successfully written src/data/questionsData.ts!');
