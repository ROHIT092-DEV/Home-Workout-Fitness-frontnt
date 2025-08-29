'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { Activity, HistoryIcon } from 'lucide-react';

import { usePathname } from 'next/navigation';

function MyViewHeader() {
  const pathname = usePathname();

  interface LinkItem {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }

  const links: LinkItem[] = [
    {
      href: '/my-view/subscription-history',
      label: 'Subscription History',
      icon: HistoryIcon,
    },
    { href: '/activity', label: 'My Activity', icon: Activity },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-2 md:max-w-7xl mx-auto">
      {/* Back Button */}

      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center rounded-sm text-white p-2 bg-green-500 shadow-md transition-all hover:shadow-xl hover:scale-105 ${
              isActive
                ? 'border-b-4 border-blue-600'
                : 'border-b-4 border-transparent'
            }`}
          >
            {/* <Icon
              className={`w-8 h-8 mb-2 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              }`}
            /> */}
            <span
              className={`text-sm font-medium ${
                isActive ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default MyViewHeader;
