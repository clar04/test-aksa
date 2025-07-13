import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { user, editProfile } = useAuth();
  const [name, setName] = useState(user.fullName || '');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      <input
        className="input w-full max-w-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => editProfile(name)} className="btn-primary mt-4">
        Save
      </button>
    </div>
  );
}
