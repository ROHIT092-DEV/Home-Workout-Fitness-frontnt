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
    if (hasError) return;

    setErrorMessage('');
    setLoading(true);

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
      setUser(data.user);

      Cookies.set('refreshToken', data.accessToken, {
        expires: 7,
        secure: true,
        sameSite: 'strict',
      });

      router.push('/');
    } catch (error: any) {
      setErrorMessage(
        error.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-sm p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="App Logo" width={60} height={60} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-6">
          Sign in
        </h1>

        {/* Global Error */}
        {errorMessage && (
          <div className="mb-4 text-sm text-red-700 bg-red-100 border border-red-200 rounded-md p-2 text-center">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email, phone, or Skype
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${
                error.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {error.email && (
              <p className="text-red-600 text-sm mt-1">{error.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 ${
                error.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {error.password && (
              <p className="text-red-600 text-sm mt-1">{error.password}</p>
            )}
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md font-medium transition hover:bg-blue-700 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            )}
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        {/* Sign up */}
        <p className="mt-6 text-center text-sm text-gray-500">
          No account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Create one!
          </a>
        </p>
      </div>
    </div>
  );
}
