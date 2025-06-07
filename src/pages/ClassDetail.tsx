import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Avatar from '../components/Avatar';
import SearchBar from '../components/SearchBar';
import ClassInfoHeader from '../components/ClassInfoHeader';
import PupilCard from '../components/PupilCard';
import { teacher } from '../data/mockData';
import { ClassInfo, Pupil } from '../types';

interface ClassDetailProps {
  classInfo: ClassInfo;
  onBack: () => void;
  onViewPupil: (pupil: Pupil) => void;
}
const ClassDetail: React.FC<ClassDetailProps> = ({
  classInfo,
  onBack,
  onViewPupil,
}) => {
  const [search, setSearch] = useState('');

  const filtered = classInfo.pupils.filter((p) =>
    `${p.firstName} ${p.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
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
          <ClassInfoHeader classInfo={classInfo} onBack={onBack} />
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Pupils</h3>
              <div className="w-60">
                <SearchBar
                  value={search}
                  onChange={setSearch}
                  placeholder="Search pupils..."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((pupil) => (
                <PupilCard
                  key={pupil.id}
                  pupil={pupil}
                  onView={() => onViewPupil(pupil)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClassDetail;
