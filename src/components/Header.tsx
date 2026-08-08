import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary">
            DeliveryBusiness
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/privacy-policy" className="text-gray-700 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/data-deletion" className="text-gray-700 hover:text-primary transition-colors">
              Data Deletion
            </Link>
            <a
              href="mailto:vamsidulam11@gmail.com"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/privacy-policy"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              to="/data-deletion"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Data Deletion
            </Link>
            <a
              href="mailto:vamsidulam11@gmail.com"
              className="block px-3 py-2 rounded-md bg-primary text-white hover:bg-blue-700 transition-colors text-center"
            >
              Contact Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
