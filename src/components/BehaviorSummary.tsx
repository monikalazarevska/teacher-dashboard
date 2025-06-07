import React from 'react';
import RecentIncidentList from './RecentIncidentList';
import { BehaviorSummary as BehaviorSummaryType } from '../types';

interface BehaviorSummaryProps {
  data: BehaviorSummaryType;
}

const BehaviorSummary: React.FC<BehaviorSummaryProps> = ({ data }) => (
  <div className="bg-white shadow rounded p-4">
    <h3 className="font-semibold mb-2">Behavior Summary</h3>
    <p className="text-2xl font-bold">{data.netPoints} pts</p>
    <p className="text-sm text-gray-500 mb-2">
      {data.positive} positive / {data.negative} negative
    </p>
    <div className="w-full bg-gray-200 h-2 rounded mb-4">
      <div
        className="bg-green-500 h-2 rounded"
        style={{ width: `${data.percentPositive}%` }}
      ></div>
    </div>
    <RecentIncidentList incidents={data.incidents} />
  </div>
);

export default BehaviorSummary;
