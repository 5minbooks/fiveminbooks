import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Moon, Sun, BookOpen, Menu, X } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

export function Header() {
  const { theme, toggleTheme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <BookOpen className="h-7 w-7 text-primary-500" />
          <span className="bg-gradient-to-r from-primary-500 to-accent-blue bg-clip-text text-transparent">
            QuickPods
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/explore" className="text-sm font-medium text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400">
            Explore
          </Link>
          <Link to="/categories" className="text-sm font-medium text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400">
            Categories
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search books and podcasts..."
              className="w-64 rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-primary-400 dark:focus:ring-primary-400"
            />
          </div>

          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <Link
            to="/login"
            className="hidden rounded-full bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 md:block"
          >
            Sign In
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 md:hidden">
          <nav className="flex flex-col space-y-1 p-4">
            <Link
              to="/explore"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/categories"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/pricing"
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/login"
              className="mt-2 rounded-lg bg-primary-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}