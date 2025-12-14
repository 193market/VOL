import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'growth' | 'operation' | 'strategy';
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PackageItem {
  name: string;
  target: string;
  features: string[];
  recommended: boolean;
}