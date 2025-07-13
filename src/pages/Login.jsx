import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const { user, login } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' });
  const [err, setErr] = useState('');

  if (user) return <Navigate to="/employees" replace />;

  const submit = (e) => {
    e.preventDefault();
    if (!login(form.username, form.password)) setErr('Invalid credentials');
  };

  return (
    <div className="min-h-screen flex items-center justify-center
            bg-[linear-gradient(135deg,var(--grad-from),var(--grad-to))]
            px-4 py-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
        <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg frosted-glass-bg">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
            Login
          </h2>
          
          <div className="space-y-4">
            <input
              className="input w-full frosted-glass-input"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
            />
            
            <input
              className="input w-full frosted-glass-input"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
            
            {err && (
              <p className="text-red-500 text-sm mt-2 text-center bg-red-50 dark:bg-red-900/20 p-2 rounded">
                {err}
              </p>
            )}
            
            <button className="btn-primary w-full mt-6">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}