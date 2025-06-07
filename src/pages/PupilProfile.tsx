import React from 'react';
import Sidebar from '../components/Sidebar';
import Avatar from '../components/Avatar';
import PupilOverviewCard from '../components/PupilOverviewCard';
import AttendanceDonutChart from '../components/AttendanceDonutChart';
import AcademicSummary from '../components/AcademicSummary';
import BehaviorSummary from '../components/BehaviorSummary';
import ReportsPanel from '../components/ReportsPanel';
import { teacher } from '../data/mockData';
import { PupilDetail } from '../types';

interface PupilProfileProps {
  pupil: PupilDetail;
  onBack: () => void;
}

const PupilProfile: React.FC<PupilProfileProps> = ({ pupil, onBack }) => (
  <div className="flex h-screen">
    <Sidebar active="classes" />
    <div className="flex-1 flex flex-col">
      <header className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <button onClick={onBack} className="mr-2" aria-label="Go back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Pupil Report Wizard</h1>
        </div>
        <Avatar name={teacher.name} />
      </header>
      <main className="p-4 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <PupilOverviewCard pupil={pupil} />
            <AttendanceDonutChart breakdown={pupil.attendanceBreakdown} />
          </div>
          <div className="space-y-6">
            <AcademicSummary records={pupil.academic} />
            <BehaviorSummary data={pupil.behaviorSummary} />
            <ReportsPanel reports={pupil.reports} />
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default PupilProfile;
