import AdminHeader from '@/components/AdminComponent/AdminHeader';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function page() {
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

      <div className="p-4 mt-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Subscription Management</h2>
        <p className="text-gray-600">
          Here you can manage user subscriptions, view subscription details, and
          perform related actions.
        </p>
        {/* Add your subscription management UI components here */}
      </div>
    </div>
  );
}

export default page;
