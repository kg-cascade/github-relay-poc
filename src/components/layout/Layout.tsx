import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useState, useEffect } from 'react';
import { graphql, useFragment } from 'react-relay';
import type { Layout_viewer$key } from './__generated__/Layout_viewer.graphql';

interface LayoutProps {
  viewer: Layout_viewer$key;
}

const Layout = ({ viewer }: LayoutProps) => {
  const data = useFragment(
    graphql`
      fragment Layout_viewer on User {
        login
        name
        avatarUrl
      }
    `,
    viewer
  );

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
            Top Repos
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold hover:text-tertiary transition-colors duration-200"
          >
            My Repos
          </Link>
        </div>
        {data.login && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <img
              src={data.avatarUrl || '/src/assets/cascade.svg'}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            Logged in as: <strong>{data.login}</strong> {data.name}
          </div>
        )}
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
