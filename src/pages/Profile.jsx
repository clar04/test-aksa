import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user, editProfile } = useAuth();
  const [name, setName] = useState(user.fullName || '');

  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-lg font-medium">Edit Profile</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Full name"
      />
      <button
        onClick={() => editProfile(name)}
        className="self-end bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Save
      </button>
    </div>
  );
}
