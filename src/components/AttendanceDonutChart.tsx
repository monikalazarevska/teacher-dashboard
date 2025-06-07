import React from 'react';
import { AttendanceBreakdown } from '../types';

interface AttendanceDonutChartProps {
  breakdown: AttendanceBreakdown;
}

const AttendanceDonutChart: React.FC<AttendanceDonutChartProps> = ({ breakdown }) => {
  const total =
    breakdown.present +
    breakdown.authorizedAbsence +
    breakdown.unauthorizedAbsence +
    breakdown.late;
  const presentPct = Math.round((breakdown.present / total) * 100);
  const authPct = Math.round((breakdown.authorizedAbsence / total) * 100);
  const unauthPct = Math.round((breakdown.unauthorizedAbsence / total) * 100);

  const gradient = `conic-gradient(#16a34a 0 ${presentPct}%, #fbbf24 ${presentPct}% ${
    presentPct + authPct
  }%, #ef4444 ${presentPct + authPct}% ${presentPct + authPct + unauthPct}%, #6b7280 ${
    presentPct + authPct + unauthPct
  }% 100%)`;

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col items-center">
      <h3 className="font-semibold mb-4">Attendance</h3>
      <div className="relative w-32 h-32">
        <div
          className="w-32 h-32 rounded-full"
          style={{ background: gradient }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-semibold text-sm">{presentPct}% Present</span>
        </div>
      </div>
      <div className="mt-4 w-full">
        <ul className="text-sm space-y-1">
          <li className="flex items-center">
            <span className="w-3 h-3 bg-green-500 mr-2 rounded-sm"></span>Present
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 mr-2 rounded-sm"></span>
            Authorized Absence
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-red-500 mr-2 rounded-sm"></span>
            Unauthorized Absence
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-gray-500 mr-2 rounded-sm"></span>Late
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AttendanceDonutChart;
