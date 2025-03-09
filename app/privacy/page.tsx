import type { Metadata } from "next"
import Link from "next/link"
import PageHeader from "@/components/shared/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Very Good Marketing Co. LLC collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader title="Privacy Policy" description="How we collect, use, and protect your information" />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <div className="prose max-w-none">
                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                  <p className="text-sm text-gray-600">Last Updated: March 1, 2025</p>
                  <p className="text-sm text-gray-600 mt-2">
                    This Privacy Policy describes how Very Good Marketing Co. LLC ("we," "us," or "our") collects, uses,
                    and discloses your personal information when you visit our website or use our services.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-gray-900">Table of Contents</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#information-we-collect" className="text-blue-600 hover:underline">
                        1. Information We Collect
                      </a>
                    </li>
                    <li>
                      <a href="#how-we-use-information" className="text-blue-600 hover:underline">
                        2. How We Use Your Information
                      </a>
                    </li>
                    <li>
                      <a href="#information-sharing" className="text-blue-600 hover:underline">
                        3. Information Sharing and Disclosure
                      </a>
                    </li>
                    <li>
                      <a href="#data-security" className="text-blue-600 hover:underline">
                        4. Data Security
                      </a>
                    </li>
                    <li>
                      <a href="#data-retention" className="text-blue-600 hover:underline">
                        5. Data Retention
                      </a>
                    </li>
                    <li>
                      <a href="#your-rights" className="text-blue-600 hover:underline">
                        6. Your Rights and Choices
                      </a>
                    </li>
                    <li>
                      <a href="#cookies" className="text-blue-600 hover:underline">
                        7. Cookies and Similar Technologies
                      </a>
                    </li>
                    <li>
                      <a href="#children" className="text-blue-600 hover:underline">
                        8. Children's Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#changes" className="text-blue-600 hover:underline">
                        9. Changes to This Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-blue-600 hover:underline">
                        10. Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                <div id="information-we-collect" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Information We Collect</h2>

                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Personal Information</h3>
                  <p className="mb-4">We may collect the following types of personal information:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Contact Information:</strong> Name, email address, phone number, and business address.
                    </li>
                    <li>
                      <strong>Account Information:</strong> Username, password, and account preferences.
                    </li>
                    <li>
                      <strong>Business Information:</strong> Company name, industry, size, and business needs.
                    </li>
                    <li>
                      <strong>Payment Information:</strong> Credit card details, billing address, and transaction
                      history.
                    </li>
                    <li>
                      <strong>Communication Information:</strong> Messages sent through our contact forms, email
                      correspondence, and feedback.
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Usage and Technical Information</h3>
                  <p className="mb-4">
                    When you visit our website, we automatically collect certain information about your device and
                    usage, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Device Information:</strong> IP address, browser type and version, operating system, and
                      device type.
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and interaction
                      with our content.
                    </li>
                    <li>
                      <strong>Location Information:</strong> General location based on IP address.
                    </li>
                    <li>
                      <strong>Log Data:</strong> Server logs, error reports, and performance data.
                    </li>
                  </ul>
                </div>

                <div id="how-we-use-information" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">2. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect for various purposes, including:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Providing Services:</strong> To deliver the marketing services you request, manage your
                      account, and fulfill our contractual obligations.
                    </li>
                    <li>
                      <strong>Communication:</strong> To respond to your inquiries, provide customer support, and send
                      important notices and updates.
                    </li>
                    <li>
                      <strong>Service Improvement:</strong> To analyze usage patterns, troubleshoot issues, and enhance
                      the functionality and user experience of our website and services.
                    </li>
                    <li>
                      <strong>Personalization:</strong> To tailor content and recommendations based on your preferences
                      and needs.
                    </li>
                    <li>
                      <strong>Marketing:</strong> To send promotional materials, newsletters, and information about new
                      services that may interest you (with your consent where required by law).
                    </li>
                    <li>
                      <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal
                      processes.
                    </li>
                    <li>
                      <strong>Security:</strong> To protect our website, services, users, and business from fraud,
                      unauthorized access, and other security threats.
                    </li>
                  </ul>
                </div>

                <div id="information-sharing" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Information Sharing and Disclosure</h2>
                  <p className="mb-4">We may share your information with the following categories of recipients:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Service Providers:</strong> Third-party vendors and contractors who perform services on
                      our behalf, such as hosting, data analysis, payment processing, and customer service.
                    </li>
                    <li>
                      <strong>Business Partners:</strong> Companies we partner with to offer integrated services or
                      joint marketing campaigns, with your consent where required.
                    </li>
                    <li>
                      <strong>Legal Authorities:</strong> Law enforcement agencies, courts, regulators, or other
                      government authorities when required by law or to protect our rights.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or
                      sale of assets, where your information may be transferred as a business asset.
                    </li>
                  </ul>
                  <p className="mb-4">
                    We do not sell your personal information to third parties for their own marketing purposes.
                  </p>
                </div>

                <div id="data-security" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information
                    against unauthorized access, accidental loss, alteration, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and vulnerability testing</li>
                    <li>Access controls and authentication procedures</li>
                    <li>Employee training on data protection and security practices</li>
                    <li>Secure network architecture and monitoring</li>
                  </ul>
                  <p className="mb-4">
                    While we strive to protect your information, no security system is impenetrable. We cannot guarantee
                    the absolute security of your data transmitted over the internet.
                  </p>
                </div>

                <div id="data-retention" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Retention</h2>
                  <p className="mb-4">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in
                    this Privacy Policy, unless a longer retention period is required or permitted by law. The criteria
                    used to determine our retention periods include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>The duration of our contractual relationship with you</li>
                    <li>Legal obligations to retain data for certain periods</li>
                    <li>Statute of limitations under applicable law</li>
                    <li>Ongoing business needs, such as maintaining financial records</li>
                  </ul>
                  <p className="mb-4">
                    When personal information is no longer needed, we securely delete or anonymize it.
                  </p>
                </div>

                <div id="your-rights" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Your Rights and Choices</h2>
                  <p className="mb-4">
                    Depending on your location, you may have certain rights regarding your personal information,
                    including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Access:</strong> Request a copy of the personal information we hold about you.
                    </li>
                    <li>
                      <strong>Correction:</strong> Request correction of inaccurate or incomplete information.
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your personal information in certain circumstances.
                    </li>
                    <li>
                      <strong>Restriction:</strong> Request that we temporarily or permanently stop processing your
                      personal information.
                    </li>
                    <li>
                      <strong>Data Portability:</strong> Request a copy of your data in a structured, commonly used, and
                      machine-readable format.
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing of your personal information for certain
                      purposes.
                    </li>
                    <li>
                      <strong>Withdrawal of Consent:</strong> Withdraw consent previously provided for the processing of
                      your information.
                    </li>
                  </ul>
                  <p className="mb-4">
                    To exercise these rights, please contact us using the information provided in the "Contact Us"
                    section. We will respond to your request within the timeframe required by applicable law.
                  </p>
                </div>

                <div id="cookies" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Cookies and Similar Technologies</h2>
                  <p className="mb-4">
                    Our website uses cookies and similar technologies to enhance your browsing experience, analyze
                    website traffic, and personalize content. Cookies are small text files stored on your device that
                    help us recognize you and remember certain information.
                  </p>
                  <p className="mb-4">We use the following types of cookies:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Essential Cookies:</strong> Necessary for the website to function properly.
                    </li>
                    <li>
                      <strong>Analytical/Performance Cookies:</strong> Help us understand how visitors interact with our
                      website.
                    </li>
                    <li>
                      <strong>Functionality Cookies:</strong> Remember your preferences and settings.
                    </li>
                    <li>
                      <strong>Targeting/Advertising Cookies:</strong> Used to deliver relevant advertisements and track
                      campaign performance.
                    </li>
                  </ul>
                  <p className="mb-4">
                    You can manage your cookie preferences through your browser settings. However, disabling certain
                    cookies may affect the functionality of our website.
                  </p>
                </div>

                <div id="children" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Children's Privacy</h2>
                  <p className="mb-4">
                    Our services are not directed to individuals under the age of 16. We do not knowingly collect
                    personal information from children. If you believe we have inadvertently collected information from
                    a child, please contact us immediately, and we will take steps to delete the information.
                  </p>
                </div>

                <div id="changes" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Changes to This Privacy Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                    requirements. We will notify you of any material changes by posting the updated policy on our
                    website with a new "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>

                <div id="contact" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data
                    practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>Very Good Marketing Co. LLC</strong>
                    </p>
                    <p>123 Marketing Street</p>
                    <p>Business City, ST 12345</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:privacy@verygoodmarketing.com" className="text-blue-600 hover:underline">
                        privacy@verygoodmarketing.com
                      </a>
                    </p>
                    <p>Phone: (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/terms" className="text-blue-600 hover:underline">
              View our Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

