// import { useState } from 'react';
// import { Dialog, DialogPanel } from '@headlessui/react';
import CascadeIcon from '@/shared/assets/logos/cascade.svg';
import { Link } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Button } from './ui/Button';
import { Image } from './ui/Image';
import { Switch } from './ui/Switch';

const navigation = [
  { name: 'Top Repos', href: '/' },
  { name: 'My Repos', href: '/my-repos' },
];

export default function MainMenu() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };
  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex items-center gap-x-12">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image svg={CascadeIcon} />
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Button asChild key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm/6 font-semibold text-gray-900 dark:text-white"
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            // onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400 dark:hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon aria-hidden="true" className="size-6" /> */}
          </button>
        </div>
        <Switch onClick={toggleTheme} />
      </nav>
    </header>
  );
}
