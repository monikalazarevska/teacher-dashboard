import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import InfoCard from '../components/InfoCard';
import ClassCard from '../components/ClassCard';
import Avatar from '../components/Avatar';
import SearchBar from '../components/SearchBar';
import { teacher, dashboardStats, classes } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const filtered = classes.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar active="classes" />
      <div className="flex-1 flex flex-col">
        <header className="flex justify-between items-center p-4 border-b">
          <h1 className="text-2xl font-bold">Pupil Report Wizard</h1>
          <Avatar name={teacher.name} />
        </header>
        <main className="p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Welcome back, {teacher.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <InfoCard title="Total Classes" value={dashboardStats.totalClasses} />
            <InfoCard title="Total Students" value={dashboardStats.totalStudents} />
            <InfoCard
              title="Reports Generated"
              value={dashboardStats.reportsGenerated}
              extra={`\u2191 ${dashboardStats.reportsGrowth} increase`}
            />
          </div>
          <div className="mb-4">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(c => (
              <ClassCard key={c.id} data={c} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
