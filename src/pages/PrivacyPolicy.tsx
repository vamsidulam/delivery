import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="flex-1 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: August 8, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              DeliveryBusiness respects user privacy and is committed to protecting personal information. This Privacy Policy describes how information may be collected, used, stored, and protected when users interact with our service.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Information collected may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Name</li>
              <li>Phone number</li>
              <li>WhatsApp account information necessary for communication</li>
              <li>Messages sent to the service</li>
              <li>Order-related information</li>
              <li>Technical information required to operate the service</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We only collect information that is necessary to provide our services.
            </p>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Information may be used to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Process and manage food orders</li>
              <li>Respond to customer messages</li>
              <li>Provide customer support</li>
              <li>Send order-related communications</li>
              <li>Improve the service</li>
              <li>Maintain security and prevent abuse</li>
            </ul>
          </section>

          {/* WhatsApp Communications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. WhatsApp Communications</h2>
            <p className="text-gray-700 leading-relaxed">
              Users may communicate with DeliveryBusiness through WhatsApp. WhatsApp and Meta process communications according to their own privacy policies. We encourage users to review WhatsApp's privacy policy to understand how their data is handled by those platforms.
            </p>
          </section>

          {/* AI-Assisted Responses */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. AI-Assisted Responses</h2>
            <p className="text-gray-700 leading-relaxed">
              DeliveryBusiness may use automated or AI-assisted systems to help process customer messages and provide responses. These systems are designed to improve response times and service quality while maintaining user privacy.
            </p>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              Information may be shared with service providers only when necessary to operate the service, such as hosting, messaging, AI, payment, or infrastructure providers. We do not sell personal information to third parties.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We use reasonable technical and organizational measures to protect information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is completely secure.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              Information is retained only for as long as reasonably necessary for the purposes described in this policy or as required by applicable law. Users may request deletion of their information as described below.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. User Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              Users may request access to, correction of, or deletion of their personal information where applicable under law. To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              The service may use third-party infrastructure and communication providers. These providers have their own privacy policies that govern how they handle data. We encourage users to review the privacy policies of any third-party services they interact with.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              The service is not intentionally designed to collect personal information from children in violation of applicable laws. If we become aware that we have inadvertently collected information from a child, we will take steps to delete it.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy may be updated from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:
            </p>
            <p className="text-primary font-medium mt-2">
              <a href="mailto:vamsidulam11@gmail.com" className="hover:underline">
                vamsidulam11@gmail.com
              </a>
            </p>
          </section>
        </div>

        {/* Data Deletion CTA */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Data Deletion</h3>
          <p className="text-gray-700 mb-4">
            To request deletion of your personal information, visit our User Data Deletion page.
          </p>
          <Link
            to="/data-deletion"
            className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Request Data Deletion →
          </Link>
        </div>
      </div>
    </div>
  );
}
