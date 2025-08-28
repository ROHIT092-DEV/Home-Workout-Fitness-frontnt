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

      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My View Page
        </h1>
      </main>
    </div>
  );
}

export default MyView;
