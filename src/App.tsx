import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ClassDetail from './pages/ClassDetail';
import { ClassInfo } from './types';

function App() {
  const [selectedClass, setSelectedClass] = useState<ClassInfo | null>(null);

  return selectedClass ? (
    <ClassDetail classInfo={selectedClass} />
  ) : (
    <Dashboard onViewClass={setSelectedClass} />
  );
}

export default App;
