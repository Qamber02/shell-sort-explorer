import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { generateRandomArray } from '@/utils/shellSort';
import Visualizer from '@/components/Visualizer';
import ControlPanel from '@/components/ControlPanel';
import CodeTabs from '@/components/CodeTabs';
import PerformanceGraph from '@/components/PerformanceGraph';
import ComplexityCards from '@/components/ComplexityCards';
import ComparisonTable from '@/components/ComparisonTable';
import AIInsights from '@/components/AIInsights';

const Learn = () => {
  const navigate = useNavigate();
  const [array, setArray] = useState(() => generateRandomArray(15, 100));
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [gapSequence, setGapSequence] = useState<'shell' | 'knuth' | 'ciura'>('shell');

  const handleReset = () => {
    setIsPlaying(false);
    setArray(generateRandomArray(15, 100));
  };

  const handleComplete = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="border-border hover:bg-muted transition-smooth"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent">
            Shell Sort Learning Center
          </h1>
          <div className="w-32" /> {/* Spacer for alignment */}
        </div>

        {/* Main Visualization Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Visualizer
              array={array}
              speed={speed}
              isPlaying={isPlaying}
              onComplete={handleComplete}
              gapSequence={gapSequence}
            />
          </div>
          <div>
            <ControlPanel
              isPlaying={isPlaying}
              speed={speed}
              gapSequence={gapSequence}
              onPlayPause={() => setIsPlaying(!isPlaying)}
              onReset={handleReset}
              onSpeedChange={setSpeed}
              onGapSequenceChange={setGapSequence}
            />
          </div>
        </div>

        {/* Code Implementation */}
        <CodeTabs />

        {/* Performance Analysis */}
        <PerformanceGraph />

        {/* Complexity Cards */}
        <ComplexityCards />

        {/* AI Insights */}
        <AIInsights />

        {/* Comparison Table */}
        <ComparisonTable />
      </div>
    </div>
  );
};

export default Learn;
