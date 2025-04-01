export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Kien Building</h1>

        {/* Building Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Building Overview</h2>
          <p className="text-gray-600">
            Kien Building is a modern residential complex located in the heart of Sydney.
            Our building features state-of-the-art amenities, secure access, and a vibrant community
            of residents. We are committed to maintaining high standards of living and ensuring
            the comfort and safety of all residents.
          </p>
        </div>

        {/* Strata Committee */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Strata Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
              <p className="text-gray-600">Chairperson</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">Sarah Johnson</h3>
              <p className="text-gray-600">Secretary</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-800">Michael Chen</h3>
              <p className="text-gray-600">Treasurer</p>
            </div>
          </div>
        </div>

        {/* Building Management */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Building Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Property Manager</h3>
              <p className="text-gray-600">
                Our dedicated property manager is responsible for the day-to-day operations
                of the building, including maintenance coordination, resident communications,
                and ensuring compliance with strata regulations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Maintenance Team</h3>
              <p className="text-gray-600">
                Our experienced maintenance team provides prompt and professional service
                for all building-related issues, from routine maintenance to emergency repairs.
              </p>
            </div>
          </div>
        </div>

        {/* Building Features */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Building Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Security</h3>
              <p className="text-gray-600">
                24/7 security personnel and modern surveillance systems ensure the safety
                of all residents and visitors.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Amenities</h3>
              <p className="text-gray-600">
                Residents enjoy access to a range of amenities including a gym, swimming pool,
                and community room.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Our building features energy-efficient systems and sustainable practices
                to minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 