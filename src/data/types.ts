// Shapes for the JSON files in this folder.

export interface SourceRef {
  title: string;
  url: string;
}

export interface ScheduleEntry {
  title: string;
  when: string;
  effectiveDate?: string | null;
  notes?: string[];
  source?: SourceRef;
  updated?: string | null;
}

export interface SchedulesData {
  lastUpdated: string | null;
  regularHours: ScheduleEntry[];
  abtc: ScheduleEntry[];
  yakap: ScheduleEntry[];
  serviceAvailability: ScheduleEntry[];
}

export interface DoctorEntry {
  name: string;
  assignments: Record<string, string[]>;
}

export interface DoctorsData {
  title: string;
  lastUpdated: string | null;
  sourceNote: string;
  days: string[];
  doctors: DoctorEntry[];
}

export interface VisitEntry {
  title: string;
  barangay: string;
  date: string;
  time?: string;
  activity?: string;
  status?: string;
  summary?: string;
  notes?: string[];
  source?: SourceRef;
  updated?: string | null;
}

export interface VisitsData {
  lastUpdated: string | null;
  entries: VisitEntry[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  description?: string;
}

export interface ServiceEntry {
  id: string;
  name: string;
  category: string;
  availability: string | null;
  days: string[];
  hours?: {
    opens: string;
    closes: string;
    timezone: string;
  } | null;
  description?: string;
  effectiveDate?: string | null;
  requirements?: string[];
  notes?: string[];
  verification?: string;
  sourceNote?: string;
  source?: SourceRef;
}

export interface ServicesData {
  lastUpdated: string | null;
  notice?: string;
  categories: ServiceCategory[];
  services: ServiceEntry[];
}

export interface RoomEntry {
  name: string;
  floor?: string;
  location?: string;
  services?: string[];
  notes?: string[];
  source?: SourceRef;
  updated?: string | null;
}

export interface DirectoryData {
  lastUpdated: string | null;
  rooms: RoomEntry[];
  visitorNotes: string[];
}

export interface AnnouncementEntry {
  title: string;
  body: string;
  category: string;
  published: string;
  until?: string | null;
  notes?: string[];
  source?: SourceRef;
  updated?: string | null;
}

export interface AnnouncementsData {
  lastUpdated: string | null;
  entries: AnnouncementEntry[];
}
