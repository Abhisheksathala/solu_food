import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-20 py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

      <p className="text-lg mb-4">
        <strong>Soul Foods Retail Pvt. Ltd.</strong> (“Soul Foods”, “we”, “our”, or “us”) owns and
        operates the brand Soul Foods and the website{' '}
        <a href="https://www.soulfoodsretail.com" className="text-blue-600 underline">
          www.soulfoodsretail.com
        </a>{' '}
        (the “Site”). These Terms & Conditions govern your access to and use of the Site and our
        services. By using our Site, you (<strong>“Customer”, “User”</strong>, or{' '}
        <strong>“You”</strong>) agree to abide by these Terms.
      </p>

      <Section title="1. Eligibility">
        Our services are available only within <strong>India</strong>. Individuals classified as{' '}
        <strong>“incompetent to contract”</strong> under the Indian Contract Act, 1872 (including
        minors under 18) may only use our Site under the supervision of a legal guardian.
      </Section>

      <Section title="2. Account & Registration">
        To place orders, users must <strong>register</strong> and provide{' '}
        <strong>accurate information</strong>. You are responsible for safeguarding your login
        credentials and agree to receive service-related and <strong>promotional messages</strong>{' '}
        (opt-out anytime).
      </Section>

      <Section title="3. Pricing">
        All prices listed include applicable taxes unless stated otherwise. Pricing for{' '}
        <strong>fresh produce</strong> may vary daily. The final price will be confirmed at{' '}
        <strong>checkout</strong>.
      </Section>

      <Section title="4. Order Cancellation">
        Orders can be <strong>cancelled before the cut-off time</strong> of your delivery slot. We
        reserve the right to cancel orders in case of suspected <strong>fraud</strong> or violation
        of terms.
      </Section>

      <Section title="5. Return & Refund Policy">
        We offer a <strong>“No Questions Asked” return</strong> policy at delivery time if you're
        unsatisfied with freshness or quality. Refunds will be processed via{' '}
        <strong>store credit or the original payment method</strong>.
      </Section>

      <Section title="6. Product Colours">
        We aim to display accurate images and colours, but variations may occur due to{' '}
        <strong>monitor differences</strong>.
      </Section>

      <Section title="7. Modification of Terms">
        We may <strong>modify these Terms without notice</strong>. Continued use of the Site means
        you accept any changes.
      </Section>

      <Section title="8. Feedback & Submissions">
        All reviews, feedback, and suggestions become the <strong>property of Soul Foods</strong>.
        We may publish, modify, or remove them as needed.
      </Section>

      <Section title="9. Copyright & Trademarks">
        All content, trademarks, and software are the{' '}
        <strong>intellectual property of Soul Foods Retail Pvt. Ltd.</strong> or its licensors.
        Unauthorized use is strictly prohibited.
      </Section>

      <Section title="10. Terms for Food & Beverage Services">
        Customers can order <strong>pre-packaged, custom, or freshly prepared F&B items</strong>.
        Orders are fulfilled in their original packaging from our partners. Invoices comply with{' '}
        <strong>GST laws</strong>. Returns follow our return policy.
      </Section>

      <Section title="11. Termination">
        These Terms remain active unless terminated. We may suspend or terminate access for{' '}
        <strong>violations or suspected fraud</strong> without notice.
      </Section>

      <Section title="12. Contact Us">
        <p className="mb-1">
          ✉️ <strong>Email:</strong>{' '}
          <a href="mailto:info@soulfoodsretail.com" className="text-blue-600 underline">
            info@soulfoodsretail.com
          </a>
        </p>
        <p className="mb-1">
          📞 <strong>Phone:</strong> +91-9873975748
        </p>
        <p className="mb-1">
          📍 <strong>Address:</strong> Unit No-9B & 9C, Golf Course Extension Road, Ireo Grand View
          Mall, Sector-58, Gurugram, Haryana-122001
        </p>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-lg leading-relaxed">{children}</p>
  </div>
);

export default TermsAndConditions;
