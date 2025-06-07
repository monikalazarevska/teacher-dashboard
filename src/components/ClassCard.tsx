import React from 'react';
import Button from './Button';
import { ClassInfo } from '../types';

interface ClassCardProps {
  data: ClassInfo;
}

const ClassCard: React.FC<ClassCardProps> = ({ data }) => (
  <div className="bg-white shadow rounded p-4 flex flex-col">
    <h3 className="font-semibold text-lg mb-2">{data.name}</h3>
    <p className="text-sm text-gray-500">{data.year}</p>
    <p className="text-sm text-gray-500 mb-4">{data.pupils.length} pupils</p>
    <Button label="View Class" onClick={() => {}} />
  </div>
);

export default ClassCard;
