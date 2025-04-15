import React from 'react';
import dynamic from 'next/dynamic';
import { DataPoint } from './ClientLineChart';

// Import the client-side only component with SSR disabled
const ClientLineChart = dynamic(() => import('./ClientLineChart'), { 
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
      <p className="text-gray-500">Loading chart...</p>
    </div>
  )
});

export interface LineChartWrapperProps {
  data: DataPoint[];
  xAxisDataKey: string;
  lineDataKeys: string[];
  height?: number | string;
  width?: number | string;
  title?: string;
}

const LineChartWrapper: React.FC<LineChartWrapperProps> = (props) => {
  return <ClientLineChart {...props} />;
};

export default LineChartWrapper;
