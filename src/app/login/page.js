// src/app/login/page.js
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../lib/auth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Simulate a successful login
      const token = 'dummy-token';
      login(token);
      router.push('/'); // Redirect to home page after login
    } catch (error) {
      console.error('Login error:', error); // Log the error for debugging
      setError('Login failed');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:text-blue-700">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
