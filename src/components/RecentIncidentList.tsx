import React from 'react';
import { BehaviorIncident } from '../types';

interface RecentIncidentListProps {
  incidents: BehaviorIncident[];
}

const RecentIncidentList: React.FC<RecentIncidentListProps> = ({ incidents }) => (
  <ul className="divide-y divide-gray-200">
    {incidents.map((inc, idx) => (
      <li key={idx} className="py-2 flex justify-between text-sm">
        <span>{inc.type}</span>
        <span className="text-gray-500">{inc.date}</span>
        <span className={inc.points > 0 ? 'text-green-600' : 'text-red-600'}>
          {inc.points > 0 ? '+' : ''}
          {inc.points}
        </span>
      </li>
    ))}
  </ul>
);

export default RecentIncidentList;
