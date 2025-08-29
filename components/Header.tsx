'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Calendar,
  Dumbbell,
  Edit3,
  Home,
  LogOut,
  Menu,
  Phone,
  Users,
  X,
} from 'lucide-react';
import logo from '@/public/logo.png'; // replace with your logo
import { useAuthStore } from '@/store/auth';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  interface User {
    fullName: string;
    email: string;
    phone?: string;
    role: string;
    status: string;
    emailVerified: boolean;
    createdAt: string | number | Date;
    updatedAt: string | number | Date;
  }

  const [userDeatils, setUserDetails] = useState<User | null>(null);

  // const { user, logout } = useAuthStore();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.clearUser);

  const navLinks = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'Membership', href: '#plans', icon: Dumbbell },
    { label: 'Trainers', href: '#trainers', icon: Users },
    { label: 'My View', href: '/my-view', icon: Calendar },
    { label: 'Contact', href: '#contact', icon: Phone },
  ];

  console.log(`User Role is ` + user?.role);

  const initials = user?.fullName
    ? user.fullName
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'U';

  return (
    <header className=" inset-x-0 top-0 z-50 bg-white text-black border-b shadow-md">
      {/* Top Section: Logo and Login Button */}
      <div className="flex items-center justify-between px-2 md:px-6 py-2 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Optional Icon */}
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-fuchsia-500 text-white font-bold text-lg group-hover:scale-110 transition">
            FZ
          </div>

          {/* Text Logo */}
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="text-fuchsia-500">Fit</span>
            <span className="text-white">Zone</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-fuchsia-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Admin Button - visible on all screens */}
        {user && user.role === 'admin' && (
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-fuchsia-600 to-purple-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:from-fuchsia-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-1 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
            <span>Admin</span>
          </Link>
        )}

        {/* Login/Logout Button */}

        {user ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white font-bold shadow-md hover:opacity-90 transition"
            >
              {initials}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6"
                  >
                    {/* Close button */}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Header */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white text-xl font-bold shadow-md">
                        {initials}
                      </div>
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {user.fullName}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>

                    {/* Details */}
                    {/* Details */}
                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Full Name</span>
                        <span>{user.fullName}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Email</span>
                        <span>{user.email}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Phone</span>
                        <span>{user.phone || '—'}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Role</span>
                        <span className="capitalize">{user.role}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Status</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                            user.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {user.status}
                        </span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Email Verified</span>
                        <span>
                          {user.emailVerified ? (
                            <span className="text-green-600 font-semibold">
                              Yes
                            </span>
                          ) : (
                            <span className="text-red-600 font-semibold">
                              No
                            </span>
                          )}
                        </span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Created At</span>
                        <span>{new Date(user.createdAt).toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">Updated At</span>
                        <span>{new Date(user.updatedAt).toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex justify-between">
                      <button
                        onClick={() => console.log('Edit profile')}
                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition"
                      >
                        <Edit3 className="h-4 w-4" />
                        Edit Profile
                      </button>
                      <button
                        onClick={logout}
                        className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-500 transition"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-sm bg-gradient-to-r from-fuchsia-600 to-purple-700 px-5 py-2 text-sm font-semibold text-white shadow-md hover:from-fuchsia-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-1 transition-all"
          >
            {/* Dumbbell Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path d="M4 6h2v12H4V6zm14 0h2v12h-2V6zM9 4h2v16H9V4zm4 0h2v16h-2V4z" />
            </svg>

            <span>Sign in with FitZone</span>
          </Link>
        )}
      </div>

      {/* Bottom Section: Menu Options for Mobile */}
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-white  backdrop-blur border-t
       border shadow-lg"
      >
        <nav className="flex justify-around items-center py-2">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center text-xs transition-colors ${
                  active
                    ? 'text-fuchsia-400'
                    : 'text-black font-bold hover:text-fuchsia-300'
                }`}
              >
                <Icon className="h-5 w-5 mb-0.5" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
