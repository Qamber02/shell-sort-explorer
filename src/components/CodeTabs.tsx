import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pythonCode, cppCode, javascriptCode } from '@/data/codeSamples';

const CodeTabs = () => {
  const [activeTab, setActiveTab] = useState('python');
  const [highlightedCode, setHighlightedCode] = useState({
    python: '',
    cpp: '',
    javascript: ''
  });

  useEffect(() => {
    // Dynamically import Prism and languages
    const loadPrism = async () => {
      try {
        const Prism = (await import('prismjs')).default;
        await import('prismjs/themes/prism-tomorrow.css');
        await import('prismjs/components/prism-python');
        await import('prismjs/components/prism-clike');
        await import('prismjs/components/prism-cpp');
        await import('prismjs/components/prism-javascript');

        setHighlightedCode({
          python: Prism.highlight(pythonCode, Prism.languages.python, 'python'),
          cpp: Prism.highlight(cppCode, Prism.languages.cpp, 'cpp'),
          javascript: Prism.highlight(javascriptCode, Prism.languages.javascript, 'javascript')
        });
      } catch (error) {
        console.error('Failed to load Prism:', error);
      }
    };

    loadPrism();
  }, []);

  return (
    <div className="gradient-card rounded-lg p-6 border border-border">
      <h2 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
        Code Implementation
      </h2>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted">
          <TabsTrigger value="python" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Python
          </TabsTrigger>
          <TabsTrigger value="cpp" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            C++
          </TabsTrigger>
          <TabsTrigger value="javascript" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            JavaScript
          </TabsTrigger>
        </TabsList>
        <TabsContent value="python" className="mt-4">
          <div className="relative rounded-lg overflow-hidden bg-card">
            <pre className="!m-0 p-4 overflow-x-auto">
              <code 
                className="language-python text-sm"
                dangerouslySetInnerHTML={{ __html: highlightedCode.python || pythonCode }}
              />
            </pre>
          </div>
        </TabsContent>
        <TabsContent value="cpp" className="mt-4">
          <div className="relative rounded-lg overflow-hidden bg-card">
            <pre className="!m-0 p-4 overflow-x-auto">
              <code 
                className="language-cpp text-sm"
                dangerouslySetInnerHTML={{ __html: highlightedCode.cpp || cppCode }}
              />
            </pre>
          </div>
        </TabsContent>
        <TabsContent value="javascript" className="mt-4">
          <div className="relative rounded-lg overflow-hidden bg-card">
            <pre className="!m-0 p-4 overflow-x-auto">
              <code 
                className="language-javascript text-sm"
                dangerouslySetInnerHTML={{ __html: highlightedCode.javascript || javascriptCode }}
              />
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CodeTabs;
