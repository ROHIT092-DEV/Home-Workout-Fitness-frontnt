'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f9f9ff] to-[#ffffff] pt-20 pb-24">
      {/* Main Hero */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Everyone <span className="text-blue-600">Trusted & Affordable</span>{' '}
          <br />
          Fitness Platform
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock your potential by signing up with Fitzone – The most affordable
          fitness solution.
        </p>
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition shadow-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Floating Conversation */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Student (left top) */}
          <div className="flex items-start gap-4">
            <Image
              src="https://images.unsplash.com/photo-1738523686534-7055df5858d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGd5bSUyMHN0dWRlbnQlMjBhc2t8ZW58MHx8MHx8fDA%3D"
              alt="Student"
              width={80}
              height={80}
              className="rounded-full border-4 border-gray-200 object-cover"
            />
            <div className="bg-white px-4 py-3 rounded-xl shadow-lg border max-w-xs">
              <p className="text-gray-800 font-medium text-sm">
                Rohit Sir, What is FItZone?
              </p>
            </div>
          </div>

          {/* Teacher (right bottom) */}
          <div className="flex items-end justify-end gap-4">
            <div className="bg-blue-700 text-white px-4 py-3 rounded-xl shadow-lg max-w-xs">
              <p className="font-medium text-sm">
                Ftzone is a modern fitness and training zone (gym) focused on
                strength, wellness, and transformation.
              </p>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1738523686578-f18348c8292b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwdGVhY2hlciUyMGFuc3dlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Teacher"
              width={80}
              height={80}
              className="rounded-full border-4 border-gray-200 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
