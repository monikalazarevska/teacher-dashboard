import React from 'react';

interface AcademicProgressBarProps {
  value: number;
}

const AcademicProgressBar: React.FC<AcademicProgressBarProps> = ({ value }) => (
  <div className="w-full bg-gray-200 rounded h-2">
    <div
      className="bg-blue-600 h-2 rounded"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

export default AcademicProgressBar;
