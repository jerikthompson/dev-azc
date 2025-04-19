'use client';

import React, { useEffect, useState } from 'react';
import { apiService, RowCountResponse } from '@/services';

const RowCountDisplay: React.FC = () => {
  const [rowData, setRowData] = useState<RowCountResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRowCount = async () => {
      try {
        setLoading(true);
        const data = await apiService.getRowCount();
        
        if (!data.row_count) {
          setError(data.message || 'Failed to fetch row count');
        } else {
          setRowData(data);
        }
      } catch (err) {
        setError('An error occurred while fetching data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRowCount();
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-background rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-6 text-foreground">Row Count</h2>
        <div className="flex items-center justify-center h-24">
          <p>Loading row count data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-background rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-6 text-foreground">Row Count</h2>
        <div className="flex items-center justify-center h-24 text-red-500">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-background rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-6 text-foreground">Row Count</h2>
      <div className="flex flex-col items-center justify-center h-24">
        <p className="text-3xl font-bold">{rowData?.row_count}</p>
        <p className="text-sm text-gray-500 mt-2">Total rows from API</p>
      </div>
    </div>
  );
};

export default RowCountDisplay;
