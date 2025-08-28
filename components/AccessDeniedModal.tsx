'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function AccessDeniedModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
      >
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
          <Lock className="h-8 w-8" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          You do not have permission to view this page. <br />
          Please login to continue.
        </p>

        {/* Button */}
        <Link
          href="/login"
          className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Go to Login
        </Link>
      </motion.div>
    </div>
  );
}
