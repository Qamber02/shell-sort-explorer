import { algorithmComparison } from '@/data/performanceData';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ComparisonTable = () => {
  return (
    <div className="gradient-card rounded-lg p-6 border border-border">
      <h2 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
        Algorithm Comparison
      </h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-muted/50">
              <TableHead className="text-foreground font-semibold">Algorithm</TableHead>
              <TableHead className="text-foreground font-semibold">Best</TableHead>
              <TableHead className="text-foreground font-semibold">Average</TableHead>
              <TableHead className="text-foreground font-semibold">Worst</TableHead>
              <TableHead className="text-foreground font-semibold">Space</TableHead>
              <TableHead className="text-foreground font-semibold">Stable</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {algorithmComparison.map((algo) => (
              <TableRow 
                key={algo.algorithm} 
                className="border-border hover:bg-muted/50 transition-smooth"
              >
                <TableCell className="font-medium text-foreground">{algo.algorithm}</TableCell>
                <TableCell className="text-muted-foreground">{algo.best}</TableCell>
                <TableCell className="text-muted-foreground">{algo.average}</TableCell>
                <TableCell className="text-muted-foreground">{algo.worst}</TableCell>
                <TableCell className="text-muted-foreground">{algo.space}</TableCell>
                <TableCell className="text-2xl">{algo.stable}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ComparisonTable;
