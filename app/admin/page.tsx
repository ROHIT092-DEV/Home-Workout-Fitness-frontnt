'use client';

import AccessDeniedModal from '@/components/AccessDeniedModal';
import { useAuthStore } from '@/store/auth';

function Admin() {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== 'admin') {
    return <AccessDeniedModal />;
  }

  console.log(`Admin user is defined ` + user?.email);
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Welcome, {user.email}!
        </p>
      </div>

      {/* Admin Controls Card */}
      <div className="mt-8 sm:mt-12 p-6 sm:p-10 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Admin Controls
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
          <li>Manage Users</li>
          <li>View Reports</li>
          <li>System Settings</li>
          <li>Content Moderation</li>
        </ul>

        <div className="mt-6 text-center sm:text-right">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition-transform transform hover:scale-105">
            Perform Admin Action
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
