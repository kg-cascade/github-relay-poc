import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useState, useEffect } from 'react';

const Layout = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-background text-primary transition-colors duration-300">
      <nav className="p-4 bg-secondary text-primary shadow-md flex justify-between items-center">
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-lg font-semibold hover:text-tertiary transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold hover:text-tertiary transition-colors duration-200"
          >
            About
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md bg-tertiary text-background-inverse hover:bg-tertiary transition-colors duration-200"
        >
          Toggle to {theme === 'light' ? 'Dark' : 'Light'}
        </button>
      </nav>
      <hr className="border-tertiary" />
      <div className="p-4">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  );
};

export default Layout;
