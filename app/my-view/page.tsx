'use client';

import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import { useAuthStore } from '@/store/auth';
import AccessDeniedModal from '@/components/AccessDeniedModal';
import Cookies from 'js-cookie';

type Subscription = {
  userId?: string;
  // Add other properties as needed based on your API response
};

function MyView() {
  const user = useAuthStore((state) => state.user);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const token = Cookies.get('refreshToken');
      try {
        setLoading(true); // start loading

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/membership/user/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: 'include',
          }
        );

        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // ✅ log raw response
        console.log('Subscription Raw Data:', JSON.stringify(data, null, 2));

        // ✅ update state
        setSubscription(data);
      } catch (error) {
        console.error('Error fetching subscription:', error);
      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchData();
  }, [user]);

  // ✅ log subscription only after state updates
  useEffect(() => {
    if (subscription) {
      console.log(
        'Subscription Raw Data final:',
        JSON.stringify(subscription, null, 2)
      );
    }
  }, [subscription]);

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
      <main>
        <Header />

        <h1 className="text-xl sm:text-2xl font-bold mb-4">My Subscriptions</h1>

        {loading ? (
          <div className="text-center text-sm sm:text-base text-gray-500">
            Loading subscriptions...
          </div>
        ) : Array.isArray(subscription) && subscription.length > 0 ? (
          subscription.map((sub) => {
            const isActive = sub.status === 'active';
            return (
              <div
                key={sub._id}
                className="p-3 mb-3 border rounded-lg shadow-sm bg-white sm:p-4 sm:mb-4"
              >
                <h2 className="text-sm sm:text-base font-semibold mb-1 truncate">
                  {sub.planId.name} ({sub.userId.fullName})
                </h2>
                <div className="flex flex-wrap text-xs sm:text-sm gap-1 sm:gap-2">
                  <span className="flex items-center gap-1">
                    <strong>Price:</strong> ₹{sub.planId.price}
                  </span>
                  <span className="flex items-center gap-1">
                    <strong>Duration:</strong> {sub.planId.durationInDays} days
                  </span>
                  <span className="flex items-center gap-1">
                    <strong>Payment:</strong> {sub.paymentStatus}
                  </span>
                </div>
                <p className="text-xs sm:text-sm mt-1 line-clamp-2">
                  {sub.planId.description}
                </p>
                <div className="flex flex-wrap justify-between items-center mt-2 text-xs sm:text-sm">
                  <div>
                    <p>
                      <strong>Start:</strong>{' '}
                      {new Date(sub.startDate).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>End:</strong>{' '}
                      {new Date(sub.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs font-medium ${
                      isActive ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  >
                    {sub.status.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-3 text-sm text-gray-500">
            No subscriptions found
          </div>
        )}
      </main>
    </div>
  );
}

export default MyView;
