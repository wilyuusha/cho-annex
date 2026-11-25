// Shapes for the JSON files in this folder.
// All fields are optional in practice until verified content is added.

export interface ScheduleEntry {
  title: string;
  when: string;
  effectiveDate?: string | null;
  notes?: string[];
  updated?: string | null;
}

export interface SchedulesData {
  lastUpdated: string | null;
  regularHours: ScheduleEntry[];
  abtc: ScheduleEntry[];
  yakap: ScheduleEntry[];
  serviceAvailability: ScheduleEntry[];
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
  updated?: string | null;
}

export interface VisitsData {
  lastUpdated: string | null;
  entries: VisitEntry[];
}

export interface ServiceEntry {
  name: string;
  description?: string;
  availability?: string;
  requirements?: string[];
  notes?: string[];
  updated?: string | null;
}

export interface ServicesData {
  lastUpdated: string | null;
  services: ServiceEntry[];
}

export interface RoomEntry {
  name: string;
  floor?: string;
  location?: string;
  services?: string[];
  notes?: string[];
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
  updated?: string | null;
}

export interface AnnouncementsData {
  lastUpdated: string | null;
  entries: AnnouncementEntry[];
}
