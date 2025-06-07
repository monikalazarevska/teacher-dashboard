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
