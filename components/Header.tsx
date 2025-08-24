'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/public/logo.png'; // replace with your logo
import { useAuthStore } from '@/store/auth';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuthStore();

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Membership', href: '#plans' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Classes', href: '#classes' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0b0f14] text-white shadow-md">
      {/* Top Section: Logo */}
      <div className="flex items-center justify-between px-6 py-3 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Gym Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
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

        {/* Mobile Menu Button */}

        {user ? (
          <div>{user.email}</div>
        ) : (
          <Link
            href={'/login'}
            className="p-2 rounded-md hover:bg-white/10 transition"
          >
            Login
          </Link>
        )}
      </div>

      {/* Bottom Section: Menu Options for Mobile */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 bg-[#0b0f14] border-t border-white/10">
        <nav className="flex justify-around py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:text-fuchsia-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
