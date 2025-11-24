export interface Trail {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  duration: string;
  price: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  TRAILS = 'TRAILS',
  ABOUT = 'ABOUT',
  GUIDE = 'GUIDE',
  CONTACT = 'CONTACT',
  EXPERIENCE_DETAIL = 'EXPERIENCE_DETAIL'
}

export interface TourPackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  location: string;
  image: string;
  features: string[];
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  benefits?: string[];
}

export interface MembershipPackage {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlight: boolean;
}