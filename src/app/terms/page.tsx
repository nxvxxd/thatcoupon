import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/store-data";

export const metadata: Metadata = {
  title: "Terms of Service – That Coupon",
  description:
    "Read the That Coupon Terms of Service to understand the rules and conditions governing your use of our coupon platform. Includes disclaimers on coupon validity and user responsibilities.",
  openGraph: {
    title: "Terms of Service – That Coupon",
    description:
      "Read the That Coupon Terms of Service to understand the rules and conditions governing your use of our coupon platform.",
    url: `${SITE_URL}/terms`,
    siteName: SITE_NAME,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Breadcrumbs items={[{ label: "Terms of Service" }]} />
            <h1 className="text-3xl md:text-4xl font-black mb-3">
              Terms of Service
            </h1>
            <p className="text-emerald-100 text-sm">
              Last updated: January 1, 2026
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Welcome to {SITE_NAME}. These Terms of Service (&quot;Terms&quot;)
              govern your access to and use of{" "}
              <span className="text-emerald-700 font-medium">
                thatcoupon.com
              </span>{" "}
              (the &quot;Site&quot;) and the services, features, content, and
              functionality offered through the Site (collectively, the
              &quot;Services&quot;). By accessing or using the Site, you agree to
              be bound by these Terms. If you do not agree with any part of
              these Terms, you must not use the Site.
            </p>

            {/* Section 1 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing, browsing, or using the Site in any way, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms of Service, as well as our{" "}
              <a
                href="/privacy-policy"
                className="text-emerald-700 font-medium hover:underline"
              >
                Privacy Policy
              </a>
              , which is incorporated herein by reference. These Terms apply to
              all visitors, users, and others who access or use the Site. If you
              are using the Site on behalf of an organization, you represent and
              warrant that you have the authority to bind that organization to
              these Terms, and the terms &quot;you&quot; and &quot;your&quot;
              will refer to that organization.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, update, or replace any part of
              these Terms at our sole discretion. Changes will be effective
              immediately upon posting on the Site. Your continued use of the
              Site after any modifications constitutes your acceptance of the
              updated Terms. We encourage you to review these Terms periodically
              for any changes. It is your responsibility to check this page
              regularly so you are aware of any changes, as they are binding on
              you.
            </p>

            {/* Section 2 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              2. Use of Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {SITE_NAME} provides a free online platform that aggregates,
              verifies, and displays coupon codes, promotional offers, discount
              deals, and cashback opportunities for various online retailers
              operating in the UAE and GCC region. Our Service allows you to
              browse available deals, copy coupon codes, and be redirected to
              retailer websites where you can apply these codes at checkout to
              receive discounts on your purchases.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use the Site only for lawful purposes and in
              accordance with these Terms. You agree not to use the Site in any
              way that violates any applicable federal, state, local, or
              international law or regulation, including without limitation, any
              laws regarding the export of data or software. You further agree
              not to attempt to gain unauthorized access to, interfere with,
              damage, or disrupt any parts of the Site, the servers on which the
              Site is hosted, or any server, computer, or database connected to
              the Site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not use the Site to engage in any automated data
              collection activities, including but not limited to web scraping,
              data mining, or extraction of any Site content without our prior
              written consent. You may not use any robot, spider, scraper, or
              other automated means to access the Site for any purpose without
              our express written permission. We reserve the right to block or
              restrict access to users who violate these usage restrictions.
            </p>

            {/* Section 3 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              3. Coupon Code Disclaimers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {SITE_NAME} strives to provide accurate and up-to-date coupon
              codes, promotional offers, and discount information. However, we
              want to make the following important disclaimers clear: all coupon
              codes, deals, and promotions listed on our Site are provided
              &quot;as is&quot; and &quot;as available&quot; without any
              warranties of any kind, either express or implied. While our team
              verifies codes daily, we cannot guarantee that any specific coupon
              code will work at the time of your purchase.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Coupon codes and promotional offers are subject to change at any
              time by the respective retailers without prior notice to us.
              Retailers may modify, extend, or terminate promotional campaigns
              at their discretion. The availability, terms, and conditions of
              each coupon code are determined solely by the retailer, not by{" "}
              {SITE_NAME}. We strongly recommend reviewing the terms and
              conditions of each offer on the retailer&apos;s website before
              making a purchase.
            </p>
            <p className="text-gray-700 leading-relaxed">
              {SITE_NAME} is not responsible for any losses, damages, or
              expenses arising from your reliance on coupon codes listed on our
              Site, including but not limited to situations where a code fails
              to work, has expired since our last verification, or is
              invalidated by the retailer. If you find a code that is not
              working, please{" "}
              <a
                href="/contact"
                className="text-emerald-700 font-medium hover:underline"
              >
                contact us
              </a>{" "}
              so we can investigate and update our listings promptly.
            </p>

            {/* Section 4 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Site and its entire contents, features, and functionality —
              including but not limited to all information, software, text,
              displays, images, graphics, photographs, video, audio, design,
              presentation, selection, and arrangement — are owned by{" "}
              {SITE_NAME}, its licensors, or other providers of such material,
              and are protected by United Arab Emirates and international
              copyright, trademark, patent, trade secret, and other intellectual
              property or proprietary rights laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You are granted a limited, non-exclusive, non-transferable,
              revocable license to access and use the Site for your personal,
              non-commercial use only. This license does not include the right
              to modify, reproduce, distribute, create derivative works of,
              publicly display, publicly perform, republish, download, store, or
              transmit any materials on our Site, except as expressly permitted
              by us in writing. You may not use any data mining, robots, or
              similar data gathering and extraction tools on the Site. Any use
              of the Site not expressly permitted by these Terms is a breach of
              these Terms and may violate copyright, trademark, and other laws.
            </p>

            {/* Section 5 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              5. Affiliate Disclosure
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {SITE_NAME} is a participant in various affiliate marketing
              programs. This means that when you click on coupon codes or deal
              links on our Site and subsequently make a purchase on the
              retailer&apos;s website, we may receive a commission from the
              retailer or the affiliate network at no additional cost to you.
              These commissions help us maintain and operate our Site, verify
              coupon codes, and continue providing free services to our users.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our editorial recommendations and coupon code listings are made
              independently and are not influenced by commission rates or
              affiliate relationships. We prioritize the value and validity of
              deals for our users above all else. The presence of an affiliate
              link does not constitute an endorsement of the retailer or a
              guarantee of the coupon code&apos;s performance. We are committed
              to transparency and strive to always provide honest, accurate
              information about the deals and coupons we feature.
            </p>

            {/* Section 6 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              6. User-Generated Content
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If the Site allows you to post, submit, or share any content
              (such as reviews, comments, or feedback), you grant {SITE_NAME} a
              non-exclusive, worldwide, royalty-free, irrevocable, perpetual
              license to use, reproduce, modify, adapt, publish, translate,
              distribute, and display such content in any media. You represent
              and warrant that you own or control all rights to any content you
              submit and that such content is accurate, not misleading, and does
              not violate any applicable law or regulation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to remove, edit, or refuse to display any
              user-generated content at our sole discretion, without notice to
              you. We are not responsible for any content posted by users that
              may be inaccurate, offensive, or otherwise objectionable. You
              acknowledge that any reliance on content posted by other users is
              at your own risk.
            </p>

            {/* Section 7 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by applicable law, in no event
              shall {SITE_NAME}, its directors, employees, partners, agents,
              suppliers, or affiliates be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of profits, data, use, goodwill, or other
              intangible losses, resulting from your access to or use of or
              inability to access or use the Site; any conduct or content of
              any third party on the Site; any content obtained from the Site;
              or unauthorized access, use, or alteration of your transmissions
              or content.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In no event shall {SITE_NAME}&apos;s total aggregate liability to
              you for all claims arising out of or relating to the use of the
              Site exceed the amount of AED 100 (one hundred United Arab
              Emirates dirhams). Some jurisdictions do not allow the exclusion
              of certain warranties or the limitation or exclusion of liability
              for certain types of damages. Accordingly, some of the above
              limitations and disclaimers may not apply to you. To the extent
              that we may not, as a matter of applicable law, disclaim any
              implied warranty or limit our liabilities, the scope and duration
              of such warranty and the extent of our liability shall be the
              minimum permitted under such applicable law.
            </p>

            {/* Section 8 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              8. Indemnification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless {SITE_NAME}, its
              parent company, officers, directors, employees, agents, licensors,
              suppliers, and any third-party information providers from and
              against all losses, expenses, damages, costs, claims, and demands,
              including reasonable legal fees and related costs and expenses,
              arising out of or related to your use of the Site, your violation
              of these Terms, or your violation of any rights of another person
              or entity. This indemnification obligation will survive the
              termination of your use of the Site and these Terms.
            </p>

            {/* Section 9 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              9. Third-Party Links and Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Site may contain links to third-party websites, services, or
              resources that are not owned or controlled by {SITE_NAME}. These
              links are provided solely for your convenience and
              information-sharing purposes. We have no control over, and assume
              no responsibility for, the content, privacy policies, practices,
              or availability of any third-party websites or services. The
              inclusion of any link on our Site does not imply our endorsement,
              investigation, or verification of the linked website or
              information.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You acknowledge and agree that {SITE_NAME} shall not be
              responsible or liable, directly or indirectly, for any damage or
              loss caused or alleged to be caused by or in connection with the
              use of or reliance on any such content, goods, or services
              available on or through any such third-party websites or services.
              We strongly advise you to read the terms and conditions and
              privacy policies of any third-party websites or services that you
              visit from our Site.
            </p>

            {/* Section 10 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              10. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend access to our Site immediately, without
              prior notice or liability, for any reason, including but not
              limited to a breach of these Terms. Upon termination, your right
              to use the Site will immediately cease. All provisions of these
              Terms which by their nature should survive termination shall
              survive, including without limitation ownership provisions, warranty
              disclaimers, indemnification clauses, and limitations of liability.
            </p>

            {/* Section 11 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              11. Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the United Arab Emirates, without regard to its
              conflict of law provisions. Any disputes arising out of or related
              to these Terms or the Site shall be resolved exclusively in the
              courts of Dubai, UAE, and you consent to the personal jurisdiction
              and venue of such courts. Before initiating any legal proceedings,
              you agree to first attempt to resolve any dispute informally by
              contacting us at{" "}
              <span className="text-emerald-700 font-medium">
                support@thatcoupon.com
              </span>
              . We will attempt to resolve the dispute informally within 30
              days. If the dispute is not resolved within this period, either
              party may pursue legal remedies.
            </p>

            {/* Section 12 */}
            <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">
              12. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us at{" "}
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
              . We will do our best to respond to all inquiries within a
              reasonable timeframe.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
