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

      {/* Admin Body */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center sm:text-left">
          <h1 className="text-xl sm:text-3xl font-bold text-gray-800">
            Welcome back, {user?.fullName || 'Admin'} 👋
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            manage Your Business PeaceFully! This is analytics page
          </p>
        </div>

        {/* Quick Stats / Cards */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xs sm:text-sm font-semibold text-gray-500">
              Total Users
            </h2>
            <p className="mt-2 text-lg sm:text-2xl font-bold text-gray-900">
              120
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xs sm:text-sm font-semibold text-gray-500">
              Active Subscriptions
            </h2>
            <p className="mt-2 text-lg sm:text-2xl font-bold text-green-600">
              85
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xs sm:text-sm font-semibold text-gray-500">
              Products
            </h2>
            <p className="mt-2 text-lg sm:text-2xl font-bold text-blue-600">
              45
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-xs sm:text-sm font-semibold text-gray-500">
              Pending Requests
            </h2>
            <p className="mt-2 text-lg sm:text-2xl font-bold text-red-600">5</p>
          </div>
        </div>

        {/* Work Description Section */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            About Your Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            As an admin, you can{' '}
            <span className="font-semibold">manage users</span>, create and edit{' '}
            <span className="font-semibold">products</span>, and keep track of{' '}
            <span className="font-semibold">subscriptions</span>. You have full
            control to maintain the platform and ensure smooth operations for
            both members and trainers.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Admin;
