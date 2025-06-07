export interface Teacher {
  id: number;
  name: string;
}

export interface Pupil {
  id: string;
  firstName: string;
  lastName: string;
  form: string;
  attendance: number;
}

export interface ClassInfo {
  id: number;
  name: string;
  year: string;
  subject: string;
  pupils: Pupil[];
}

export interface DashboardStats {
  totalClasses: number;
  totalStudents: number;
  reportsGenerated: number;
  reportsGrowth: string;
}

export interface AttendanceBreakdown {
  present: number;
  authorizedAbsence: number;
  unauthorizedAbsence: number;
  late: number;
}

export interface AcademicRecord {
  subject: string;
  current: string;
  target: string;
  effort: string;
  lastAssessment: string;
}

export interface BehaviorIncident {
  type: string;
  date: string;
  points: number;
}

export interface BehaviorSummary {
  netPoints: number;
  positive: number;
  negative: number;
  percentPositive: number;
  incidents: BehaviorIncident[];
}

export interface Report {
  id: string;
  date: string;
  summary: string;
}

export interface PupilDetail extends Pupil {
  group: string;
  attendanceBreakdown: AttendanceBreakdown;
  behaviorPoints: number;
  academic: AcademicRecord[];
  behaviorSummary: BehaviorSummary;
  reports: Report[];
}
