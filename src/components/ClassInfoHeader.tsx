import React from 'react';
import { ClassInfo } from '../types';

interface ClassInfoHeaderProps {
  classInfo: ClassInfo;
}

const ClassInfoHeader: React.FC<ClassInfoHeaderProps> = ({ classInfo }) => (
  <div className="mb-4">
    <div className="flex items-center mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 text-gray-600 mr-2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      <div>
        <h2 className="text-2xl font-bold">{classInfo.name}</h2>
        <p className="text-sm text-gray-500">
          {classInfo.year} • {classInfo.pupils.length} pupils
        </p>
      </div>
    </div>
  </div>
);

export default ClassInfoHeader;
