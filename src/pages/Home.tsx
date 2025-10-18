import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Code2, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="container max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm shadow-glow">
              <BarChart3 className="w-16 h-16 text-primary" />
            </div>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold gradient-primary bg-clip-text text-transparent leading-tight">
              Shell Sort Visualizer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Master the elegant sorting algorithm created by Donald Shell in 1959
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-6 justify-center items-center max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 bg-card/30 border border-border/30 rounded-xl px-6 py-3 backdrop-blur-sm">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Interactive Code</span>
            </div>
            <div className="flex items-center gap-3 bg-card/30 border border-border/30 rounded-xl px-6 py-3 backdrop-blur-sm">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Live Visualization</span>
            </div>
            <div className="flex items-center gap-3 bg-card/30 border border-border/30 rounded-xl px-6 py-3 backdrop-blur-sm">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Performance Analysis</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button
              onClick={() => navigate('/learn')}
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow hover:shadow-card transition-all duration-300 group"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
