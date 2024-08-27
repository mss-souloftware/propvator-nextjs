import React from 'react'
import styles from './Content.module.css'
import Link from 'next/link'

export default function Content() {
    return (
        <div className={styles.content_tc}>
            <div className="container mx-auto">
                <h1 className='text-white text-center'>Terms and Conditions</h1>
                <p>
                    Welcome to Propvator, accessible at <Link className='text-primary' href="https://propvator.com/">www.propvator.com</Link>. By using our platform, you agree
                    to comply with and be bound by the following terms and conditions. Please review these
                    terms carefully before using our platform and regularly check for updates.
                </p>
                <p>
                    Propvator is an online platform that provides users with a list of various proprietary trading
                    firms, aiming to educate users by sharing publicly available information sourced online. Our
                    mission is to promote transparency, enabling users to make informed decisions when
                    choosing a proprietary trading firm.
                </p>

                <h2>1. DEFINITIONS</h2>

                <p>
                    1.1. "Propvator", “platform", “website", "us," or "our", refer to the registered
                    company Propvator Ltd, registered and incorporated in London, United
                    Kingdom, with its registered office address: Capital Office, 124 City Road,
                    London, United Kingdom, EC1V 2NX.
                </p>

                <h2>2. DISCLAIMER</h2>

                <p>
                    2.1. This website is provided for general use and informational purposes only.
                    Nothing provided on our website shall constitute financial advice, suggestion
                    or recommendation. You must always seek the advice of your financial
                    advisor or other qualified financial service provider regarding financial advice
                    and investing. Never disregard professional financial advice or delay in
                    seeking it because of something you have read on our website. Users should
                    independently evaluate and verify the suitability of any such listed entities
                    before engaging with them. We are not responsible for any losses (whether
                    that be direct or indirect) which you may incur as a result of your connection
                    to this website. The content on this website is not intended to be relied upon
                    for financial or information purposes, nor is it meant to be complete or
                    exhaustive. No financial-customer relationship is created by this website or its
                    use.
                </p>

                <h2>3. LIMITATION OF LIABILITY</h2>

                <p>
                    3.1. Propvator shall not be liable for any expenses or losses that may arise from
                    using our services. By using our services, you acknowledge and accept that
                    Propvator is an educational and information platform that also provides users
                    with cashback, discount codes, and other available offers.
                </p>

                <p>
                    3.2. Propvator makes no warranties or representations with respect to our
                    platform, any linked site, or its content. This includes the availability, accuracy,
                    completeness, or timeliness of any content, information, or materials. We do
                    not warrant that your access to or use of Propvator or any linked site will be
                    uninterrupted or free of errors or omissions, or that defects will be corrected,
                    or that our platform is free of computer viruses or other harmful components.
                </p>
                <p>
                    All content provided on or through Propvator is provided to users "as is," with
                    no warranty of any kind, either express or implied.
                </p>

                <h2>4. AGE REQUIREMENT</h2>

                <p>
                    4.1. You must be at least eighteen (18) years old to use Propvator.
                </p>

                <h2>5. THIRD PARTY</h2>

                <p>
                    5.1. Propvator may have contractual relationships with one or more of the listed
                    proprietary trading firms. Such arrangements are disclosed to our users by
                    way of adding a verified badge to ensure complete transparency to our users.

                </p>

                <p>
                    5.2. In reference to 5.1, the contractual relationships are strictly limited to the
                    following:- (prop firm promotions, social media marketing, sharing our
                    discount code, hosting giveaways).
                </p>

                <p>
                    5.3. Propvator reserves the right to delist any proprietary trading firm from its
                    platform, provided that reasonable and necessary disclosures are made to
                    our users and the subject firm.
                </p>

                <p>
                    5.4. Links to other websites operated by third parties or as on-site advertisements,
                    including Propvator’s vendors, do not constitute sponsorship, endorsement,
                    or approval by Propvator of their content, policies, or practices of such linked
                    sites. Propvator does not operate, control, or maintain linked sites and is not
                    responsible for their availability, content, security, policies, or practices. Links
                    to other sites are accessed at your own risk.
                </p>

                <h2>7. CASHBACK</h2>

                <p>
                    7.1. We offer cashback to users who have purchased an account with a prop firm
                    listed on our website by using our code “Propvator” during checkout.
                </p>

                <p>
                    7.2. To redeem the cashback offer, please email a receipt of the account you have
                    purchased to <a className='text-primary' href="mailto:support@propvator.com">support@propvator.com</a>.
                </p>

                <p>
                    7.3. When redeeming the cashback offer, you can choose between (1) applying
                    the cashback to your next purchase; or (2) receiving a bank transfer/paypal
                    transaction of the respective cashback. All applicable transaction fees will be
                    borne by you.
                </p>

                <p>
                    7.4. The cashback amount varies between firms and account size. Please visit our
                    homepage for more information on the applicable cashback.
                </p>

                <h2>8. INTELLECTUAL PROPERTY</h2>

                <p>
                    8.1. Propvator’s intellectual property may not be used without our express written
                    permission. All other trademarks and service marks not owned by Propvator
                    that appear on our site are the property of their respective owners.
                </p>

                <h2>9. DISPUTE RESOLUTION</h2>

                <p>
                    9.1. By using our service, you agree that all disputes, claims, or causes of action
                    arising from or related to your use of our service will be resolved through
                    binding arbitration in London, United Kingdom in accordance with the rules of
                    the LCIA Rules.
                </p>

                <p>
                    9.2. Arbitration proceedings may be instituted and commenced 42 calendar days
                    after the Notice of Arbitration has been served and received by the recipient.
                </p>

                <p>
                    9.3. These Terms of Use shall be construed in accordance with the laws of
                    London, United Kingdom without giving effect to any choice or conflict of law
                    provision. You agree to jurisdiction in London and will initiate any claim in
                    connection with use of the Site or these Terms of Use in London, United
                    Kingdom.
                </p>

                <p>
                    9.4. If you have any questions, complaints or concerns regarding our services,
                    please contact us at <a className='text-primary' href="mailto:support@propvator.com">support@propvator.com</a>. We are committed to
                    addressing and resolving any issues you may encounter.
                </p>
            </div>
        </div>
    )
}
