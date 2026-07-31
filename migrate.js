const fs = require('fs');
const file = fs.readFileSync('data/hackathonProblems.ts', 'utf8');

// Find where the array starts
const arrayStart = file.indexOf('export const hackathonProblems: HackathonProblem[] = [');

let interfaceStr = file.substring(0, arrayStart);
interfaceStr = interfaceStr.replace('export interface HackathonProblem {', 'export type Year = 2025 | 2024 | 2023;\n\nexport interface HackathonProblem {\n  year: Year;');
interfaceStr = interfaceStr.replace('export const FILTER_OPTIONS: (Domain | "All")[] = ["All", "Web/App", "AI/ML", "Industry"];', 'export const FILTER_OPTIONS: (Domain | "All")[] = ["All", "Web/App", "AI/ML", "Industry"];\nexport const YEAR_OPTIONS: Year[] = [2025, 2024, 2023];');

let arrayStr = file.substring(arrayStart);
arrayStr = arrayStr.replace(/domain: "(Web\/App|AI\/ML|Industry)",/g, 'domain: "$1",\n    year: 2025,');

const mock2024 = `
  /* ─── 2024 ─── */
  {
    id: "web-24-1",
    domain: "Web/App",
    year: 2024,
    title: "Campus Event Ticketing (2024)",
    teaser: "A decentralized web platform for student-run event ticketing.",
    icon: "Globe",
    fullStatement: "Placeholder for 2024 Web/App problem statement.",
    background: "Placeholder background.",
    deliverables: ["Web App", "Payment Gateway"],
  },
  {
    id: "ai-24-1",
    domain: "AI/ML",
    year: 2024,
    title: "Smart Traffic Analyzer (2024)",
    teaser: "Computer vision pipeline for intersection traffic analysis.",
    icon: "BrainCircuit",
    fullStatement: "Placeholder for 2024 AI/ML problem statement.",
    background: "Placeholder background.",
    deliverables: ["CV Model", "Analytics Dashboard"],
  },
  {
    id: "ind-24-1",
    domain: "Industry",
    year: 2024,
    title: "Automated Invoice Parser (2024)",
    teaser: "OCR-based system for extracting financial data from PDFs.",
    icon: "Factory",
    fullStatement: "Placeholder for 2024 Industry problem statement.",
    background: "Placeholder background.",
    deliverables: ["OCR Pipeline", "Export to Excel"],
  },`;

const mock2023 = `
  /* ─── 2023 ─── */
  {
    id: "web-23-1",
    domain: "Web/App",
    year: 2023,
    title: "Lost & Found Portal (2023)",
    teaser: "A campus-wide app to report and claim lost items.",
    icon: "Globe",
    fullStatement: "Placeholder for 2023 Web/App problem statement.",
    background: "Placeholder background.",
    deliverables: ["Mobile App", "Matching Algorithm"],
  },
  {
    id: "ai-23-1",
    domain: "AI/ML",
    year: 2023,
    title: "Spam Call Filter (2023)",
    teaser: "Audio-based classification for telemarketing detection.",
    icon: "BrainCircuit",
    fullStatement: "Placeholder for 2023 AI/ML problem statement.",
    background: "Placeholder background.",
    deliverables: ["Audio Model", "Android Service"],
  },
  {
    id: "ind-23-1",
    domain: "Industry",
    year: 2023,
    title: "Warehouse Inventory Tracker (2023)",
    teaser: "Barcode scanning system with real-time stock updates.",
    icon: "Factory",
    fullStatement: "Placeholder for 2023 Industry problem statement.",
    background: "Placeholder background.",
    deliverables: ["Scanner integration", "Real-time database"],
  }
`;

arrayStr = arrayStr.replace('];', mock2024 + mock2023 + '\n];');

fs.writeFileSync('data/hackathonProblems.ts', interfaceStr + arrayStr);
console.log('Done!');
