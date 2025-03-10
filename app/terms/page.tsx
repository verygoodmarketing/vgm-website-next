import type { Metadata } from "next"
import Link from "next/link"
import PageHeader from "@/components/shared/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { fetchSiteSettings } from "@/lib/settings-actions"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing your use of Very Good Marketing Co. LLC services.",
}

export default async function TermsOfServicePage() {
  const settings = await fetchSiteSettings()
  return (
    <div>
      <PageHeader title="Terms of Service" description="The rules and guidelines for using our services" />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <div className="prose max-w-none">
                <div className="bg-gray-50 p-4 rounded-lg mb-8">
                  <p className="text-sm text-gray-600">Last Updated: March 1, 2025</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Please read these Terms of Service ("Terms") carefully before using the website and services offered
                    by Very Good Marketing Co. LLC.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 text-gray-900">Table of Contents</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#agreement" className="text-blue-600 hover:underline">
                        1. Agreement to Terms
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-blue-600 hover:underline">
                        2. Description of Services
                      </a>
                    </li>
                    <li>
                      <a href="#eligibility" className="text-blue-600 hover:underline">
                        3. Eligibility and Registration
                      </a>
                    </li>
                    <li>
                      <a href="#acceptable-use" className="text-blue-600 hover:underline">
                        4. Acceptable Use Policy
                      </a>
                    </li>
                    <li>
                      <a href="#intellectual-property" className="text-blue-600 hover:underline">
                        5. Intellectual Property Rights
                      </a>
                    </li>
                    <li>
                      <a href="#payment" className="text-blue-600 hover:underline">
                        6. Payment Terms
                      </a>
                    </li>
                    <li>
                      <a href="#termination" className="text-blue-600 hover:underline">
                        7. Termination
                      </a>
                    </li>
                    <li>
                      <a href="#disclaimers" className="text-blue-600 hover:underline">
                        8. Disclaimers and Limitations of Liability
                      </a>
                    </li>
                    <li>
                      <a href="#indemnification" className="text-blue-600 hover:underline">
                        9. Indemnification
                      </a>
                    </li>
                    <li>
                      <a href="#dispute-resolution" className="text-blue-600 hover:underline">
                        10. Dispute Resolution
                      </a>
                    </li>
                    <li>
                      <a href="#general" className="text-blue-600 hover:underline">
                        11. General Provisions
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-blue-600 hover:underline">
                        12. Contact Information
                      </a>
                    </li>
                  </ul>
                </div>

                <div id="agreement" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Agreement to Terms</h2>
                  <p className="mb-4">
                    By accessing or using the website, products, or services (collectively, the "Services") provided by
                    Very Good Marketing Co. LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms
                    of Service. If you do not agree to these Terms, you must not access or use our Services.
                  </p>
                  <p className="mb-4">
                    These Terms constitute a legally binding agreement between you and the Company regarding your use of
                    the Services. We may update these Terms from time to time. Your continued use of the Services after
                    any such changes constitutes your acceptance of the revised Terms.
                  </p>
                </div>

                <div id="services" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Description of Services</h2>
                  <p className="mb-4">
                    Very Good Marketing Co. LLC provides digital marketing services for small businesses, including but
                    not limited to website creation, Google search ads management, and social media advertising. The
                    specific services to be provided will be outlined in a separate service agreement or statement of
                    work.
                  </p>
                  <p className="mb-4">
                    We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with
                    or without notice. We will not be liable to you or any third party for any modification, suspension,
                    or discontinuation of the Services.
                  </p>
                </div>

                <div id="eligibility" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Eligibility and Registration</h2>
                  <p className="mb-4">
                    To use our Services, you must be at least 18 years old and have the legal capacity to enter into a
                    binding contract. If you are using the Services on behalf of a business entity, you represent and
                    warrant that you have the authority to bind that entity to these Terms.
                  </p>
                  <p className="mb-4">
                    When you register for an account or provide information to us, you agree to provide accurate,
                    current, and complete information. You are responsible for maintaining the confidentiality of your
                    account credentials and for all activities that occur under your account. You agree to notify us
                    immediately of any unauthorized use of your account.
                  </p>
                </div>

                <div id="acceptable-use" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Acceptable Use Policy</h2>
                  <p className="mb-4">
                    You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree
                    not to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      Use the Services in any way that violates any applicable federal, state, local, or international
                      law or regulation.
                    </li>
                    <li>Use the Services to transmit or send unsolicited commercial communications or "spam."</li>
                    <li>
                      Attempt to interfere with, compromise the system integrity or security, or decipher any
                      transmissions to or from the servers running the Services.
                    </li>
                    <li>
                      Upload, post, or otherwise transmit any material that contains viruses, trojan horses, worms, or
                      any other malicious or harmful code.
                    </li>
                    <li>
                      Impersonate or attempt to impersonate the Company, a Company employee, another user, or any other
                      person or entity.
                    </li>
                    <li>
                      Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services, or
                      which may harm the Company or users of the Services.
                    </li>
                    <li>
                      Use the Services to advertise or offer to sell goods and services for any illegal or fraudulent
                      purpose.
                    </li>
                  </ul>
                  <p className="mb-4">
                    We reserve the right to terminate or suspend your access to the Services immediately, without prior
                    notice or liability, for any reason, including if you breach these Terms.
                  </p>
                </div>

                <div id="intellectual-property" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Intellectual Property Rights</h2>
                  <p className="mb-4">
                    The Services and their entire contents, features, and functionality (including but not limited to
                    all information, software, text, displays, images, video, and audio, and the design, selection, and
                    arrangement thereof) are owned by the Company, its licensors, or other providers of such material
                    and are protected by United States and international copyright, trademark, patent, trade secret, and
                    other intellectual property or proprietary rights laws.
                  </p>
                  <p className="mb-4">
                    These Terms permit you to use the Services for your personal, non-commercial use only. You must not
                    reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                    republish, download, store, or transmit any of the material on our Services, except as follows:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      Your computer may temporarily store copies of such materials in RAM incidental to your accessing
                      and viewing those materials.
                    </li>
                    <li>
                      You may store files that are automatically cached by your Web browser for display enhancement
                      purposes.
                    </li>
                    <li>
                      You may print or download one copy of a reasonable number of pages of the website for your own
                      personal, non-commercial use and not for further reproduction, publication, or distribution.
                    </li>
                    <li>
                      If we provide social media features with certain content, you may take such actions as are enabled
                      by such features.
                    </li>
                  </ul>
                  <p className="mb-4">You must not:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Modify copies of any materials from the Services.</li>
                    <li>
                      Use any illustrations, photographs, video or audio sequences, or any graphics separately from the
                      accompanying text.
                    </li>
                    <li>
                      Delete or alter any copyright, trademark, or other proprietary rights notices from copies of
                      materials from the Services.
                    </li>
                  </ul>
                  <p className="mb-4">
                    If you provide any content to us, you grant us a non-exclusive, transferable, sub-licensable,
                    royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute,
                    publicly display, publicly perform, and otherwise exploit that content in connection with the
                    Services.
                  </p>
                </div>

                <div id="payment" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Payment Terms</h2>
                  <p className="mb-4">
                    Certain Services may require payment of fees. All fees are stated in U.S. dollars and do not include
                    any taxes, which are your responsibility. Payment must be made by the methods specified, and payment
                    terms will be as set forth in the applicable service agreement or statement of work.
                  </p>
                  <p className="mb-4">
                    For subscription-based services, you authorize us to charge the applicable recurring fees to your
                    designated payment method. If we are unable to charge your payment method, we may suspend or
                    terminate your access to the Services.
                  </p>
                  <p className="mb-4">
                    You agree to provide current, complete, and accurate billing information and to promptly update all
                    such information. You must notify us about any billing problems or discrepancies within 30 days
                    after they first appear on your invoice. If you do not bring them to our attention within 30 days,
                    you agree that you waive your right to dispute such problems or discrepancies.
                  </p>
                </div>

                <div id="termination" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Termination</h2>
                  <p className="mb-4">
                    We may terminate or suspend your access to the Services immediately, without prior notice or
                    liability, for any reason, including if you breach these Terms. Upon termination, your right to use
                    the Services will immediately cease.
                  </p>
                  <p className="mb-4">
                    You may terminate your account at any time by contacting us. Termination of your account may result
                    in the deletion of your profile information and any content or data you have provided.
                  </p>
                  <p className="mb-4">
                    All provisions of the Terms which by their nature should survive termination shall survive
                    termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity,
                    and limitations of liability.
                  </p>
                </div>

                <div id="disclaimers" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Disclaimers and Limitations of Liability</h2>
                  <p className="mb-4">
                    <strong>Disclaimer of Warranties:</strong> THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS
                    AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. THE COMPANY
                    DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p className="mb-4">
                    We do not warrant that the Services will be uninterrupted, timely, secure, or error-free, or that
                    any defects will be corrected. We do not warrant any specific results from the use of the Services.
                  </p>
                  <p className="mb-4">
                    <strong>Limitation of Liability:</strong> IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR
                    LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY
                    KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE,
                    THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE
                    DAMAGES.
                  </p>
                  <p className="mb-4">
                    THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE
                    LAW.
                  </p>
                </div>

                <div id="indemnification" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Indemnification</h2>
                  <p className="mb-4">
                    You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and
                    service providers, and its and their respective officers, directors, employees, contractors, agents,
                    licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages,
                    judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising
                    out of or relating to your violation of these Terms or your use of the Services.
                  </p>
                </div>

                <div id="dispute-resolution" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Dispute Resolution</h2>
                  <p className="mb-4">
                    <strong>Governing Law:</strong> These Terms and your use of the Services shall be governed by and
                    construed in accordance with the laws of the State of {settings.address?.state || "California"}, without giving effect to any choice
                    or conflict of law provision or rule.
                  </p>
                  <p className="mb-4">
                    <strong>Arbitration:</strong> Any dispute arising from or relating to these Terms or the Services
                    shall be resolved through binding arbitration in accordance with the American Arbitration
                    Association's rules. The arbitration shall be conducted in {settings.address ? `${settings.address.city}, ${settings.address.state}` : "Anytown, CA"}, and judgment on the
                    arbitration award may be entered in any court having jurisdiction.
                  </p>
                  <p className="mb-4">
                    <strong>Class Action Waiver:</strong> Any proceedings to resolve or litigate any dispute in any
                    forum will be conducted solely on an individual basis. Neither you nor we will seek to have any
                    dispute heard as a class action or in any other proceeding in which either party acts or proposes to
                    act in a representative capacity.
                  </p>
                  <p className="mb-4">
                    <strong>Exceptions:</strong> Nothing in this section will preclude either party from seeking
                    injunctive relief in a court of competent jurisdiction to prevent the actual or threatened
                    infringement, misappropriation, or violation of a party's copyrights, trademarks, trade secrets,
                    patents, misappropriation, or violation of a party's copyrights, trademarks, trade secrets, patents,
                    or other intellectual property rights.
                  </p>
                </div>

                <div id="general" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">11. General Provisions</h2>
                  <p className="mb-4">
                    <strong>Entire Agreement:</strong> These Terms, together with any other agreements or policies
                    referenced herein, constitute the entire agreement between you and the Company regarding the
                    Services and supersede all prior and contemporaneous understandings, agreements, representations,
                    and warranties.
                  </p>
                  <p className="mb-4">
                    <strong>Waiver:</strong> No waiver by the Company of any term or condition set out in these Terms
                    shall be deemed a further or continuing waiver of such term or condition or a waiver of any other
                    term or condition, and any failure of the Company to assert a right or provision under these Terms
                    shall not constitute a waiver of such right or provision.
                  </p>
                  <p className="mb-4">
                    <strong>Severability:</strong> If any provision of these Terms is held by a court or other tribunal
                    of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision
                    shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms
                    will continue in full force and effect.
                  </p>
                  <p className="mb-4">
                    <strong>Assignment:</strong> You may not assign or transfer these Terms, by operation of law or
                    otherwise, without the Company's prior written consent. The Company may freely assign or transfer
                    these Terms without restriction.
                  </p>
                  <p className="mb-4">
                    <strong>Force Majeure:</strong> The Company will not be liable or responsible for any failure to
                    perform, or delay in performance of, any of our obligations that is caused by events outside our
                    reasonable control.
                  </p>
                </div>

                <div id="contact" className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Contact Information</h2>
                  <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>
                      <strong>Very Good Marketing Co. LLC</strong>
                    </p>
                    {settings.address && (
                      <>
                        <p>{settings.address.street}</p>
                        <p>{settings.address.city}, {settings.address.state} {settings.address.zip}</p>
                      </>
                    )}
                    <p>
                      Email:{" "}
                      <a href={`mailto:${settings.email}`} className="text-blue-600 hover:underline">
                        {settings.email}
                      </a>
                    </p>
                    <p>Phone: <a href={settings.phone.href} className="text-blue-600 hover:underline">{settings.phone.display}</a></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link href="/privacy" className="text-blue-600 hover:underline">
              View our Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

