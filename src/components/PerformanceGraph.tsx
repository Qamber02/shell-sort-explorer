import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { performanceData } from '@/data/performanceData';

const PerformanceGraph = () => {
  return (
    <div className="gradient-card rounded-lg p-6 border border-border">
      <h2 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
        Performance Comparison
      </h2>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(217 33% 25%)" />
            <XAxis 
              dataKey="size" 
              stroke="hsl(210 40% 98%)"
              label={{ value: 'Array Size', position: 'insideBottom', offset: -5, fill: 'hsl(210 40% 98%)' }}
            />
            <YAxis 
              stroke="hsl(210 40% 98%)"
              label={{ value: 'Time (ms)', angle: -90, position: 'insideLeft', fill: 'hsl(210 40% 98%)' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(217 33% 17%)', 
                border: '1px solid hsl(217 33% 25%)',
                borderRadius: '0.5rem',
                color: 'hsl(210 40% 98%)'
              }}
            />
            <Legend 
              wrapperStyle={{ color: 'hsl(210 40% 98%)' }}
            />
            <Line 
              type="monotone" 
              dataKey="shellSort" 
              stroke="hsl(217 91% 60%)" 
              strokeWidth={2}
              name="Shell Sort"
              dot={{ fill: 'hsl(217 91% 60%)', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="quickSort" 
              stroke="hsl(270 95% 75%)" 
              strokeWidth={2}
              name="Quick Sort"
              dot={{ fill: 'hsl(270 95% 75%)', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="insertionSort" 
              stroke="hsl(0 84% 60%)" 
              strokeWidth={2}
              name="Insertion Sort"
              dot={{ fill: 'hsl(0 84% 60%)', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="bubbleSort" 
              stroke="hsl(215 20% 65%)" 
              strokeWidth={2}
              name="Bubble Sort"
              dot={{ fill: 'hsl(215 20% 65%)', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(217 91% 60%)' }} />
          <span className="text-muted-foreground">O(n^1.5)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(270 95% 75%)' }} />
          <span className="text-muted-foreground">O(n log n)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(0 84% 60%)' }} />
          <span className="text-muted-foreground">O(n²)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(215 20% 65%)' }} />
          <span className="text-muted-foreground">O(n²)</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceGraph;
