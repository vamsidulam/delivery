import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DataDeletion() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    description: '',
    agreed: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is frontend-only, we just show the email contact info
    alert('Thank you for your request. Please submit your deletion request via email to: vamsidulam11@gmail.com');
  };

  return (
    <div className="flex-1 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">User Data Deletion</h1>
        <p className="text-gray-600 mb-8">Request deletion of your DeliveryBusiness data</p>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            Users can request deletion of personal information associated with their DeliveryBusiness account or interactions. Please complete the form below or contact us directly via email.
          </p>

          {/* Deletion Request Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="+1234567890"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description / Additional Information
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Please provide any additional details about your deletion request..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreed"
                required
                className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                checked={formData.agreed}
                onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
              />
              <label htmlFor="agreed" className="ml-3 text-sm text-gray-700">
                I understand that requesting deletion may remove information associated with my account or interactions where legally permitted.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Submit Deletion Request
            </button>
          </form>

          {/* Email Contact Info */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Note:</strong> Deletion requests can currently be submitted by contacting us directly via email:
            </p>
            <a
              href="mailto:vamsidulam11@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              vamsidulam11@gmail.com
            </a>
          </div>
        </div>

        {/* What Happens Section */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What happens after a request?</h2>
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                1
              </span>
              <p className="text-gray-700 pt-1">We review the request.</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                2
              </span>
              <p className="text-gray-700 pt-1">We verify the request where necessary.</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                3
              </span>
              <p className="text-gray-700 pt-1">We identify the information associated with the request.</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                4
              </span>
              <p className="text-gray-700 pt-1">
                We delete eligible information in accordance with applicable requirements.
              </p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4">
                5
              </span>
              <p className="text-gray-700 pt-1">We communicate the result to the requester.</p>
            </li>
          </ol>
        </div>

        {/* Back to Privacy Policy */}
        <div className="mt-8 text-center">
          <Link
            to="/privacy-policy"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            ← Back to Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
