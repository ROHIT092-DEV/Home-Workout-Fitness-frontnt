'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Users, CreditCard, Settings } from 'lucide-react';

function AdminHeader() {
  const menus = [
    { name: 'Users Management', href: '/admin/users-management', icon: Users },
    {
      name: 'Subscription Management',
      href: '/admin/subscription-management',
      icon: CreditCard,
    },
    { name: 'Ui Management', href: '/admin/ui-management', icon: Settings },
  ];

  const pathname = usePathname();

  return (
    <div className="w-full border-b bg-white shadow-sm flex-col ">
      <header
        className="
          flex items-center gap-4 py-3 px-2
          overflow-x-auto scrollbar-hide
          md:justify-center md:gap-6 md:px-0
        "
      >
        {menus.map((menu) => {
          const isActive = pathname === menu.href;
          const Icon = menu.icon;
          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`flex items-center gap-2 shrink-0 relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md
              ${
                isActive
                  ? 'text-green-700 bg-green-100 shadow-sm'
                  : 'text-gray-600 hover:text-green-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={18} />
              <span>{menu.name}</span>
              {isActive && (
                <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-green-500 rounded-full"></span>
              )}
            </Link>
          );
        })}
      </header>
    </div>
  );
}

export default AdminHeader;
