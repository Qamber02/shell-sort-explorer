import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { performanceData } from '@/data/performanceData';
import { TrendingUp } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg p-4 shadow-elegant">
        <p className="font-semibold text-foreground mb-2">Array Size: {label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm flex items-center gap-2">
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-semibold text-foreground">{entry.value}ms</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const PerformanceGraph = () => {
  return (
    <div className="gradient-card rounded-xl p-8 border border-border shadow-card hover:shadow-glow transition-smooth backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <TrendingUp className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
          Performance Analysis
        </h2>
      </div>
      <div className="h-96 w-full bg-card/30 rounded-xl p-6 border border-border/30">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={performanceData}
            margin={{ top: 10, right: 30, left: 10, bottom: 30 }}
          >
            <defs>
              <linearGradient id="shellGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(217 91% 60%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(217 91% 60%)" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="quickGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(270 95% 75%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(270 95% 75%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(217 33% 25%)" 
              opacity={0.3}
              vertical={false}
            />
            <XAxis 
              dataKey="size" 
              stroke="hsl(210 40% 98%)"
              tick={{ fill: 'hsl(215 20% 65%)', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(217 33% 25%)' }}
              tickLine={{ stroke: 'hsl(217 33% 25%)' }}
              label={{ 
                value: 'Array Size (elements)', 
                position: 'insideBottom', 
                offset: -20, 
                fill: 'hsl(210 40% 98%)',
                fontSize: 14,
                fontWeight: 600
              }}
            />
            <YAxis 
              stroke="hsl(210 40% 98%)"
              tick={{ fill: 'hsl(215 20% 65%)', fontSize: 12 }}
              axisLine={{ stroke: 'hsl(217 33% 25%)' }}
              tickLine={{ stroke: 'hsl(217 33% 25%)' }}
              label={{ 
                value: 'Execution Time (ms)', 
                angle: -90, 
                position: 'insideLeft',
                fill: 'hsl(210 40% 98%)',
                fontSize: 14,
                fontWeight: 600
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ 
                paddingTop: '20px',
                fontSize: '14px',
                fontWeight: 500
              }}
              iconType="circle"
            />
            <Line 
              type="monotone" 
              dataKey="shellSort" 
              stroke="hsl(217 91% 60%)" 
              strokeWidth={3}
              name="Shell Sort"
              dot={{ fill: 'hsl(217 91% 60%)', r: 5, strokeWidth: 2, stroke: 'hsl(222 47% 11%)' }}
              activeDot={{ r: 7, fill: 'hsl(217 91% 60%)', stroke: 'hsl(222 47% 11%)', strokeWidth: 2 }}
              fill="url(#shellGradient)"
            />
            <Line 
              type="monotone" 
              dataKey="quickSort" 
              stroke="hsl(270 95% 75%)" 
              strokeWidth={3}
              name="Quick Sort"
              dot={{ fill: 'hsl(270 95% 75%)', r: 5, strokeWidth: 2, stroke: 'hsl(222 47% 11%)' }}
              activeDot={{ r: 7, fill: 'hsl(270 95% 75%)', stroke: 'hsl(222 47% 11%)', strokeWidth: 2 }}
              fill="url(#quickGradient)"
            />
            <Line 
              type="monotone" 
              dataKey="insertionSort" 
              stroke="hsl(0 84% 60%)" 
              strokeWidth={2.5}
              strokeDasharray="5 5"
              name="Insertion Sort"
              dot={{ fill: 'hsl(0 84% 60%)', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="bubbleSort" 
              stroke="hsl(215 20% 65%)" 
              strokeWidth={2.5}
              strokeDasharray="5 5"
              name="Bubble Sort"
              dot={{ fill: 'hsl(215 20% 65%)', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: 'Shell Sort', color: 'hsl(217 91% 60%)', complexity: 'O(n^1.5)' },
          { name: 'Quick Sort', color: 'hsl(270 95% 75%)', complexity: 'O(n log n)' },
          { name: 'Insertion Sort', color: 'hsl(0 84% 60%)', complexity: 'O(n²)' },
          { name: 'Bubble Sort', color: 'hsl(215 20% 65%)', complexity: 'O(n²)' }
        ].map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-2 p-3 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 transition-smooth"
          >
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full shadow-glow" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium text-foreground">{item.name}</span>
            </div>
            <span className="text-xs text-muted-foreground font-mono">{item.complexity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceGraph;
