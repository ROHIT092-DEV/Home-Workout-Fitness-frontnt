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
    <section className="relative overflow-hidden bg-[#0b0f14] text-white">
      {/* subtle gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#0b0f14] via-[#111827] to-[#0b0f14]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:flex lg:items-center lg:justify-between">
        {/* left copy */}
        <div className="max-w-2xl space-y-6">
          <motion.h1
            {...fadeUp}
            className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            Build a{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Stronger You
            </span>
            .
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="max-w-xl text-lg text-gray-300"
          >
            World-class trainers, modern equipment, and tailored fitness
            programs designed to help you push limits and achieve results.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#join"
              className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Start Free Trial
            </a>
            <a
              href="#plans"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-200 hover:bg-white/10 transition-all"
            >
              View Plans
            </a>
          </motion.div>

          {/* trust signals */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center gap-6 text-sm text-gray-400"
          >
            <div>
              <div className="text-2xl font-bold text-white">1.2k+</div>
              <div>Active Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">150+</div>
              <div>Classes / Month</div>
            </div>
          </motion.div>
        </div>

        {/* right hero visual */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-12 lg:mt-0 lg:ml-12 lg:w-1/2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1920&auto=format&fit=crop"
              alt="Gym training session"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
