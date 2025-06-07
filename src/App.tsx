import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ClassDetail from './pages/ClassDetail';
import PupilProfile from './pages/PupilProfile';
import { ClassInfo, PupilDetail } from './types';
import { pupils } from './data/mockData';

function App() {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);
  const [selectedPupil, setSelectedPupil] = useState<PupilDetail | null>(null);

  if (selectedPupil) {
    return <PupilProfile pupil={selectedPupil} />;
  }

  if (selectedClass) {
    return (
      <ClassDetail
        classInfo={selectedClass}
        onViewPupil={(id) => {
          const detail = pupils.find((p) => p.id === id) || null;
          setSelectedPupil(detail);
        }}
      />
    );
  }

  return <Dashboard onViewClass={setSelectedClass} />;
}

export default App;
