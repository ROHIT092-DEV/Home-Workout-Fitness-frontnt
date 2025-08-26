'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-900 font-sans">
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 pt-28">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Transform Your Fitness Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          Join thousands of members achieving their health goals with our
          world-class trainers, modern facilities, and personalized plans.
        </p>
        <p className="text-md md:text-lg text-gray-300 max-w-3xl mb-8">
          Whether you are a beginner or a seasoned athlete, we have something
          for everyone. Explore our wide range of classes, connect with
          professional trainers, and take the first step towards a healthier
          you.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://example.com/get-started"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white text-yellow-600 font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Get Started
          </a>
          <a
            href="https://example.com/view-plans"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-yellow-600 transition shadow-lg"
          >
            View Plans
          </a>
        </div>
      </section>

      {/* Membership Plans */}
      <section
        id="plans"
        className="py-20 bg-gradient-to-b from-yellow-50 to-yellow-100"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-yellow-700">
            Membership Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Basic', 'Standard', 'Premium'].map((plan, i) => (
              <div
                key={plan}
                className="border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl p-8 text-center transition bg-white"
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">
                  {plan}
                </h3>
                <p className="text-gray-600 mb-6">
                  Perfect for {plan.toLowerCase()} users
                </p>
                <p className="text-3xl font-extrabold mb-6 text-yellow-700">
                  ${i * 20 + 29}/mo
                </p>
                <button className="w-full px-4 py-3 rounded-full bg-yellow-600 text-white hover:bg-yellow-700 transition shadow-md">
                  Choose {plan}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Meet Our Trainers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex',
                role: 'Strength & Conditioning',
                img: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?&w=400&q=80',
              },
              {
                name: 'Sarah',
                role: 'Yoga & Wellness',
                img: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwdHJhaW5lcnxlbnwwfHwwfHx8MA%3D%3D',
              },
              {
                name: 'John',
                role: 'Personal Trainer',
                img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?&w=400&q=80',
              },
            ].map((trainer) => (
              <div
                key={trainer.name}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-6"
              >
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={trainer.img}
                    alt={trainer.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold">{trainer.name}</h3>
                <p className="text-gray-600">{trainer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-yellow-100 to-yellow-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-yellow-800">
            What Our Members Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((t) => (
              <div
                key={t}
                className="bg-yellow-50 border border-gray-200 rounded-2xl shadow-sm p-6"
              >
                <p className="text-gray-700 mb-4">
                  “This gym completely changed my life! Trainers are world-class
                  and the environment is motivating.”
                </p>
                <div className="flex justify-center text-yellow-400 mb-2 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="font-semibold">Happy Member</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            ></textarea>
            <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-900 text-gray-300 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">FitLife</h3>
            <p className="text-gray-400">Your fitness journey starts here.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h4>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <p>Email: info@fitlife.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-10 text-sm">
          © {new Date().getFullYear()} FitLife. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
