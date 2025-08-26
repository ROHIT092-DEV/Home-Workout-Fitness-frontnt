'use client';

import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: 'url(/public/gym-background.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Unleash Your <span className="text-orange-500">Inner Strength</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl">
            Join thousands of members who’ve transformed their lives with our
            expert trainers, state-of-the-art equipment, and supportive
            community.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition">
              Start Your Journey
            </button>
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-gray-300 shadow-md focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="hover:scale-105 transition-transform">
            <h2 className="text-3xl font-bold text-orange-500">5,000+</h2>
            <p className="text-gray-600">Happy Members</p>
          </div>
          <div className="hover:scale-105 transition-transform">
            <h2 className="text-3xl font-bold text-orange-500">50+</h2>
            <p className="text-gray-600">Expert Trainers</p>
          </div>
          <div className="hover:scale-105 transition-transform">
            <h2 className="text-3xl font-bold text-orange-500">15+</h2>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="hover:scale-105 transition-transform">
            <h2 className="text-3xl font-bold text-orange-500">1,000+</h2>
            <p className="text-gray-600">Success Stories</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Where Fitness Meets Excellence</h2>
          <p className="mt-4 text-lg text-gray-600">
            For over 15 years, PowerFit has been the premier destination for
            fitness enthusiasts seeking to achieve their goals. Our
            state-of-the-art facility, expert trainers, and supportive community
            create the perfect environment for transformation.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <p className="text-orange-500">Certified Trainers</p>
            <p className="text-orange-500">Modern Equipment</p>
            <p className="text-orange-500">24/7 Access</p>
            <p className="text-orange-500">Community Support</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Tailored Programs for Every Goal
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you’re a beginner or an experienced athlete, we have the
            perfect program to help you reach your fitness goals.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Strength Training</h3>
              <ul className="mt-4 text-gray-600">
                <li>Personal Training</li>
                <li>Group Classes</li>
                <li>Progressive Programs</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Cardio Fitness</h3>
              <ul className="mt-4 text-gray-600">
                <li>HIIT Classes</li>
                <li>Endurance Training</li>
                <li>Fat Burning</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Functional Training</h3>
              <ul className="mt-4 text-gray-600">
                <li>Mobility Work</li>
                <li>Core Strength</li>
                <li>Athletic Performance</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold">Group Classes</h3>
              <ul className="mt-4 text-gray-600">
                <li>Yoga & Pilates</li>
                <li>Dance Fitness</li>
                <li>Boxing Classes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Choose Your Path to Fitness</h2>
          <p className="mt-4 text-lg text-gray-600">
            Flexible membership options designed to fit your lifestyle and
            budget.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold">Basic</h3>
              <p className="mt-4 text-2xl font-bold">$29/month</p>
              <ul className="mt-4 text-gray-600">
                <li>Access to gym equipment</li>
                <li>Locker room access</li>
                <li>Basic fitness assessment</li>
                <li>Mobile app access</li>
              </ul>
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold">Premium</h3>
              <p className="mt-4 text-2xl font-bold">$59/month</p>
              <ul className="mt-4 text-gray-600">
                <li>All Basic features</li>
                <li>Unlimited group classes</li>
                <li>Personal training session</li>
                <li>Nutrition consultation</li>
                <li>Guest passes (2/month)</li>
              </ul>
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-bold">Elite</h3>
              <p className="mt-4 text-2xl font-bold">$99/month</p>
              <ul className="mt-4 text-gray-600">
                <li>All Premium features</li>
                <li>Unlimited personal training</li>
                <li>Priority booking</li>
                <li>Massage therapy</li>
                <li>Meal planning service</li>
              </ul>
              <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Contact us today for a free consultation and tour of our facility.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold">Visit Us</h3>
              <p className="mt-4 text-gray-600">
                123 Fitness Street
                <br />
                New York, NY 10001
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold">Call Us</h3>
              <p className="mt-4 text-gray-600">
                (555) 123-4567
                <br />
                Mon-Sun: 5AM-11PM
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <h3 className="text-xl font-bold">Email Us</h3>
              <p className="mt-4 text-gray-600">
                info@powerfit.com
                <br />
                support@powerfit.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-xl font-bold">PowerFit</h3>
            <p className="mt-4 text-gray-400">
              Transform your body, transform your life. Join the PowerFit
              community today.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Programs</li>
              <li>Membership</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="mt-4 text-gray-400">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>info@powerfit.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
