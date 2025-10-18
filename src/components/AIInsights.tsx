import { motion } from 'framer-motion';
import { insights } from '@/data/performanceData';
import { Sparkles } from 'lucide-react';

const AIInsights = () => {
  return (
    <div className="gradient-card rounded-lg p-6 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-6 w-6 text-accent" />
        <h2 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
          AI Insights
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card/50 rounded-lg p-4 border border-border hover:border-primary transition-smooth"
          >
            <p className="text-sm text-foreground leading-relaxed">{insight}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;
