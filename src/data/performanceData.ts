export const performanceData = [
  { size: 10, shellSort: 0.02, quickSort: 0.015, insertionSort: 0.03, bubbleSort: 0.05 },
  { size: 50, shellSort: 0.15, quickSort: 0.12, insertionSort: 0.5, bubbleSort: 1.2 },
  { size: 100, shellSort: 0.35, quickSort: 0.28, insertionSort: 2.1, bubbleSort: 4.8 },
  { size: 500, shellSort: 2.5, quickSort: 1.8, insertionSort: 52, bubbleSort: 125 },
  { size: 1000, shellSort: 5.5, quickSort: 4.2, insertionSort: 210, bubbleSort: 500 },
  { size: 5000, shellSort: 35, quickSort: 28, insertionSort: 5200, bubbleSort: 12500 },
  { size: 10000, shellSort: 78, quickSort: 62, insertionSort: 21000, bubbleSort: 50000 },
];

export const insights = [
  "Shell Sort performs best on medium-sized datasets (100-10,000 elements).",
  "Ciura's gap sequence provides approximately 30% performance boost over Shell's original sequence.",
  "Shell Sort is particularly efficient for partially sorted data.",
  "Unlike Quick Sort, Shell Sort doesn't have worst-case O(n²) behavior with specific gap sequences.",
  "Shell Sort requires no extra memory (O(1) space complexity).",
  "The algorithm's performance heavily depends on the chosen gap sequence.",
];

export const complexityData = [
  {
    case: "Best Case",
    complexity: "O(n log n)",
    description: "When the array is already sorted or nearly sorted",
  },
  {
    case: "Average Case",
    complexity: "O(n^1.5)",
    description: "Typical performance with good gap sequences like Ciura's",
  },
  {
    case: "Worst Case",
    complexity: "O(n²)",
    description: "Depends on gap sequence; Knuth sequence guarantees O(n^1.5)",
  },
  {
    case: "Space Complexity",
    complexity: "O(1)",
    description: "In-place sorting algorithm with minimal overhead",
  },
];

export const algorithmComparison = [
  {
    algorithm: "Shell Sort",
    best: "O(n log n)",
    average: "O(n^1.5)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "❌",
  },
  {
    algorithm: "Insertion Sort",
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "✅",
  },
  {
    algorithm: "Quick Sort",
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n²)",
    space: "O(log n)",
    stable: "❌",
  },
  {
    algorithm: "Bubble Sort",
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "✅",
  },
];
