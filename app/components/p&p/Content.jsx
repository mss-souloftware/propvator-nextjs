import React from "react";
import styles from "./Content.module.css";
import Link from "next/link";

export default function Content() {
  return (
    <div className={styles.content_tc}>
      <div className="container mx-auto">
        <h1 className="text-white text-center">Privacy Policy</h1>
        <p>
          At Propvator, protecting your privacy and safeguarding your personal
          information is one of our top priorities. This Privacy Policy outlines
          how we collect, use, and protect your personal data, in compliance
          with the UK General Data Protection Regulation (UK GDPR).
        </p>

        <h2>1. COLLECTION AND STORAGE OF PERSONAL INFORMATION</h2>

        <p>
          1.1. We collect personal information directly from you and indirectly
          through your interactions with our website. This may include data such
          as your browsing behavior, clicks, mouse movements, and page views.
          Additionally, we use third-party service providers, such as Hotjar, to
          process some of the data we collect. These providers act as data
          processors, and we ensure that they adhere to UK GDPR by requiring
          them to follow strict data protection protocols. Any data shared with
          these third parties is done so securely and in compliance with legal
          requirements.
        </p>
        <p>
          1.2. The data collected is standard, non-invasive, and fully compliant
          with relevant legal requirements. We use this information to improve
          our site's performance, monitor trends, and optimize the user
          experience.
        </p>
        <p>
          1.3. We retain your personal data for as long as is necessary to
          fulfill the purposes for which it was collected. After this period,
          your data will be securely deleted unless we are required by law to
          retain it longer. Specific retention periods may vary based on legal
          requirements and the type of data collected.
        </p>

        <h2>2. COOKIES</h2>

        <p>
          2.1. Our website uses cookies to collect and store information about
          your visit. Cookies help us analyze traffic, enhance website
          functionality, and personalize your experience. You can adjust your
          browser settings to decline cookies if you prefer not to share this
          information.
        </p>

        <h2>3. HOW WE USE INFORMATION COLLECTED</h2>

        <p>3.1. We collect information to:</p>

        <p>
          3.1.1. Analyze site performance <br></br>
          3.1.2. Track trends and user interactions <br></br>
          3.1.3. Optimize our content and services <br></br>
          3.1.4. Enhance the overall user experience <br></br>
        </p>

        <h2>4. WE DO NOT SHARE OR SELL PERSONAL INFORMATION</h2>

        <p>
          4.1. Your privacy is of utmost importance to us. We do not share,
          sell, or rent any personal information to third parties. All data
          collected is strictly for internal use and is handled with the highest
          level of confidentiality.
        </p>

        <h2>5. SECURITY OF YOUR PERSONAL INFORMATION</h2>

        <p>
          5.1. We take all necessary steps to protect your personal data from
          unauthorized access, alteration, disclosure, or destruction. While we
          do not store any sensitive personal information, we ensure that any
          data collected is securely processed and handled.
        </p>

        <h2>6. YOUR RIGHTS</h2>

        <p>
          6.1. As per UK GDPR, you have the following rights regarding your
          personal data:
        </p>

        <p>
          6.1.1. Right to access: You can request a copy of your data. <br></br>
          6.1.2.Right to rectification: You can ask us to correct inaccuracies
          in your data. <br></br>
          6.1.3. Right to erasure: You can request the deletion of your data.
          <br></br>
          6.1.4. Right to restrict processing: You can request that we limit the
          use of your data.<br></br>
          6.1.5. Right to object: You can object to the processing of your data.
          <br></br>
        </p>

        <p>
          6.2. If you believe we are not handling your personal data in
          accordance with the UK GDPR, you have the right to lodge a complaint
          with the Information Commissioner’s Office (ICO). Kindly visit 
          <Link className='text-primary' href="https://ico.org.uk"> https://ico.org.uk</Link> for more
          information on how to lodge a complaint.
        </p>

        <p>
          If you have questions or would like to exercise your rights, kindly
          contact our data protection officer at{" "}
          <Link className='text-primary' href="mailto:support@propvator.com">support@propvator.com</Link> and
          we would be happy to assist you.
        </p>

        <h2>7. CHANGES TO THE PRIVACY POLICY & OPTING OUT</h2>

        <p>
          7.1. We may update this privacy policy periodically to reflect changes
          in our data practices or legal obligations. We advise you to check
          this policy regularly. You may opt out of certain data collection
          practices at any time by adjusting your browser settings or contacting
          us directly.
        </p>

        <h2>8. LEGAL COMPLIANCE</h2>

        <p>
          8.1. This privacy policy is compliant with the UK General Data
          Protection Regulation (UK GDPR). We ensure that all personal data is
          processed in a lawful, fair, and transparent manner. For further
          details, refer to the UK Information Commissioner’s Office (ICO)
          privacy notice guidelines.
        </p>
      </div>
    </div>
  );
}
