import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: 2023-07-21T06:51:00.000Z</p>

      <p className="mb-4">
        This Privacy Policy explains how fin.ai (&quot;we,&quot; &quot;us,&quot;
        or &quot;our&quot;) collects, uses, and protects the personal
        information of users (&quot;you&quot; or &quot;users&quot;) when using
        our website and services. Please read this Privacy Policy carefully to
        understand how we handle your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Information We Collect
      </h2>
      <p className="mb-4">
        fin.ai collects the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Personal Information:</strong> When you use fin.ai, we may
          collect personal information such as your name, email address, and
          resume. This information is used to provide our services, including
          resume analysis and mock interviews.
        </li>
        <li className="mb-2">
          <strong>Usage Information:</strong> We may collect non-personal
          information about your usage of fin.ai, such as your IP address,
          browser type, and device information. This information helps us
          improve our services and enhance your user experience.
        </li>
        <li className="mb-2">
          <strong>Payment Information:</strong> If you make a payment on fin.ai,
          we collect payment information such as credit card details. This
          information is securely processed and stored by our payment gateway
          providers, Lemonsqueezy (for USD) and Xendit (for IDR).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        fin.ai uses your personal information for the following purposes: :
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">
          <strong>Providing Services:</strong> We use your personal information
          to review your resume, generate detailed reports, and provide
          suggestions for improvement. We also use AI technology, including the
          OpenAI API, to analyze your resume and conduct mock interviews.
        </li>
        <li className="mb-2">
          <strong>Communication:</strong> We may use your email address to send
          you important updates, notifications, and promotional materials
          related to fin.ai. You can opt-out of receiving marketing emails
          by following the unsubscribe instructions provided in the email.
        </li>
        <li className="mb-2">
          <strong>Data Analysis:</strong> We may use aggregated and anonymized
          data for research, analytics, and improving our services. This data
          does not identify individual users.
        </li>
        <li className="mb-2">
          <strong>Legal Compliance:</strong> We may use your personal
          information to comply with applicable laws, regulations, and legal
          processes.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Data Storage and Security
      </h2>
      <p className="mb-4">
        fin.ai takes reasonable measures to protect your personal
        information from unauthorized access, disclosure, alteration, or
        destruction. We store your data securely and implement appropriate
        security measures to safeguard it.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Data Retention and Deletion
      </h2>
      <p className="mb-4">
        fin.ai retains your personal information for as long as necessary to
        fulfill the purposes outlined in this Privacy Policy. You can delete
        your uploaded data and personal information permanently by clicking the
        delete button within the fin.ai platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Services</h2>
      <p className="mb-4">
        fin.ai uses third-party services, including Lemonsqueezy and Xendit,
        for payment processing. These providers have their own privacy policies
        and are responsible for the security of your payment information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Updates to this Privacy Policy
      </h2>
      <p className="mb-4">
        fin.ai may update this Privacy Policy from time to time. We will
        notify you of any changes by posting the updated policy on our website.
        It is your responsibility to review this Privacy Policy periodically for
        any updates.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy or the
        privacy practices of fin.ai, please contact us at:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Email: business@fin.ai</li>
        <li>Business inquiries: business@fin.ai</li>
      </ul>

      <p className="mt-6">
        By using fin.ai, you acknowledge that you have read and understood this
        Privacy Policy and agree to the collection, use, and disclosure of your
        personal information as described herein.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
