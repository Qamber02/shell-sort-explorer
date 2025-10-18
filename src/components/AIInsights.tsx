import { motion } from 'framer-motion';
import { insights } from '@/data/performanceData';
import { Sparkles, Lightbulb } from 'lucide-react';

const AIInsights = () => {
  return (
    <div className="gradient-card rounded-xl p-8 border border-border shadow-card hover:shadow-glow transition-smooth backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
          Key Insights
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-card/30 border border-border/30 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300" />
            <div className="relative z-10 flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Lightbulb className="w-4 h-4 text-primary" />
                </div>
              </div>
              <p className="text-foreground leading-relaxed">
                {insight}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;
