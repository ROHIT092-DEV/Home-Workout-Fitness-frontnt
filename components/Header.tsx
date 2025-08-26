'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Calendar, Dumbbell, Home, Menu, Phone, Users, X } from 'lucide-react';
import logo from '@/public/logo.png'; // replace with your logo
import { useAuthStore } from '@/store/auth';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // const { user, logout } = useAuthStore();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.clearUser);

  const navLinks = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'Membership', href: '#plans', icon: Dumbbell },
    { label: 'Trainers', href: '#trainers', icon: Users },
    { label: 'Classes', href: '#classes', icon: Calendar },
    { label: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0b0f14] text-white shadow-md">
      {/* Top Section: Logo and Login Button */}
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-fuchsia-500">
            Fit<span className="text-white">Zone</span>
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

        {/* Login/Logout Button */}
        {user ? (
          <div className="flex items-center gap-3">
            {/* email */}
            <span className="text-sm font-medium text-gray-200 bg-white/5 px-3 py-1 rounded-lg">
              {user.email}
            </span>

            {/* logout button */}
            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:from-gray-700 hover:to-gray-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0078D4] focus:ring-offset-1 transition-all"
          >
            {/* Microsoft logo */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
              <circle cx="5" cy="5" r="4" fill="#FF6B6B" />
              <circle cx="13" cy="5" r="4" fill="#4ECDC4" />
              <circle cx="5" cy="13" r="4" fill="#FFD93D" />
              <circle cx="13" cy="13" r="4" fill="#1A535C" />
            </svg>

            <span>Sign in With FitZone</span>
          </Link>
        )}
      </div>

      {/* Bottom Section: Menu Options for Mobile */}
      <div
        className="lg:hidden fixed inset-x-0 bottom-0 bg-[#0b0f14]/95 backdrop-blur border-t
       border-white/10 shadow-lg"
      >
        <nav className="flex justify-around items-center py-4">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center text-xs transition-colors ${
                  active
                    ? 'text-fuchsia-400'
                    : 'text-white font-bold hover:text-fuchsia-300'
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
