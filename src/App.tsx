import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ClassDetail from './pages/ClassDetail';
import PupilProfile from './pages/PupilProfile';
import { ClassInfo, PupilDetail, Pupil } from './types';
import { pupils } from './data/mockData';

function createPupilDetail(pupil: Pupil, cls: ClassInfo): PupilDetail {
  const template = pupils[0];
  return { ...template, ...pupil, group: cls.year };
}

function App() {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [selectedPupil, setSelectedPupil] = useState<PupilDetail | null>(null);

  if (selectedPupil) {
    return (
      <PupilProfile pupil={selectedPupil} onBack={() => setSelectedPupil(null)} />
    );
  }

  if (selectedClass) {
    return (
      <ClassDetail
        classInfo={selectedClass}
        onBack={() => setSelectedClass(null)}
        onViewPupil={(pupil) => {
          const detail = pupils.find((p) => p.id === pupil.id);
          setSelectedPupil(detail || createPupilDetail(pupil, selectedClass));
        }}
      />
    );
  }

  return <Dashboard onViewClass={setSelectedClass} />;
}

export default App;
