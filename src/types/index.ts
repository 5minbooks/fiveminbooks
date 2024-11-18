export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  category: string;
  readTime: number;
  popularity: number;
  publishedDate: string;
  summary: string;
  audioUrl: string;
}

export interface User {
  id: string;
  email: string;
  subscription: {
    status: 'active' | 'inactive';
    plan: 'monthly' | 'yearly' | null;
  };
}

export type ThemeMode = 'light' | 'dark';