
// PrivacyPolicyModal.js

import React from 'react';
import './index.css'; // Optional CSS file for styling

function PrivacyPolicyModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close Modal">&times;</button>
                <div className="modal-body">
                    <p>
                        We value your privacy and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, and safeguard information when
                        you visit our website... <br /><br />

                        *** Privacy Policy ***<br /><br />

                        Last updated: September 20, 2024<br /><br />

                        1. Introduction<br /><br />

                        Welcome to jonathanfausset.com! We value your privacy and are committed to protecting
                        your personal information. This Privacy Policy outlines how we collect, use, and
                        safeguard information when you visit our website www.jonathanfausset.com (the “Site”).<br /><br />

                        2. Information We Collect<br /><br />

                        2.1. Usage Data<br /><br />

                        When you access the Site, we automatically collect certain information about your
                        device and usage patterns. This may include:<br /><br />

                        - IP Address: Your device's Internet Protocol address.<br />
                        - Browser Type and Version<br />
                        - Operating System<br />
                        - Pages Visited: The pages and content you access on the Site.<br />
                        - Time and Date: The time and date of your visit.<br />
                        - Referring Site Details: The website from which you linked to our Site.<br /><br />

                        2.2. Geographic Information<br /><br />

                        We use your IP address to determine your approximate geographic location (such as
                        country or region) to understand where our visitors are coming from.<br /><br />

                        3. How We Use Your Information<br /><br />

                        We use the collected data for various purposes:<br /><br />

                        - Analytics: To monitor and analyze usage and trends to improve user experience.<br />
                        - Site Improvement: To enhance the functionality and content of our Site.<br />
                        - Security: To detect and prevent fraud or other unauthorized activities.<br /><br />

                        4. Legal Basis for Processing<br /><br />

                        Our legal grounds for processing your personal information include:<br /><br />

                        - Legitimate Interests: We process your data to analyze and improve our services,
                        which we believe also benefits our users.<br /><br />

                        5. Data Retention<br /><br />

                        We retain your personal information only for as long as necessary to fulfill
                        the purposes outlined in this Privacy Policy unless a longer retention period
                        is required or permitted by law.<br /><br />

                        6. Disclosure of Your Information<br /><br />

                        !!! We do not sell, trade, or rent your personal information to third parties. We
                        do not share aggregated, anonymized data (information that does not identify any
                        individual) for analytics, marketing, or other business purposes.<br /><br />

                        7. Cookies and Similar Technologies<br /><br />

                        We may use cookies and similar tracking technologies to track the activity on
                        our Site:<br /><br />

                        - Cookies: Small data files stored on your device.<br />
                        - Purpose: To collect standard internet log information and visitor behavior information.
                        <br /><br />

                        You can instruct your browser to refuse all cookies or to indicate when a
                        cookie is being sent. However, some parts of our Site may not function properly
                        if you disable cookies.<br /><br />

                        8. Your Rights<br /><br />

                        Depending on your location and applicable laws, you may have the following rights
                        regarding your personal information:<br /><br />

                        - Access: Request access to the personal data we hold about you.<br />
                        - Correction: Request correction of inaccurate or incomplete data.<br />
                        - Deletion: Request deletion of your personal data.<br />
                        - Objection: Object to the processing of your personal data.<br />
                        - Restriction: Request the restriction of processing your personal data.<br />
                        - Portability: Request the transfer of your personal data to another organization.
                        <br /><br />

                        To exercise these rights, please contact us at contact@jonathanfausset.com.
                        <br /><br />

                        9. Security of Your Information
                        <br /><br />

                        We implement reasonable security measures to protect your personal information
                        from unauthorized access, alteration, disclosure, or destruction. However, no
                        method of transmission over the Internet or electronic storage is 100% secure.
                        <br /><br />

                        10. International Data Transfers
                        <br /><br />

                        Your information may be transferred to—and maintained on—computers located
                        outside of your state, province, country, or other governmental jurisdiction
                        where data protection laws may differ. We take steps to ensure that your data
                        is treated securely and in accordance with this Privacy Policy.
                        <br /><br />

                        11. Links to Other Websites
                        <br /><br />

                        Our Site may contain links to external sites that are not operated by us. We
                        strongly advise you to review the Privacy Policy of every site you visit. We
                        have no control over the content or practices of any third-party sites or
                        services.
                        <br /><br />

                        12. Changes to This Privacy Policy
                        <br /><br />

                        We may update our Privacy Policy from time to time. Changes will be posted on
                        this page with an updated revision date. We encourage you to review this Privacy
                        Policy periodically.
                        <br /><br />

                        13. Contact Us
                        <br /><br />

                        If you have any questions or concerns about this Privacy Policy or our data
                        practices, please contact us:
                        <br /><br />

                        Email: contact@jonathanfausset.com
                        <br /><br />

                        Disclaimer: This template is provided for informational purposes only and does
                        not constitute legal advice. Laws and regulations regarding privacy can vary by
                        jurisdiction and may change over time. We recommend consulting with a qualified
                        legal professional to ensure that your Privacy Policy complies with all
                        applicable laws and regulations.
                        <br /><br />
                    </p>
                    <button className="modal-close" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicyModal;
