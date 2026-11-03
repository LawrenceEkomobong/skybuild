export type ProjectCategory = 
  | 'All' 
  | 'Residential' 
  | 'Commercial' 
  | 'Industrial' 
  | 'Infrastructure' 
  | 'Renovation';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Infrastructure' | 'Renovation';
  location: string;
  client: string;
  year: string;
  duration: string;
  scope: string;
  budgetRange: string;
  description: string;
  challengeSolution?: {
    challenge: string;
    solution: string;
  };
  heroImage: string;
  galleryImages: string[];
  completedWork: string[];
  keySpecs: {
    label: string;
    value: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  project: string;
  rating: number;
  content: string;
  date: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  projectLocation: string;
  estimatedBudget: string;
  projectDescription: string;
}
