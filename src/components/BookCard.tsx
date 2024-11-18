import React from 'react';
import { Clock, BookOpen, Headphones, Star } from 'lucide-react';
import type { Book } from '../types';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link
      to={`/book/${book.id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
            <Headphones className="h-4 w-4" />
            <span>Audio available</span>
          </div>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
            {book.category}
          </span>
          <div className="ml-auto flex items-center text-accent-yellow">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm">{book.popularity}%</span>
          </div>
        </div>
        
        <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
          {book.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {book.author}
        </p>
        
        <div className="mt-auto flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-accent-orange" />
            {book.readTime}m read
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-4 w-4 text-primary-500" />
            Summary
          </span>
        </div>
      </div>
    </Link>
  );
}