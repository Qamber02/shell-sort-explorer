import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { shellSort, SortStep } from '@/utils/shellSort';
import { BarChart3 } from 'lucide-react';

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
    return <div className="text-foreground">Loading visualization...</div>;
  }

  return (
    <div className="gradient-card rounded-xl p-8 border border-border shadow-card backdrop-blur-sm space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <BarChart3 className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
          Live Visualization
        </h2>
      </div>

      <div className="flex items-end justify-center gap-2 min-h-[320px] p-6 bg-card/30 rounded-xl border border-border/30">
        <AnimatePresence mode="sync">
          {currentStepData.array.map((value, index) => {
            const isComparing = currentStepData.comparing.includes(index);
            const isSwapping = currentStepData.swapping.includes(index);
            const height = (value / maxValue) * 100;

            return (
              <motion.div
                key={`${index}-${value}`}
                className="flex-1 max-w-[60px] relative rounded-t-lg"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: `${Math.max(height, 5)}%`,
                  opacity: 1,
                  scale: (isSwapping || isComparing) ? 1.05 : 1,
                  backgroundColor: isSwapping
                    ? 'hsl(270 95% 75%)'
                    : isComparing
                    ? 'hsl(217 91% 60%)'
                    : 'hsl(215 20% 65%)',
                  boxShadow: (isSwapping || isComparing)
                    ? '0 0 30px hsl(217 91% 60% / 0.6), 0 0 15px hsl(270 95% 75% / 0.4)'
                    : 'none',
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
                style={{
                  minHeight: '20px'
                }}
              >
                <motion.span 
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-foreground bg-card/90 px-2 py-1 rounded backdrop-blur-sm border border-border/50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {value}
                </motion.span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <motion.div 
        className="bg-primary/10 border border-primary/20 rounded-xl p-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-muted-foreground">
              Step {currentStep + 1} / {steps.length}
            </span>
            {currentStepData.gap > 0 && (
              <span className="font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                Gap: {currentStepData.gap}
              </span>
            )}
          </div>
          <p className="text-foreground font-medium leading-relaxed">
            {currentStepData.message}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Visualizer;
