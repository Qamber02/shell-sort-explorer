import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, TrendingUp } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
        
        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-medium text-primary">Donald Shell, 1959</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
              Shell Sort Visualizer
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Master the Shell Sort algorithm through interactive visualizations, 
              real-time code examples, and performance insights.
            </p>
            
            <Button
              onClick={() => navigate('/learn')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow px-8 py-6 text-lg transition-smooth group"
            >
              Start Visualization
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            <div className="gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-smooth">
              <BookOpen className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Interactive Learning</h3>
              <p className="text-sm text-muted-foreground">
                Watch the algorithm in action with step-by-step visual explanations
              </p>
            </div>

            <div className="gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-smooth">
              <Code className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Multi-Language Code</h3>
              <p className="text-sm text-muted-foreground">
                View implementations in Python, C++, and JavaScript
              </p>
            </div>

            <div className="gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-smooth">
              <TrendingUp className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Performance Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Compare Shell Sort with other algorithms using real data
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Algorithm Info Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              Why Shell Sort?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Shell Sort is an efficient in-place comparison sort that generalizes insertion sort 
              to allow the exchange of items that are far apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="gradient-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-semibold mb-3 text-primary">Key Advantages</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>In-place sorting with O(1) space complexity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Better performance than insertion sort on larger datasets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Adaptive to partially sorted data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Simple to implement and understand</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="gradient-card p-6 rounded-lg border border-border"
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">Use Cases</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">→</span>
                  <span>Medium-sized datasets (100-10,000 elements)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">→</span>
                  <span>When memory is limited</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">→</span>
                  <span>Partially sorted or nearly sorted data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">→</span>
                  <span>Educational purposes and algorithm learning</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
