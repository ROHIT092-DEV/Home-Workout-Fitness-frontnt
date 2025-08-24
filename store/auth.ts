// store/auth.ts
'use client';
import { create } from 'zustand';
import Cookies from 'js-cookie';

interface User {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  status: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  refreshToken: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  hydrateUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  hydrateUser: async () => {
    try {
      const token = Cookies.get('refreshToken');

      console.log(token)
      if (!token) return;

      // call backend with refreshToken to fetch user details
      const res = await fetch('http://localhost:5001/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
      });

      if (!res.ok) return;
      const data = await res.json();

     console.log("New data is", data.user);

      set({ user: data.user });
    } catch (err) {
      console.error('Hydrate failed', err);
    }
  },
}));
