import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pythonCode, cppCode, javascriptCode } from '@/data/codeSamples';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-javascript';

const CodeTabs = () => {
  const [activeTab, setActiveTab] = useState('python');

  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);

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
          <div className="relative rounded-lg overflow-hidden">
            <pre className="!m-0 !bg-card">
              <code className="language-python">{pythonCode}</code>
            </pre>
          </div>
        </TabsContent>
        <TabsContent value="cpp" className="mt-4">
          <div className="relative rounded-lg overflow-hidden">
            <pre className="!m-0 !bg-card">
              <code className="language-cpp">{cppCode}</code>
            </pre>
          </div>
        </TabsContent>
        <TabsContent value="javascript" className="mt-4">
          <div className="relative rounded-lg overflow-hidden">
            <pre className="!m-0 !bg-card">
              <code className="language-javascript">{javascriptCode}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CodeTabs;
