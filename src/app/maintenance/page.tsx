'use client';

import Link from 'next/link';

export default function Maintenance() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Building Maintenance & Fees</h1>

        {/* Service Maintenance Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Maintenance Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Regular Maintenance</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Weekly cleaning of common areas</li>
                <li>Monthly elevator maintenance</li>
                <li>Quarterly fire safety inspection</li>
                <li>Bi-annual HVAC system service</li>
                <li>Annual building inspection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Emergency Services</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>24/7 emergency plumbing</li>
                <li>Emergency electrical services</li>
                <li>After-hours security response</li>
                <li>Emergency locksmith services</li>
                <img src="src/app/maintenance/documents/Bamboo.png" alt="wallpaper" />
              </ul>
            </div>
          </div>
        </div>

        {/* Annual Fees Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Annual Fees & Documents</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Current Fee Structure</h3>
              <p className="text-gray-600 mb-4">
                The annual strata fees are determined based on unit entitlements and building requirements.
                Please refer to the detailed fee structure document below.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-700 mb-2">Important Documents</h4>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="/docs/annual-fees-2024.pdf" 
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                      target="_blank"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                      </svg>
                      Annual Fee Structure 2024
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/docs/maintenance-schedule.pdf"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                      target="_blank"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
                      </svg>
                      Maintenance Schedule 2024
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fee Payment Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">Payment Methods</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Direct Debit</li>
                    <li>Bank Transfer</li>
                    <li>Credit Card</li>
                    <li>BPAY</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-2">Payment Schedule</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Quarterly payments</li>
                    <li>Annual payment (5% discount)</li>
                    <li>Monthly installments available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Assistance?</h2>
          <p className="text-gray-600 mb-4">
            For any questions regarding maintenance services or fee payments, please contact our building manager:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-gray-700"><strong>Building Manager:</strong> John Smith</p>
            <p className="text-gray-700"><strong>Email:</strong> manager@kienbuilding.com</p>
            <p className="text-gray-700"><strong>Phone:</strong> (02) 1234 5678</p>
          </div>
        </div>
      </div>
    </div>
  );
} 