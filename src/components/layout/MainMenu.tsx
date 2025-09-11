import NavLink from '../NavLink';
import { useState } from 'react';

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav role="navigation" aria-label="Main menu">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none"
        aria-expanded={isOpen}
        aria-controls="main-menu-content"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        id="main-menu-content"
        className={`
          ${isOpen ? 'fixed top-0 left-0 h-full w-2/3 bg-white p-4 shadow-md transform transition-transform ease-in-out duration-300 z-50 translate-x-0 flex flex-col gap-2' : 'fixed top-0 left-0 h-full w-2/3 bg-white p-4 shadow-md transform transition-transform ease-in-out duration-300 z-50 -translate-x-full'}
          md:static md:flex md:flex-row md:gap-4 md:h-auto md:w-auto md:bg-transparent md:p-0 md:shadow-none md:transform-none md:transition-none md:z-auto md:left-auto md:translate-x-0
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <NavLink colorScheme="text" to="/">
          Top Repos
        </NavLink>
        <NavLink colorScheme="text" to="/my-repos">
          My Repos
        </NavLink>
        <NavLink colorScheme="text" to="/PublicApis">
          Public APIs
        </NavLink>
      </div>
    </nav>
  );
};

export default MainMenu;
