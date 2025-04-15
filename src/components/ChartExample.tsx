import React from 'react';
import LineChartWrapper from './wrappers/LineChartWrapper';

// Sample data for the chart
const sampleData = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
  { name: 'Jul', sales: 3490, revenue: 4300 },
];

const ChartExample: React.FC = () => {
  return (
    <div className="p-6 bg-background rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-6 text-foreground">Follows</h2>
      
      <LineChartWrapper
        data={sampleData}
        xAxisDataKey="name"
        lineDataKeys={['sales', 'revenue']}
        height={300}
        width={400}
        title=""
      />
      
      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>This chart shows an example.</p>
      </div>
    </div>
  );
};

export default ChartExample;
