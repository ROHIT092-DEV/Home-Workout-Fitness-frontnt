'use client';

import AccessDeniedModal from '@/components/AccessDeniedModal';
import AdminHeader from '@/components/AdminComponent/AdminHeader';
import { useAuthStore } from '@/store/auth';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function Admin() {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== 'admin') {
    return <AccessDeniedModal />;
  }

  console.log(`Admin user is defined ` + user?.email);
  return (
    <div className="min-h-screen bg-gray-50  sm:px-6 lg:px-8">
      <AdminHeader />

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

      <div className="text-center">
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Welcome, {user.email}!
        </p>
      </div>
    </div>
  );
}

export default Admin;
