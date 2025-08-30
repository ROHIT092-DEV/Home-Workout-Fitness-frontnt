'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useAuthStore } from '@/store/auth';
import { Delete, Edit, SubscriptIcon, View } from 'lucide-react';
import Header from '../Header';

interface IUser {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  phone?: string;
  // add other fields if needed
}

function UserManagement() {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) return;

    const fetchData = async () => {
      const token = Cookies.get('refreshToken');
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/users`,
          {
            headers: { Authorization: `Bearer ${token}` },
            credentials: 'include',
          }
        );

        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setUserList(result.data || []);
      } catch (error) {
        console.error('Error fetching UserList:', error);
        setUserList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  // Action handlers
  const handleEdit = (userId: string) => {
    console.log('Edit user', userId);
    // Navigate to edit page or open modal
  };

  const handleView = (userId: string) => {
    console.log('View user', userId);
    // Open view modal or navigate
  };

  const handleDelete = (userId: string) => {
    console.log('Delete user', userId);
    // Confirm & delete logic
  };

  const handleSubscription = (userId: string) => {
    console.log('Manage subscription for', userId);
    // Open subscription modal or navigate
  };

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
      <h1 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
        User Management
      </h1>

      {loading ? (
        <div className="text-center text-sm">Loading...</div>
      ) : userList.length === 0 ? (
        <p className="text-sm sm:text-base">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 text-xs sm:text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-2 sm:px-4 border-b border-gray-300 text-left">
                  ID
                </th>
                <th className="py-2 px-2 sm:px-4 border-b border-gray-300 text-left">
                  Name
                </th>
                <th className="py-2 px-2 sm:px-4 border-b border-gray-300 text-left">
                  Email
                </th>
                <th className="py-2 px-2 sm:px-4 border-b border-gray-300 text-left">
                  Role
                </th>
                <th className="py-2 px-2 sm:px-4 border-b border-gray-300 text-left">
                  Edit
                </th>
                <th className="py-2 px-2 sm:px-4 border-b border-gray-300 text-left">
                  View
                </th>
                <th className="py-2 px-2 sm:px-4 border-b border-gray-300 text-left">
                  Subscript
                </th>
                <th className="py-2 px-2 sm:px-4 border-b border-gray-300 text-left">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {userList.map((u: IUser) => (
                <tr key={u._id} className="hover:bg-gray-50">
                  <td className="py-2 px-2 sm:px-4 border-b border-gray-300 truncate max-w-[100px] text-indigo-600 font-semibold">
                    {u._id}
                  </td>
                  <td className="py-2 px-2 sm:px-4 border-b border-gray-300 truncate max-w-[120px] text-indigo-600">
                    {u.fullName}
                  </td>
                  <td className="py-2 px-2 sm:px-4 border-b border-gray-300 truncate max-w-[150px] text-indigo-600">
                    {u.email}
                  </td>
                  <td className="py-2 px-2 sm:px-4 border-b border-gray-300 text-green-600">
                    {u.role}
                  </td>

                  <td className="py-2 px-2 sm:px-4 border-b border-gray-300">
                    <button
                      onClick={() => handleEdit(u._id)}
                      className="p-1 hover:text-blue-600"
                    >
                      <Edit size={18} />
                    </button>
                  </td>
                  <td className="py-2 px-2 sm:px-4 border-b border-gray-300">
                    <button
                      onClick={() => handleView(u._id)}
                      className="p-1 hover:text-blue-600"
                    >
                      <View size={18} />
                    </button>
                  </td>
                  <td className="py-2 px-2 sm:px-4 border-b border-gray-300">
                    <button
                      onClick={() => handleSubscription(u._id)}
                      className="p-1 hover:text-blue-600"
                    >
                      <SubscriptIcon size={18} />
                    </button>
                  </td>
                  <td className="py-2 px-2 sm:px-4 border-b border-gray-300">
                    <button
                      onClick={() => handleDelete(u._id)}
                      className="p-1 hover:text-red-600"
                    >
                      <Delete size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserManagement;
