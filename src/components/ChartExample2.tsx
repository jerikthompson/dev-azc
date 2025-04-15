import React from 'react';
import LineChartWrapper from './wrappers/LineChartWrapper';

// Sample data for the chart
const sampleData = [
  { name: 'Jan', sales: 9000, revenue: 1400 },
  { name: 'Feb', sales: 6000, revenue: 9398 },
  { name: 'Mar', sales: 1000, revenue: 7800 },
  { name: 'Apr', sales: 5780, revenue: 1908 },
  { name: 'May', sales: 5890, revenue: 6800 },
  { name: 'Jun', sales: 1390, revenue: 7800 },
  { name: 'Jul', sales: 9490, revenue: 3300 },
];

const ChartExample2: React.FC = () => {
  return (
    <div className="p-6 bg-background rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-6 text-foreground">Likes</h2>
      
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

export default ChartExample2;
