import React, { useState } from 'react';
import { BookCard } from '../components/BookCard';
import { Search, Sparkles, Clock, TrendingUp, BookOpen } from 'lucide-react';
import type { Book } from '../types';

const MOCK_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000',
    category: 'Self-Development',
    readTime: 15,
    popularity: 98,
    publishedDate: '2018-10-16',
    summary: '',
    audioUrl: ''
  },
  {
    id: '2',
    title: 'Deep Work',
    author: 'Cal Newport',
    coverUrl: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1000',
    category: 'Productivity',
    readTime: 12,
    popularity: 95,
    publishedDate: '2016-01-05',
    summary: '',
    audioUrl: ''
  },
  {
    id: '3',
    title: 'Think Again',
    author: 'Adam Grant',
    coverUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1000',
    category: 'Psychology',
    readTime: 18,
    popularity: 92,
    publishedDate: '2021-02-02',
    summary: '',
    audioUrl: ''
  }
];

const categories = [
  'Self-Development',
  'Business',
  'Psychology',
  'Science',
  'Philosophy',
  'Health',
  'Leadership',
  'Productivity'
];

export function HomePage() {
  const [books] = useState<Book[]>(MOCK_BOOKS);
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-accent-blue py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000')] opacity-10 mix-blend-overlay"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn from the World's Best Books
              <br />
              <span className="text-primary-200">in Just 15 Minutes</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
              Access 7,500+ concise summaries of life-changing books and podcasts.
              Start your learning journey today.
            </p>
            <div className="relative mx-auto max-w-2xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search books, authors, or topics..."
                className="w-full rounded-full border-0 bg-white py-3 pl-12 pr-4 text-gray-900 shadow-lg outline-none ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, label: 'Book Summaries', value: '7,500+', color: 'text-primary-500' },
            { icon: Clock, label: 'Minutes to Read', value: '15', color: 'text-accent-orange' },
            { icon: TrendingUp, label: 'Active Readers', value: '2M+', color: 'text-accent-blue' },
            { icon: Sparkles, label: 'Categories', value: '30+', color: 'text-accent-yellow' }
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <Icon className={`mb-3 h-8 w-8 ${color}`} />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
            Explore Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Book Grid */}
        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Popular Summaries
            </h2>
            <select className="rounded-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Trending</option>
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <div className="rounded-2xl bg-gradient-to-r from-accent-orange to-accent-coral p-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Start Learning Today
            </h2>
            <p className="mb-6 text-lg text-orange-100">
              Join millions of readers unlocking life-changing insights.
            </p>
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-accent-orange shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900">
              Try QuickPods Free
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}