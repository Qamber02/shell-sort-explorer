import { useState, useEffect } from 'react';
import { pythonCode } from '@/data/codeSamples';
import { Code2 } from 'lucide-react';

const CodeTabs = () => {
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    const loadPrism = async () => {
      try {
        const Prism = (await import('prismjs')).default;
        await import('prismjs/themes/prism-tomorrow.css');
        await import('prismjs/components/prism-python');

        setHighlightedCode(
          Prism.highlight(pythonCode, Prism.languages.python, 'python')
        );
      } catch (error) {
        console.error('Failed to load Prism:', error);
      }
    };

    loadPrism();
  }, []);

  return (
    <div className="gradient-card rounded-xl p-8 border border-border shadow-card hover:shadow-glow transition-smooth backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Code2 className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
          Python Implementation
        </h2>
      </div>
      <div className="relative rounded-xl overflow-hidden bg-card/50 border border-border/50 shadow-elegant">
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-primary/5 to-transparent" />
        <pre className="!m-0 p-6 overflow-x-auto">
          <code 
            className="language-python text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: highlightedCode || pythonCode }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeTabs;
