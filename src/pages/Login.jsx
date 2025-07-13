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
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form onSubmit={submit} className="bg-white dark:bg-gray-800 p-8 rounded shadow w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <input
          className="input"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          className="input mt-3"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        {err && <p className="text-red-500 text-sm mt-2">{err}</p>}
        <button className="btn-primary mt-4 w-full">Sign in</button>
      </form>
    </div>
  );
}
