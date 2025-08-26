'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-500 via-indigo-600 to-orange-500 text-white">
      {/* decorative glow layers */}
      <div
        aria-hidden
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-fuchsia-400/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-400/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32 lg:flex lg:items-center lg:justify-between">
        {/* LEFT COPY */}
        <div className="max-w-2xl space-y-6">
          <motion.h1
            {...fadeUp}
            className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            Your{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              Transformation
            </span>{' '}
            Starts Here
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="max-w-xl text-lg text-gray-100"
          >
            Join our community of fitness enthusiasts. With certified trainers,
            top-tier equipment, and programs designed for all levels, we’re here
            to help you crush your goals and build a stronger, healthier you.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#join"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Start Your Journey
            </a>
            <a
              href="#plans"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all shadow-sm"
            >
              Explore Memberships
            </a>
          </motion.div>

          {/* TRUST / STATS */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-10 grid grid-cols-3 gap-6 text-center sm:max-w-md"
          >
            <div>
              <div className="text-2xl font-bold text-yellow-300">1.2k+</div>
              <div className="text-sm text-gray-100">Active Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">20+</div>
              <div className="text-sm text-gray-100">Expert Trainers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">10+ yrs</div>
              <div className="text-sm text-gray-100">Experience</div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-12 lg:mt-0 lg:ml-12 lg:w-1/2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1920&auto=format&fit=crop"
              alt="Personal training at the gym"
              fill
              className="object-cover"
              priority
            />
            {/* overlay fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {/* motivation text overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xl font-bold">“Stronger Every Day”</p>
              <p className="text-sm text-gray-200">— Our Gym Philosophy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
