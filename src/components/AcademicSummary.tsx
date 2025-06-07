import React from 'react';
import AcademicProgressBar from './AcademicProgressBar';
import { AcademicRecord } from '../types';

interface AcademicSummaryProps {
  records: AcademicRecord[];
}

const extractPercent = (text: string): number => {
  const match = text.match(/(\d+)%/);
  return match ? parseInt(match[1], 10) : 0;
};

const AcademicSummary: React.FC<AcademicSummaryProps> = ({ records }) => (
  <div className="bg-white shadow rounded p-4">
    <h3 className="font-semibold mb-4">Academic Summary</h3>
    {records.map((rec) => {
      const progress = extractPercent(rec.lastAssessment);
      return (
        <div key={rec.subject} className="mb-4 last:mb-0">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{rec.subject}</span>
            <span>Target {rec.target}</span>
          </div>
          <AcademicProgressBar value={progress} />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Current {rec.current}</span>
            <span>Effort {rec.effort}</span>
          </div>
          <div className="text-xs text-gray-400">Last: {rec.lastAssessment}</div>
        </div>
      );
    })}
  </div>
);

export default AcademicSummary;
