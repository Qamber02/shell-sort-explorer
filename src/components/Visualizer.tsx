import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { shellSort, SortStep } from '@/utils/shellSort';

interface VisualizerProps {
  array: number[];
  speed: number;
  isPlaying: boolean;
  onComplete: () => void;
  gapSequence: 'shell' | 'knuth' | 'ciura';
}

const Visualizer = ({ array, speed, isPlaying, onComplete, gapSequence }: VisualizerProps) => {
  const [steps, setSteps] = useState<SortStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [maxValue] = useState(Math.max(...array));

  useEffect(() => {
    const sortSteps = shellSort(array, gapSequence);
    setSteps(sortSteps);
    setCurrentStep(0);
  }, [array, gapSequence]);

  useEffect(() => {
    if (!isPlaying || currentStep >= steps.length - 1) {
      if (currentStep >= steps.length - 1) {
        onComplete();
      }
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentStep(prev => prev + 1);
    }, 1000 / speed);

    return () => clearTimeout(timeout);
  }, [isPlaying, currentStep, speed, steps.length, onComplete]);

  const currentStepData = steps[currentStep] || steps[0];

  if (!currentStepData) {
    return <div className="text-muted-foreground">Loading visualization...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-center gap-1 h-64 p-4 bg-card/50 rounded-lg border border-border">
        {currentStepData.array.map((value, index) => {
          const isComparing = currentStepData.comparing.includes(index);
          const isSwapping = currentStepData.swapping.includes(index);
          const height = (value / maxValue) * 100;

          return (
            <motion.div
              key={index}
              className="flex-1 relative rounded-t-sm transition-smooth"
              initial={{ height: 0 }}
              animate={{
                height: `${height}%`,
                backgroundColor: isSwapping
                  ? 'hsl(270 95% 75%)'
                  : isComparing
                  ? 'hsl(217 91% 60%)'
                  : 'hsl(217 33% 25%)',
                boxShadow: (isSwapping || isComparing)
                  ? '0 0 20px hsl(217 91% 60% / 0.5)'
                  : 'none',
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                {value}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="gradient-card rounded-lg p-6 border border-border">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">Step {currentStep + 1} of {steps.length}</span>
            {currentStepData.gap > 0 && (
              <span className="text-sm font-medium text-primary">Gap: {currentStepData.gap}</span>
            )}
          </div>
          <p className="text-foreground">{currentStepData.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
