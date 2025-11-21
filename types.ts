export type AccessStatus = 'blocked' | 'accessible' | 'restricted';

export interface PlatformData {
  id: string;
  name: string;
  category: 'Retail' | 'Social' | 'Media' | 'Tech' | 'Finance' | 'Services';
  status: AccessStatus;
  description: string;
  iconName: string;
  details?: string[];
}

export interface StatData {
  name: string;
  value: number;
  color?: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export interface ScenarioData {
  title: string;
  status: 'danger' | 'warning' | 'success';
  description: string;
  characteristics: string[];
  outcome: string;
}

export interface StrategyPillar {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  actions: string[];
  tools: string[];
}

export interface RoadmapPhase {
  phase: string;
  duration: string;
  title: string;
  goals: string[];
}