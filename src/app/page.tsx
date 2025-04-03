'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/document/strata back ground.png"
            alt="Main Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
            Welcome to Kien Building
          </h1>
        </div>
      </div>

      {/* Building Information */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Our Building</h2>
            <p className="text-gray-600">
              Kien Building is a modern residential complex located in the heart of the city.
              We pride ourselves on maintaining high standards of living and community engagement.
            </p>
          </div>

          {/* Services Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• 24/7 Security</li>
              <li>• Maintenance Support</li>
              <li>• Community Events</li>
              <li>• Emergency Response</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Contact</h2>
            <p className="text-gray-600">
              Need assistance? Our management team is here to help.
              Contact us through our dedicated support channels.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* News & Updates */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Meeting</h3>
              <p className="text-gray-600">
                Join us for our upcoming annual general meeting to discuss building improvements
                and community initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Maintenance Schedule</h3>
              <p className="text-gray-600">
                Regular maintenance work will be conducted next week. Please check the schedule
                for any temporary service interruptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
