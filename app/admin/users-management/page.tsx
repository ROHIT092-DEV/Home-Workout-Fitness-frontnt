'use client';

import AdminHeader from '@/components/AdminComponent/AdminHeader';
import { ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useAuthStore } from '@/store/auth';
import UserManagement from '@/components/AdminComponent/UserManagement';

function Page() {
  const { user } = useAuthStore();

  if (!user || user.role !== 'admin') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p className="text-gray-600">
          You do not have permission to view this page.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    );
  }
  return (
    <div>
      <AdminHeader />
      <Link
        href="/admin"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to admin
      </Link>

      {/* content Here */}

      <UserManagement />
    </div>
  );
}

export default Page;
