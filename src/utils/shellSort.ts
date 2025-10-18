export interface SortStep {
  array: number[];
  comparing: number[];
  swapping: number[];
  gap: number;
  message: string;
}

export const shellSort = (array: number[], gapSequence: 'shell' | 'knuth' | 'ciura' = 'shell'): SortStep[] => {
  const steps: SortStep[] = [];
  const arr = [...array];
  const n = arr.length;
  
  // Initial state
  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    gap: 0,
    message: "Starting Shell Sort with " + gapSequence + " gap sequence"
  });

  const gaps = generateGapSequence(n, gapSequence);
  
  for (const gap of gaps) {
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      gap,
      message: `Using gap size: ${gap}`
    });

    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;

      steps.push({
        array: [...arr],
        comparing: [i],
        swapping: [],
        gap,
        message: `Comparing elements at positions ${i} and ${j - gap}`
      });

      while (j >= gap && arr[j - gap] > temp) {
        steps.push({
          array: [...arr],
          comparing: [j, j - gap],
          swapping: [],
          gap,
          message: `Element ${arr[j - gap]} > ${temp}, moving it forward`
        });

        arr[j] = arr[j - gap];
        j -= gap;

        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [j + gap],
          gap,
          message: `Moved element to position ${j + gap}`
        });
      }

      arr[j] = temp;
      
      if (j !== i) {
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [j],
          gap,
          message: `Placed ${temp} at position ${j}`
        });
      }
    }
  }

  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    gap: 0,
    message: "Sorting complete!"
  });

  return steps;
};

const generateGapSequence = (n: number, type: 'shell' | 'knuth' | 'ciura'): number[] => {
  const gaps: number[] = [];
  
  switch (type) {
    case 'shell':
      // Original Shell sequence: n/2, n/4, ..., 1
      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        gaps.push(gap);
      }
      break;
      
    case 'knuth':
      // Knuth's sequence: 1, 4, 13, 40, 121, ...
      let k = 1;
      while (k < n) {
        gaps.unshift(k);
        k = 3 * k + 1;
      }
      break;
      
    case 'ciura':
      // Ciura's sequence: empirically determined
      const ciuraSeq = [1, 4, 10, 23, 57, 132, 301, 701, 1750];
      for (let i = ciuraSeq.length - 1; i >= 0; i--) {
        if (ciuraSeq[i] < n) {
          gaps.push(ciuraSeq[i]);
        }
      }
      if (gaps.length === 0) gaps.push(1);
      break;
  }
  
  return gaps;
};

export const generateRandomArray = (size: number, max: number = 100): number[] => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max) + 1);
};
