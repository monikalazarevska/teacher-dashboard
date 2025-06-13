import {
  Teacher,
  ClassInfo,
  DashboardStats,
  Pupil,
  PupilDetail,
} from '../types';

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
  {
    id: 1,
    name: '7A - Mathematics',
    year: 'Year 7',
    subject: 'Mathematics',
    pupils: [
      { id: '1', firstName: 'Jordan', lastName: 'Brown', form: '7D', attendance: 85 },
      { id: '2', firstName: 'Alex', lastName: 'Smith', form: '7D', attendance: 92 },
      { id: '3', firstName: 'Taylor', lastName: 'Jones', form: '7D', attendance: 96 },
      { id: '4', firstName: 'Casey', lastName: 'Wilson', form: '7D', attendance: 88 },
      { id: '5', firstName: 'Riley', lastName: 'Davis', form: '7D', attendance: 98 },
    ],
  },
  {
    id: 2,
    name: '8B - English',
    year: 'Year 8',
    subject: 'English',
    pupils: [
      { id: '1', firstName: 'Sam', lastName: 'Green', form: '8A', attendance: 93 },
      { id: '2', firstName: 'Morgan', lastName: 'Lee', form: '8A', attendance: 89 },
      { id: '3', firstName: 'Jamie', lastName: 'Clark', form: '8A', attendance: 97 },
      { id: '4', firstName: 'Drew', lastName: 'Lewis', form: '8A', attendance: 91 },
      { id: '5', firstName: 'Robin', lastName: 'Hall', form: '8A', attendance: 94 },
    ],
  },
  {
    id: 3,
    name: '9C - Science',
    year: 'Year 9',
    subject: 'Science',
    pupils: [
      { id: '1', firstName: 'Charlie', lastName: 'Young', form: '9B', attendance: 90 },
      { id: '2', firstName: 'Reese', lastName: 'Martin', form: '9B', attendance: 95 },
      { id: '3', firstName: 'Quinn', lastName: 'Patel', form: '9B', attendance: 87 },
      { id: '4', firstName: 'Avery', lastName: 'Garcia', form: '9B', attendance: 92 },
      { id: '5', firstName: 'Taylor', lastName: 'Nguyen', form: '9B', attendance: 98 },
    ],
  },
  {
    id: 4,
    name: '10D - History',
    year: 'Year 10',
    subject: 'History',
    pupils: [
      { id: '1', firstName: 'Peyton', lastName: 'Scott', form: '10C', attendance: 94 },
      { id: '2', firstName: 'Harper', lastName: 'Adams', form: '10C', attendance: 89 },
      { id: '3', firstName: 'Rowan', lastName: 'Baker', form: '10C', attendance: 97 },
      { id: '4', firstName: 'Skyler', lastName: 'Carter', form: '10C', attendance: 92 },
      { id: '5', firstName: 'Jordan', lastName: 'Evans', form: '10C', attendance: 88 },
    ],
  },
];

export const pupils: PupilDetail[] = [
  {
    id: '1',
    firstName: 'Riley',
    lastName: 'Davis',
    group: 'Year 8',
    form: '8D',
    attendance: 93,
    attendanceBreakdown: {
      present: 85,
      authorizedAbsence: 5,
      unauthorizedAbsence: 2,
      late: 3,
    },
    behaviorPoints: 13,
    academic: [
      {
        subject: 'Mathematics',
        current: 'B',
        target: 'B',
        effort: '4/5',
        lastAssessment: '7/10 (87%)',
      },
      {
        subject: 'English',
        current: 'A',
        target: 'A',
        effort: '5/5',
        lastAssessment: '9/10 (95%)',
      },
      {
        subject: 'Science',
        current: 'B',
        target: 'A',
        effort: '4/5',
        lastAssessment: '8/10 (90%)',
      },
    ],
    behaviorSummary: {
      netPoints: 13,
      positive: 15,
      negative: 2,
      percentPositive: 88,
      incidents: [
        { type: 'Outstanding effort', date: '2025-06-04', points: 3 },
        { type: 'Helped peers', date: '2025-05-28', points: 3 },
        { type: 'Disruptive behavior', date: '2025-05-17', points: -3 },
      ],
    },
    reports: [],
  },
];
