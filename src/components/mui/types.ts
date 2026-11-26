import type { SourceRef } from '../../data/types';

export interface SiteInfo {
  name: string;
  shortName: string;
  unit: string;
  location: string;
  description: string;
  address: string;
  email: string;
  lastUpdated: string | null;
}

export interface LogoImage {
  src: string;
  width?: number;
  height?: number;
}

export interface Logos {
  cho: LogoImage;
  lgu: LogoImage;
}

export interface MetaItem {
  label: string;
  value: string;
}

export type CardSource = SourceRef;

export interface ScheduleRow {
  title: string;
  when: string;
  notes: string[];
  badge?: string;
  source?: CardSource;
  updated?: string | null;
}
