'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.png';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState({ email: '', password: '' });
  const { setUser } = useAuthStore();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;
    const newError = { email: '', password: '' };

    if (!email) {
      newError.email = 'Email is required';
      hasError = true;
    }

    if (!password) {
      newError.password = 'Password is required';
      hasError = true;
    }

    setError(newError);

    if (!hasError) {
      console.log('Form submitted:', { email, password });
    }

    // Here you can add your login logic, e.g., API call

    setErrorMessage('');

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Login failed');
      }
      const data = await response.json();

      // Set the user in your global state or context here

      setUser(data.user);

      // ✅ Save refreshToken in cookies (frontend managed)
      Cookies.set('refreshToken', data.accessToken, {
        expires: 7, // 7 days
        secure: true,
        sameSite: 'strict',
      });

      router.push('/');
      console.log(`data`, data.user);
    } catch (error) {
      console.error('Login Error:', error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="App Logo" width={80} height={80} />
        </div>
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border rounded ${
                error.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border rounded ${
                error.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {error.password && (
              <p className="text-red-500 text-sm mt-1">{error.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
