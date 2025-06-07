export interface Teacher {
  id: number;
  name: string;
}

export interface ClassInfo {
  id: number;
  name: string;
  year: string;
  pupils: number;
  subject: string;
}

export interface DashboardStats {
  totalClasses: number;
  totalStudents: number;
  reportsGenerated: number;
  reportsGrowth: string;
}
