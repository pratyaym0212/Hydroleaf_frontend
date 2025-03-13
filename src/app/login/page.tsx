'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy authentication (replace with actual user validation)
    if (username === 'admin' && password === 'hydroleaf') {
      login(username);
      router.push('/admin'); // Redirect to the blog page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="mb-4 text-xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded border p-2"
        />
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
