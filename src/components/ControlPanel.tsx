import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Pause, RotateCcw, Gauge, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.div 
      className="gradient-card rounded-xl p-8 border border-border shadow-card backdrop-blur-sm space-y-8"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-6">
          Controls
        </h3>
        
        <div className="space-y-4">
          <div className="flex gap-3">
            <Button
              onClick={onPlayPause}
              className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 shadow-glow hover:shadow-card"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Play
                </>
              )}
            </Button>
            
            <Button
              onClick={onReset}
              variant="outline"
              className="h-12 border-border hover:bg-muted hover:border-primary/50 transition-all duration-300"
            >
              <RotateCcw className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Gauge className="w-4 h-4 text-primary" />
          </div>
          <label className="text-sm font-semibold text-foreground">
            Animation Speed
          </label>
        </div>
        <Slider
          value={[speed]}
          onValueChange={(value) => onSpeedChange(value[0])}
          min={1}
          max={10}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Slow</span>
          <span className="font-semibold text-primary">{speed}/10</span>
          <span>Fast</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Layers className="w-4 h-4 text-primary" />
          </div>
          <label className="text-sm font-semibold text-foreground">
            Gap Sequence
          </label>
        </div>
        <Select value={gapSequence} onValueChange={onGapSequenceChange}>
          <SelectTrigger className="w-full h-12 bg-card/50 border-border hover:border-primary/50 transition-all duration-300">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="shell">Shell's Original</SelectItem>
            <SelectItem value="knuth">Knuth's Sequence</SelectItem>
            <SelectItem value="ciura">Ciura's Sequence</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Different gap sequences affect performance. Ciura's typically performs best.
        </p>
      </div>
    </motion.div>
  );
};

export default ControlPanel;
