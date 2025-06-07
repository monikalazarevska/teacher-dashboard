import { Teacher, ClassInfo, DashboardStats } from '../types';

export const teacher: Teacher = {
  id: 1,
  name: 'Jane Smith',
};

export const dashboardStats: DashboardStats = {
  totalClasses: 4,
  totalStudents: 20,
  reportsGenerated: 2,
  reportsGrowth: '50%',
};

export const classes: ClassInfo[] = [
  { id: 1, name: '7A - Mathematics', year: 'Year 7', pupils: 5, subject: 'Mathematics' },
  { id: 2, name: '8B - English', year: 'Year 8', pupils: 5, subject: 'English' },
  { id: 3, name: '9C - Science', year: 'Year 9', pupils: 5, subject: 'Science' },
  { id: 4, name: '10D - History', year: 'Year 10', pupils: 5, subject: 'History' },
];
