import React from 'react';
import Avatar from './Avatar';
import Button from './Button';
import { Pupil } from '../types';

interface PupilCardProps {
  pupil: Pupil;
}

const PupilCard: React.FC<PupilCardProps> = ({ pupil }) => {
  const attendanceColor =
    pupil.attendance >= 95
      ? 'bg-green-500'
      : pupil.attendance >= 90
      ? 'bg-yellow-500'
      : 'bg-red-500';

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col items-center">
      <Avatar name={`${pupil.firstName} ${pupil.lastName}`} />
      <h3 className="mt-2 font-semibold">
        {pupil.firstName} {pupil.lastName}
      </h3>
      <p className="text-sm text-gray-500">Form {pupil.form}</p>
      <div className="flex items-center mt-2">
        <span className={`w-3 h-3 rounded-full mr-2 ${attendanceColor}`}></span>
        <span className="text-sm">{pupil.attendance}%</span>
      </div>
      <div className="mt-2">
        <Button label="View Profile" onClick={() => {}} />
      </div>
    </div>
  );
};

export default PupilCard;
