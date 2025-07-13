import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

export default function Profile() {
  const { user, editProfile } = useAuth();
  const { theme } = useTheme();
  const [name, setName] = useState(user.fullName || '');

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,var(--grad-from),var(--grad-to))] px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        {/* Judul */}
        <h1
          className={`${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          } text-2xl font-bold mb-6`}
        >
          Edit Profile
        </h1>

        {/* Form container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editProfile(name);
            }}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setName(user.fullName || '')}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 border border-transparent px-5 py-2.5 rounded-lg text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
