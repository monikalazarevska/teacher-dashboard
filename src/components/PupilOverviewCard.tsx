import React from 'react';
import Avatar from './Avatar';
import Button from './Button';
import { PupilDetail } from '../types';

interface PupilOverviewCardProps {
  pupil: PupilDetail;
}

const PupilOverviewCard: React.FC<PupilOverviewCardProps> = ({ pupil }) => {
  const attendanceColor =
    pupil.attendance >= 95
      ? 'bg-green-500'
      : pupil.attendance >= 90
      ? 'bg-yellow-500'
      : 'bg-red-500';
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col items-center">
      <Avatar name={`${pupil.firstName} ${pupil.lastName}`} />
      <h2 className="mt-2 text-lg font-semibold">
        {pupil.firstName} {pupil.lastName}
      </h2>
      <p className="text-sm text-gray-500">
        {pupil.group} • Form {pupil.form}
      </p>
      <div className="flex items-center mt-2">
        <span className={`w-3 h-3 rounded-full mr-2 ${attendanceColor}`}></span>
        <span className="text-sm">{pupil.attendance}% attendance</span>
      </div>
      <p className="text-sm mt-1">Behavior Points: {pupil.behaviorPoints}</p>
      <div className="mt-4">
        <Button label="Generate Report" onClick={() => {}} />
      </div>
    </div>
  );
};

export default PupilOverviewCard;
