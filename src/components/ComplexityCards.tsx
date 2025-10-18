import { motion } from 'framer-motion';
import { complexityData } from '@/data/performanceData';

const ComplexityCards = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
        Time & Space Complexity
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {complexityData.map((item, index) => (
          <motion.div
            key={item.case}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="gradient-card rounded-lg p-6 border border-border hover:shadow-glow transition-smooth"
          >
            <h3 className="text-lg font-semibold text-primary mb-2">{item.case}</h3>
            <p className="text-3xl font-bold text-foreground mb-3">{item.complexity}</p>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ComplexityCards;
