import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-2">DeliveryBusiness</h3>
            <p className="text-gray-600 text-sm">
              Simple digital ordering and customer communication.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/data-deletion" className="text-gray-600 hover:text-primary text-sm transition-colors">
                  User Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <a
              href="mailto:vamsidulam11@gmail.com"
              className="text-gray-600 hover:text-primary text-sm transition-colors"
            >
              vamsidulam11@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © 2026 DeliveryBusiness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
