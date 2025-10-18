import { motion } from 'framer-motion';
import { complexityData } from '@/data/performanceData';
import { Clock, Database } from 'lucide-react';

const ComplexityCards = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
          Complexity Analysis
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {complexityData.map((item, index) => (
          <motion.div
            key={item.case}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="gradient-card rounded-xl p-6 border border-border shadow-card hover:shadow-glow transition-smooth backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-smooth" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                {item.case.includes('Space') ? (
                  <Database className="w-4 h-4 text-primary" />
                ) : (
                  <Clock className="w-4 h-4 text-primary" />
                )}
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
                  {item.case}
                </h3>
              </div>
              <p className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-4 font-mono">
                {item.complexity}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ComplexityCards;
