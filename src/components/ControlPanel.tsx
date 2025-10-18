import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface ControlPanelProps {
  isPlaying: boolean;
  speed: number;
  gapSequence: 'shell' | 'knuth' | 'ciura';
  onPlayPause: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  onGapSequenceChange: (sequence: 'shell' | 'knuth' | 'ciura') => void;
}

const ControlPanel = ({
  isPlaying,
  speed,
  gapSequence,
  onPlayPause,
  onReset,
  onSpeedChange,
  onGapSequenceChange,
}: ControlPanelProps) => {
  return (
    <div className="gradient-card rounded-lg p-6 border border-border space-y-6">
      <div className="flex gap-3">
        <Button
          onClick={onPlayPause}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
        >
          {isPlaying ? (
            <>
              <Pause className="mr-2 h-4 w-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-4 w-4" />
              Play
            </>
          )}
        </Button>
        <Button
          onClick={onReset}
          variant="outline"
          className="flex-1 border-border hover:bg-muted transition-smooth"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">Speed</label>
          <span className="text-sm text-muted-foreground">{speed}x</span>
        </div>
        <Slider
          value={[speed]}
          onValueChange={(values) => onSpeedChange(values[0])}
          min={1}
          max={10}
          step={1}
          className="w-full"
        />
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Gap Sequence</label>
        <Select value={gapSequence} onValueChange={onGapSequenceChange}>
          <SelectTrigger className="w-full bg-input border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="shell">Shell (Original)</SelectItem>
            <SelectItem value="knuth">Knuth</SelectItem>
            <SelectItem value="ciura">Ciura (Optimal)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ControlPanel;
