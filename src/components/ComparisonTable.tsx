import { motion } from 'framer-motion';
import { algorithmComparison } from '@/data/performanceData';
import { Table2 } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <div className="gradient-card rounded-xl p-8 border border-border shadow-card hover:shadow-glow transition-smooth backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Table2 className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
          Algorithm Comparison
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left p-4 text-sm font-semibold text-foreground bg-card/30">Algorithm</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground bg-card/30">Best Case</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground bg-card/30">Average Case</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground bg-card/30">Worst Case</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground bg-card/30">Space</th>
              <th className="text-left p-4 text-sm font-semibold text-foreground bg-card/30">Stable</th>
            </tr>
          </thead>
          <tbody>
            {algorithmComparison.map((algo, index) => (
              <motion.tr
                key={algo.algorithm}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="border-b border-border/30 hover:bg-primary/5 transition-all duration-300"
              >
                <td className="p-4 font-semibold text-foreground">{algo.algorithm}</td>
                <td className="p-4 text-muted-foreground font-mono text-sm">{algo.best}</td>
                <td className="p-4 text-muted-foreground font-mono text-sm">{algo.average}</td>
                <td className="p-4 text-muted-foreground font-mono text-sm">{algo.worst}</td>
                <td className="p-4 text-muted-foreground font-mono text-sm">{algo.space}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                    algo.stable === '✓' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-destructive/20 text-destructive border border-destructive/30'
                  }`}>
                    {algo.stable}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
