import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;