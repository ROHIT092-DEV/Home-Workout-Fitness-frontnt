'use client';

import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 text-gray-900 font-sans">
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our <span className="text-orange-500">Impact</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all bg-white">
              <div className="flex justify-center mb-3">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl font-bold">
                  💪
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900">5k+</h2>
              <p className="mt-2 text-gray-600 text-sm">Happy Members</p>
            </div>

            <div className="p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all bg-white">
              <div className="flex justify-center mb-3">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl font-bold">
                  🏋️
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900">3+</h2>
              <p className="mt-2 text-gray-600 text-sm">Expert Trainers</p>
            </div>

            <div className="p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all bg-white">
              <div className="flex justify-center mb-3">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl font-bold">
                  ⏳
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900">2+</h2>
              <p className="mt-2 text-gray-600 text-sm">Years Experience</p>
            </div>

            <div className="p-6 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all bg-white">
              <div className="flex justify-center mb-3">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl font-bold">
                  ⭐
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900">10+</h2>
              <p className="mt-2 text-gray-600 text-sm">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
              Where <span className="text-orange-500">Fitness</span> Meets
              Excellence
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              For over{' '}
              <span className="font-semibold text-gray-900">3 years</span>,
              PowerFit has been the premier destination for fitness enthusiasts
              seeking to achieve their goals. Our{' '}
              <span className="text-orange-500">state-of-the-art facility</span>
              , expert trainers, and supportive community create the perfect
              environment for transformation.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                'Certified Trainers',
                'Modern Equipment',
                '24/6 Access',
                'Community Support',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-xl shadow-md px-4 py-3 hover:shadow-lg transition w-[calc(50%-0.5rem)]"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-gray-800 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=900&q=80"
              alt="About PowerFit"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-md px-6 py-4">
              <h3 className="text-2xl font-bold text-orange-500">3+</h3>
              <p className="text-gray-600 text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Tailored Programs for Every Goal
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you’re a beginner or an experienced athlete, our
            expert-designed programs are built to help you unlock your
            potential.
          </p>

          {/* Program Grid */}
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="p-8 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">
                💪
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Strength Training
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Trainging by Expert</li>
                <li>• Group Training</li>
                <li>• Progressive Programs</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">
                🏃
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Cardio Fitness
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• HIIT Classes</li>
                <li>• Endurance Training</li>
                <li>• Fat Burning</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">
                🏋️
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Functional Training
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Mobility Work</li>
                <li>• Core Strength</li>
                <li>• Athletic Performance</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="p-8 bg-gradient-to-b from-orange-50 to-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">
                🧘
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                Group Classes
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Yoga & Pilates</li>
                <li>• Competetion</li>
                <li>• Running</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Membership Plans</h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple, transparent pricing. Reach out to our Owner team to get
            started.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Monthly Plan */}
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-orange-500">1 Month</h3>
              <p className="mt-4 text-3xl font-bold text-gray-800">₹500</p>
              <p className="mt-2 text-gray-600">
                Perfect for short-term commitment
              </p>
            </div>

            {/* 3 Months Plan */}
            <div className="p-8 bg-white rounded-2xl shadow-lg border-2 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500">3 Months</h3>
              <p className="mt-4 text-3xl font-bold text-gray-800">₹1200</p>
              <p className="mt-2 text-gray-600">
                Save more with a quarterly plan
              </p>
            </div>

            {/* 6 Months Plan */}
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-orange-500">6 Months</h3>
              <p className="mt-4 text-3xl font-bold text-gray-800">₹2500</p>
              <p className="mt-2 text-gray-600">
                Best value for long-term fitness
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-lg font-semibold text-gray-700">
              💬 For enrollment & payments, please contact our admin team at the
              front desk.
            </p>
            <p className="text-md text-gray-500 mt-2">
              No online payments available at the moment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Contact us today for a free consultation and tour of our facility.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Visit */}
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <span className="bg-orange-100 p-4 rounded-full">📍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
              <p className="mt-4 text-gray-600">
                Barahi Kala
                <br />
                Barahi Newada Varanasi 221207
              </p>
            </div>

            {/* Call */}
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <span className="bg-orange-100 p-4 rounded-full">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
              <p className="mt-4 text-gray-600">
                +91 7071853247
                <br />
                Mon-Sat: 5AM - 8PM
              </p>
            </div>

            {/* Email */}
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="flex justify-center mb-4">
                <span className="bg-orange-100 p-4 rounded-full">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
              <p className="mt-4 text-gray-600">
                prohit.3417@gmail.com
                <br />
                fitzone@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="mailto:info@powerfit.com"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md transition"
            >
              Contact Admin
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold">PowerFit</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Transform your body, transform your life. Join the PowerFit
              community today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Programs
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Membership
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Barahi Kala</li>
              <li>Barahi Newada Varansi</li>
              <li>+91 7071853247</li>
              <li className="hover:text-white cursor-pointer transition">
                fitzone@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PowerFit. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
