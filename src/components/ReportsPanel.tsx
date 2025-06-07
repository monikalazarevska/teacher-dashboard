import React from 'react';
import Button from './Button';
import { Report } from '../types';

interface ReportsPanelProps {
  reports: Report[];
}

const ReportsPanel: React.FC<ReportsPanelProps> = ({ reports }) => (
  <div className="bg-white shadow rounded p-4">
    <h3 className="font-semibold mb-4">Reports</h3>
    {reports.length === 0 ? (
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-2">No reports generated yet</p>
        <Button label="Generate Report" onClick={() => {}} />
      </div>
    ) : (
      <ul></ul>
    )}
  </div>
);

export default ReportsPanel;
