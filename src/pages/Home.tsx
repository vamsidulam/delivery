import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            DeliveryBusiness
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-4">
            Simple food ordering, powered by WhatsApp.
          </p>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            DeliveryBusiness helps customers discover food, place orders, and communicate with businesses through convenient digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:vamsidulam11@gmail.com"
              className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              Contact Us
            </a>
            <Link
              to="/privacy-policy"
              className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors shadow-md border border-primary"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Ordering</h3>
              <p className="text-gray-600">
                Customers can conveniently interact with businesses and place food orders.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Communication</h3>
              <p className="text-gray-600">
                Connect with customers through WhatsApp for conversations, order updates, and support.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Simple Experience</h3>
              <p className="text-gray-600">
                Designed to make food ordering and customer communication straightforward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
