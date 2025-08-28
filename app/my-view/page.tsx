'use client';

import Header from '@/components/Header';
import React from 'react';
import { useAuthStore } from '@/store/auth';
import AccessDeniedModal from '@/components/AccessDeniedModal';

function MyView() {
  const user = useAuthStore((state) => state.user);

  console.log(`user is defined ` + user?.email);

  if (!user) {
    return (
      <div>
        <Header />

        <AccessDeniedModal />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-pink-50 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-10 sm:p-16 max-w-3xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Welcome to My View Page
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl mb-6">
            Your dashboard is ready! Add your content below to start building
            amazing features.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
            <div className="bg-blue-100 rounded-xl shadow-md p-6 flex-1 hover:scale-105 transition-transform">
              <h2 className="font-semibold text-xl mb-2">Feature 1</h2>
              <p className="text-gray-600">Placeholder for content or stats.</p>
            </div>
            <div className="bg-pink-100 rounded-xl shadow-md p-6 flex-1 hover:scale-105 transition-transform">
              <h2 className="font-semibold text-xl mb-2">Feature 2</h2>
              <p className="text-gray-600">Placeholder for content or stats.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MyView;
