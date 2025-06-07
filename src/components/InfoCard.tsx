import React from 'react';

interface InfoCardProps {
  title: string;
  value: number;
  extra?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, extra }) => (
  <div className="bg-white shadow rounded p-4 flex flex-col">
    <span className="text-gray-500 text-sm">{title}</span>
    <span className="text-2xl font-bold">{value}</span>
    {extra && <span className="text-green-600 text-sm mt-1">{extra}</span>}
  </div>
);

export default InfoCard;
