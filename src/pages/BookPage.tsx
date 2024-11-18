import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Pause, BookOpen, Clock, Calendar, Share2, Bookmark, Star } from 'lucide-react';
import type { Book } from '../types';

// This would typically come from an API
const MOCK_BOOKS: Record<string, Book> = {
  '1': {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000',
    category: 'Self-Development',
    readTime: 15,
    popularity: 98,
    publishedDate: '2018-10-16',
    summary: `An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power; a component of the system of compound growth. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change.

    Key Insights:
    1. Small habits compound over time to create remarkable results
    2. Focus on systems instead of goals
    3. Build identity-based habits
    4. Use the four laws of behavior change:
       - Make it obvious
       - Make it attractive
       - Make it easy
       - Make it satisfying`,
    audioUrl: 'https://example.com/audio/atomic-habits.mp3'
  },
  '2': {
    id: '2',
    title: 'Deep Work',
    author: 'Cal Newport',
    coverUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1000',
    category: 'Productivity',
    readTime: 12,
    popularity: 95,
    publishedDate: '2016-01-05',
    summary: `Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time.

    Key Insights:
    1. Deep work is increasingly rare and valuable in our economy
    2. Your work habits should shield your attention from the chaos
    3. Embrace boredom and quit social media
    4. Structure your day with deep work blocks
    5. Create rituals and routines to support focused work`,
    audioUrl: 'https://example.com/audio/deep-work.mp3'
  },
  '3': {
    id: '3',
    title: 'Think Again',
    author: 'Adam Grant',
    coverUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000',
    category: 'Psychology',
    readTime: 18,
    popularity: 92,
    publishedDate: '2021-02-02',
    summary: `Think Again examines the critical art of rethinking: learning to question your beliefs and to know what you don't know. Grant explores how we can develop the intellectual and emotional flexibility to rethink and unlearn opinions and identities that no longer serve us well.

    Key Insights:
    1. Embrace the joy of being wrong
    2. Learn to think like a scientist
    3. Create psychological safety in groups
    4. Build the habit of rethinking
    5. Use the power of motivational interviewing`,
    audioUrl: 'https://example.com/audio/think-again.mp3'
  }
};

export function BookPage() {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const book = id ? MOCK_BOOKS[id] : null;

  if (!book) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Book not found</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">The book you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-accent-blue">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Book Cover */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative aspect-[3/4] w-72 overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Book Info */}
            <div className="flex flex-col justify-center text-white lg:pl-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                  {book.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-accent-yellow text-accent-yellow" />
                  <span className="text-sm">{book.popularity}% Liked</span>
                </div>
              </div>
              
              <h1 className="mb-2 text-4xl font-bold">{book.title}</h1>
              <p className="mb-6 text-xl text-primary-100">by {book.author}</p>
              
              <div className="mb-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary-200" />
                  <span>{book.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary-200" />
                  <span>{new Date(book.publishedDate).getFullYear()}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-600 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-5 w-5" />
                      Pause Audio
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      Play Audio
                    </>
                  )}
                </button>
                <button className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-colors hover:bg-white/20">
                  <Bookmark className="h-5 w-5" />
                  Save
                </button>
                <button className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-colors hover:bg-white/20">
                  <Share2 className="h-5 w-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Key Insights
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {book.summary.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-600 dark:text-gray-300">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}</boltArtifact>

<boltAction type="file" filePath="src/App.tsx">import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { BookPage } from './pages/BookPage';
import { useThemeStore } from './store/useThemeStore';

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={theme}>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}