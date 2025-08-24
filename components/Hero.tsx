"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const images = [
    {
      src:
        "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1920&auto=format&fit=crop",
      alt: "Man lifting dumbbells at the gym",
    },
    {
      src:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1920&auto=format&fit=crop",
      alt: "Woman doing push-ups on a mat",
    },
    {
      src:
        "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Barbell with weight plates in modern gym",
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="relative overflow-hidden bg-[#0b0f14] text-white">
      {/* glowing blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
        <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 sm:py-28 lg:grid-cols-12 lg:gap-12 lg:py-32">
        {/* left: copy */}
        <div className="lg:col-span-6 space-y-6">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              New — 7‑Day Free Pass
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            Transform your {" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Body & Mind
            </span>{" "}
            at Apex Gym
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-lg text-white/80"
          >
            Premium equipment, certified trainers, and science‑backed programs. Join thousands of members
            hitting their goals with flexible memberships and daily classes.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#join"
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20"
            >
              Start Free Trial
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#plans"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur"
            >
              View Plans
            </motion.a>
          </motion.div>

          {/* features */}
          <motion.ul
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 grid max-w-2xl grid-cols-2 gap-3 text-sm text-white/80 sm:grid-cols-4"
          >
            {[
              { icon: "🏋️‍♀️", label: "Certified Trainers" },
              { icon: "⏰", label: "24/7 Access" },
              { icon: "🛡️", label: "Safe & Sanitized" },
              { icon: "📈", label: "Personal Plans" },
            ].map((f) => (
              <li key={f.label} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <span className="text-lg">{f.icon}</span>
                <span>{f.label}</span>
              </li>
            ))}
          </motion.ul>

          {/* stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-2 flex flex-wrap gap-8 text-sm text-white/70"
          >
            <div>
              <div className="text-2xl font-bold text-white">1.2k+</div>
              <div>Active members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">150+</div>
              <div>Classes / month</div>
            </div>
          </motion.div>
        </div>

        {/* right: image collage */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* big left image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="col-span-1 row-span-2"
            >
              <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 600px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            {/* top-right */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 400px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            {/* bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 400px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
