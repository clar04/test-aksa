import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import Dropdown from './Dropdown';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme(); 
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-indigo-700 text-white px-6 py-3 flex justify-between items-center shadow">
      <Link to="/" className="text-xl font-extrabold tracking-widest">
        Dashboard
      </Link>

      <div className="flex items-center gap-4">
        {/* Tombol toggle tema */}
        <button
          onClick={() => {
            const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
            setTheme(next);
          }}
          className="hover:bg-indigo-600 p-2 rounded transition"
          title={`Current theme: ${theme}`}
        >
          {theme === 'light' && '☀️'}
          {theme === 'dark' && '🌙'}
          {theme === 'system' && '💻'}
        </button>

        {user && (
          <div className="relative">
            <button 
              onClick={() => setOpen(!open)} 
              className="flex items-center gap-2 hover:bg-indigo-600 px-3 py-2 rounded transition"
            >
              <span>{user.fullName}</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 8 12 14 18 8" />
              </svg>
            </button>

            {open && (
            <Dropdown onClose={() => setOpen(false)}>
  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
    <div className="font-semibold">Administrator</div>
  </div>
  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
    <li>
      <Link
        to="/profile"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        onClick={() => setOpen(false)}
      >
        Edit Profile
      </Link>
    </li>
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          logout();
          setOpen(false);
        }}
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        Logout
      </a>
    </li>
  </ul>
</Dropdown>



            )}
          </div>
        )}
      </div>
    </nav>
  );
}
