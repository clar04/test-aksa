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
    <nav className="bg-indigo-600 text-white px-4 py-2 flex justify-between items-center">
      <Link to="/employees" className="font-semibold">
        Dashboard
      </Link>

      {user && (
        <div className="relative">
          <button onClick={() => setOpen(!open)} className="flex items-center gap-2">
            <span>{user.fullName}</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 8 12 14 18 8" />
            </svg>
          </button>

          {open && (
            <Dropdown onClose={() => setOpen(false)}>
              <Link to="/profile" className="dropdown-item">
                Edit Profile
              </Link>
              <button onClick={logout} className="dropdown-item">
                Logout
              </button>
              <hr className="border-t my-1 border-gray-200 dark:border-gray-700" />
              {['light', 'dark', 'system'].map((m) => (
                <button key={m} onClick={() => setTheme(m)} className="dropdown-item capitalize">
                  {m} {theme === m && '✓'}
                </button>
              ))}
            </Dropdown>
          )}
        </div>
      )}
    </nav>
  );
}
