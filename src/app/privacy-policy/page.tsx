import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/store-data";

export const metadata: Metadata = {
  title: "Privacy Policy – That Coupon",
  description:
    "Read the That Coupon Privacy Policy to understand how we collect, use, and protect your personal information. Learn about cookies, third-party sharing, and your data rights.",
  openGraph: {
    title: "Privacy Policy – That Coupon",
    description:
      "Read the That Coupon Privacy Policy to understand how we collect, use, and protect your personal information.",
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
            <h1 className="text-3xl md:text-4xl font-black mb-3">
              Privacy Policy
            </h1>
            <p className="text-emerald-100 text-sm">
              Last updated: January 1, 2026
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              At {SITE_NAME}, your privacy is extremely important to us. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website{" "}
              <span className="text-emerald-700 font-medium">
                thatcoupon.com
              </span>{" "}
              (the &quot;Site&quot;). Please read this privacy policy carefully.
              By accessing or using the Site, you acknowledge that you have read,
              understood, and agree to be bound by the terms of this Privacy
              Policy. If you do not agree with the terms of this privacy policy,
              please do not access the Site.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect information about you in a variety of ways when you
              interact with our Site. The information we collect may include
              both personally identifiable information (PII) and
              non-personally identifiable information. Personally identifiable
              information is information that can be used to identify you
              individually, such as your name, email address, postal address,
              and phone number. Non-personally identifiable information includes
              anonymous usage data, general demographic information, and
              aggregated browsing behavior that cannot be traced back to any
              specific individual.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Specifically, we may collect the following types of information:
              personal details that you voluntarily provide when you subscribe to
              our newsletter, fill out a contact form, or participate in surveys
              or promotions; device and usage information including your IP
              address, browser type, operating system, device identifiers,
              access times, and pages viewed; and any information you choose to
              provide in user-generated content such as reviews, comments, or
              feedback submitted through our platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We want to be transparent about the fact that we do not require
              you to create an account or provide personal information to browse
              our coupon codes and deals. You can access and use all coupon
              codes on our Site without providing any personal data whatsoever.
              Personal information is only collected when you voluntarily choose
              to engage with features such as newsletter subscriptions or
              contact forms.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. We use the
              information we collect about you for the following purposes: to
              operate, maintain, and improve our Site and the services we offer;
              to send you newsletters, promotional communications, and deal
              alerts that you have opted in to receive; to respond to your
              comments, questions, and requests for customer support; to monitor
              and analyze trends, usage, and activities in connection with our
              Site; to detect, investigate, and prevent fraudulent transactions
              and other illegal activities; and to personalize and improve your
              experience on our Site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We will never sell your personal information to third parties. We
              may use aggregated, non-personally identifiable information for
              analytics, benchmarking, and reporting purposes to help us
              understand how visitors use our Site and where we can make
              improvements. This aggregated data does not contain any
              information that could be used to identify you as an individual.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Site to help customize the Site and
              improve your experience. Cookies are small text files that are
              stored on your device when you visit a website. They are widely
              used to make websites work more efficiently and to provide
              reporting information. We use both session cookies, which expire
              when you close your browser, and persistent cookies, which stay on
              your device until they expire or you delete them.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The cookies we use fall into the following categories: essential
              cookies that are necessary for the Site to function properly, such
              as maintaining your session preferences; analytics cookies that
              help us understand how visitors interact with our Site by
              collecting and reporting information anonymously; and advertising
              cookies that may be set through our Site by our advertising
              partners to build a profile of your interests and show you
              relevant advertisements on other websites.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You can control cookies through your browser settings and other
              tools. Most browsers allow you to refuse to accept cookies and to
              delete existing cookies. Please note that if you choose to block
              cookies, some features of our Site may not function as intended.
              You can learn more about managing cookies at{" "}
              <span className="text-emerald-700 font-medium">
                www.allaboutcookies.org
              </span>
              .
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              4. Third-Party Sharing and Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except in the following
              circumstances: we may share your information with trusted
              third-party service providers who assist us in operating our
              Site, conducting our business, or serving you, so long as those
              parties agree to keep this information confidential. These service
              providers may include analytics providers, email delivery services,
              and hosting providers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may also disclose your information when required to do so by
              law or in response to valid requests by public authorities; if we
              believe that disclosure is necessary or appropriate to protect the
              rights, property, or safety of {SITE_NAME}, our users, or the
              public; in connection with any merger, sale, acquisition, or
              disposition of all or a portion of our assets; or with your
              explicit consent, such as when you agree to let us share your
              information with a specific partner for a promotional purpose.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you click on a coupon code or deal link on our Site, you will
              be redirected to the third-party retailer&apos;s website. These
              third-party sites have their own independent privacy policies, and
              we are not responsible for their practices. We encourage you to
              read the privacy policies of every website you visit, especially
              when providing personal information or making a purchase.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              5. Affiliate Links and Advertising
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {SITE_NAME} participates in affiliate marketing programs, which
              means we may earn commissions when you click on coupon links and
              make purchases on our partner retailers&apos; websites. This is
              how we sustain our operations and continue providing free coupon
              codes to our users. When you click an outbound link on our Site,
              tracking cookies may be placed on your device by the affiliate
              network to attribute the sale to {SITE_NAME}.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These affiliate tracking cookies are governed by the privacy
              policies of the respective affiliate networks and retailers, not
              by our Privacy Policy. Our editorial content and coupon code
              recommendations are not influenced by our affiliate relationships.
              We feature coupon codes and deals based on their value to our
              users, and our verification process ensures that every listed code
              is tested and confirmed to be working regardless of the commission
              structure.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              6. Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use commercially reasonable administrative, technical, and
              physical security measures to help protect your personal
              information from unauthorized access, use, alteration, and
              disclosure. We use SSL/TLS encryption to protect data transmitted
              between your browser and our servers. Our servers are hosted in
              secure data centers with restricted physical access, and we
              regularly audit our security practices to identify and address
              potential vulnerabilities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While we have taken reasonable steps to secure the personal
              information you provide to us, please be aware that despite our
              efforts, no security measures are perfect or impenetrable, and no
              method of data transmission can be guaranteed against any
              interception or other type of misuse. Any information disclosed
              online is vulnerable to interception and misuse by unauthorized
              parties. Therefore, we cannot guarantee complete security if you
              provide personal information.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              7. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information under applicable data protection laws,
              including the UAE Federal Decree-Law No. 45 of 2021 on the
              Protection of Personal Data and the EU General Data Protection
              Regulation (GDPR) where applicable. These rights may include: the
              right to access your personal data and obtain a copy of it; the
              right to rectify any inaccurate or incomplete personal data; the
              right to erasure of your personal data in certain circumstances;
              the right to restrict processing of your personal data; the right
              to data portability; and the right to object to processing of your
              personal data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              To exercise any of these rights, please contact us at{" "}
              <span className="text-emerald-700 font-medium">
                support@thatcoupon.com
              </span>
              . We will respond to your request within 30 days. We may need to
              verify your identity before fulfilling your request. Please note
              that certain exemptions may apply, and we may not always be able
              to accommodate your request in full, in which case we will explain
              our reasoning.
            </p>

            {/* Section 8 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {SITE_NAME} is not intended for use by individuals under the age
              of 18. We do not knowingly collect personal information from
              children under 18 years of age. If you are a parent or guardian
              and believe your child has provided us with personal information
              without your consent, please contact us immediately at{" "}
              <span className="text-emerald-700 font-medium">
                support@thatcoupon.com
              </span>{" "}
              and we will take steps to remove that information from our
              systems. We are committed to complying with all applicable laws
              regarding children&apos;s online privacy and data protection.
            </p>

            {/* Section 9 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Site is operated and hosted in the UAE. If you are accessing
              the Site from outside the UAE, please be aware that your
              information may be transferred to, stored, and processed in the
              UAE. By using our Site and providing your information, you consent
              to this transfer. We take appropriate safeguards to ensure that
              your personal data is treated securely and in accordance with this
              Privacy Policy, regardless of where your data is processed or
              stored. Where required by applicable law, we use standard
              contractual clauses or other legally recognized mechanisms to
              ensure adequate protection for cross-border data transfers.
            </p>

            {/* Section 10 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time in order to
              reflect changes to our practices, technologies, legal
              requirements, or other factors. When we make changes, we will
              revise the &quot;Last updated&quot; date at the top of this page.
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we protect your information. If we make
              material changes to this Privacy Policy, we will notify you by
              placing a prominent notice on our Site or by sending you an email
              if we have your email address on file. Your continued use of the
              Site after any changes to this Privacy Policy constitutes your
              acceptance of the updated terms.
            </p>

            {/* Section 11 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              11. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at{" "}
              <span className="text-emerald-700 font-medium">
                support@thatcoupon.com
              </span>{" "}
              or visit our{" "}
              <a
                href="/contact"
                className="text-emerald-700 font-medium hover:underline"
              >
                Contact page
              </a>
              . We are committed to addressing your privacy concerns promptly
              and transparently.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
