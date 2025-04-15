'use client';

import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export interface DataPoint {
  [key: string]: string | number;
}

export interface ClientLineChartProps {
  data: DataPoint[];
  xAxisDataKey: string;
  lineDataKeys: string[];
  height?: number | string;
  width?: number | string;
  title?: string;
}

const ClientLineChart: React.FC<ClientLineChartProps> = ({
  data,
  xAxisDataKey,
  lineDataKeys,
  height = 400,
  width = '100%',
  title,
}) => {
  // Default colors for the lines
  const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#06b6d4', '#ec4899', '#84cc16', '#d946ef'];

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-lg font-medium mb-4">{title}</h3>
      )}
      <div style={{ width, height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisDataKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {lineDataKeys.map((dataKey, index) => (
              <Line
                key={dataKey}
                type="monotone"
                dataKey={dataKey}
                stroke={colors[index % colors.length]}
                activeDot={{ r: 8 }}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClientLineChart;
