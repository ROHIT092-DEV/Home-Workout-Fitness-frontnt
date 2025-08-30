'use client';

import AdminHeader from '@/components/AdminComponent/AdminHeader';
import { useAuthStore } from '@/store/auth';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Header from '@/components/Header';
import AccessDeniedModal from '@/components/AccessDeniedModal';
import { useParams } from 'next/navigation';

type Subscription = {
  _id?: string;
  planId?: {
    name?: string;
    price?: number;
    durationInDays?: number;
    description?: string;
  };
  userId?: { fullName?: string; email?: string };
  startDate?: string;
  endDate?: string;
  status?: string;
};

export default function Page() {
  const params = useParams();
  const id = params?.id as string;

  const user = useAuthStore((state) => state.user);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user || !id) return;

    const token = Cookies.get('refreshToken');
    setLoading(true);
    setError(null);

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/membership/user/${id}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((data: Subscription[]) => {
        console.log('Subscriptions fetched successfully:', data);
        setSubscriptions(data);
      })
      .catch((err) => {
        console.error('Error fetching subscriptions:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [user, id]);

  if (!user) {
    return (
      <div>
        <Header />
        <AccessDeniedModal />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <main className="max-w-4xl mx-auto p-6">
        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {/* Subscription Cards */}
        {!loading && subscriptions.length > 0
          ? subscriptions.map((sub) => (
              <div
                key={sub._id}
                className="bg-white shadow-md rounded-2xl p-6 mb-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Subscription Details
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full font-medium text-sm ${
                      sub.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {sub.status || 'Unknown'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-500 text-sm">User Name</p>
                    <p className="font-medium">{sub.userId?.fullName || '—'}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="font-medium">{sub.userId?.email || '—'}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Plan</p>
                    <p className="font-medium">{sub.planId?.name || '—'}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Price</p>
                    <p className="font-medium">
                      {sub.planId?.price
                        ? `₹${sub.planId.price.toFixed(2)}`
                        : '—'}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Duration</p>
                    <p className="font-medium">
                      {sub.planId?.durationInDays
                        ? `${sub.planId.durationInDays} days`
                        : '—'}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">Start Date</p>
                    <p className="font-medium">
                      {sub.startDate
                        ? new Date(sub.startDate).toLocaleDateString()
                        : '—'}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">End Date</p>
                    <p className="font-medium">
                      {sub.endDate
                        ? new Date(sub.endDate).toLocaleDateString()
                        : '—'}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : !loading &&
            !error && (
              <div className="text-center text-gray-500 py-20">
                No subscription details found.
              </div>
            )}

        {/* Back Button */}
        {!loading && (
          <div className="mt-6">
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Back
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
