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
  GUIDE = 'GUIDE'
}