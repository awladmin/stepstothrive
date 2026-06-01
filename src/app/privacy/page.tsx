import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/layout/legal-page-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Steps to Thrive collects, uses and protects your personal information, in line with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="1 June 2026"
      intro="This privacy notice explains what personal information Steps to Thrive collects about you, how it is used, how it is kept safe, and the rights you have over it. It is written to comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018."
    >
      <h2>Who we are</h2>
      <p>
        Steps to Thrive is the independent practice of Dr Johannah Slifi, an
        Educational Psychologist registered with the Health and Care
        Professions Council (HCPC). For the purposes of UK data protection
        law, Dr Slifi is the data controller for any personal information
        you share with this practice. You can contact her at{" "}
        <a href="mailto:jo@stepstothrive.co.uk">jo@stepstothrive.co.uk</a>{" "}
        or on 07956 724357.
      </p>

      <h2>What information is collected</h2>
      <p>
        Most people contact this practice through the website contact form,
        by email, or by phone. The information typically collected is:
      </p>
      <ul>
        <li>
          Your name and the name of the child or young person the enquiry
          concerns
        </li>
        <li>Your contact details (email address and phone number)</li>
        <li>A short description of what you are seeking support with</li>
      </ul>
      <p>
        If a piece of work goes ahead, further information will be collected
        during the work itself, for example background information shared
        during consultations, observations, school records you choose to
        share, and notes made during assessments. That clinical information
        is held separately from website enquiries and is governed by the
        professional record-keeping standards of the HCPC and the
        Association of Educational Psychologists.
      </p>
      <p>
        This website does not use tracking cookies, advertising pixels, or
        third-party analytics that profile visitors. See the{" "}
        <a href="/cookies">Cookies notice</a> for more detail.
      </p>

      <h2>Why this information is used (lawful basis)</h2>
      <p>
        Initial enquiries are processed on the basis of your consent: you
        have chosen to make contact and want a reply. Once a piece of work
        is agreed, the lawful basis becomes contract (to provide the
        service you have agreed to) and, for the clinical record itself,
        legitimate interests and professional obligation (to maintain
        accurate records as required by the HCPC). Where the information is
        health-related, the additional condition relied on is that
        processing is necessary for the provision of healthcare by a
        regulated health professional.
      </p>

      <h2>Who the information is shared with</h2>
      <p>
        Your information is not sold, rented, or shared for marketing. It
        may be shared in the following limited circumstances:
      </p>
      <ul>
        <li>
          With the school, GP, or other professional involved in your
          child's support, only with your written agreement and only to the
          extent needed
        </li>
        <li>
          With a supervisor, in line with HCPC requirements for safe
          professional practice; discussions are anonymised wherever
          possible
        </li>
        <li>
          Where required by law, or where there is a safeguarding concern
          that means a child or another person may be at risk of harm
        </li>
      </ul>

      <h2>How long the information is kept</h2>
      <p>
        Initial enquiries that do not lead to a piece of work are deleted
        within six months. Clinical records created in the course of work
        with a child or family are kept securely for seven years after the
        work concludes, or, where the work involves a child, until the
        young person reaches the age of 25, whichever is later. This
        follows HCPC guidance.
      </p>

      <h2>How the information is kept safe</h2>
      <p>
        Enquiries and records are held on password-protected, UK-based
        encrypted systems. Paper notes, where used, are kept in a locked
        cabinet and shredded once digitised. Email is used for routine
        correspondence; sensitive material is shared by secure means agreed
        with you in advance.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK GDPR you have the right to ask what information is held
        about you, to ask for inaccuracies to be corrected, to ask for
        information to be deleted (subject to professional record-keeping
        obligations), to ask for processing to be restricted, and to
        withdraw consent at any time where consent is the lawful basis.
        Requests should be made in writing to{" "}
        <a href="mailto:jo@stepstothrive.co.uk">jo@stepstothrive.co.uk</a>{" "}
        and will be responded to within one calendar month.
      </p>

      <h2>Complaints</h2>
      <p>
        If you are concerned about how your personal information has been
        handled, please raise it directly first; most issues are resolved
        quickly that way. If you remain unhappy, you have the right to
        complain to the Information Commissioner's Office at{" "}
        <a
          href="https://ico.org.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          ico.org.uk
        </a>{" "}
        or on 0303 123 1113.
      </p>

      <h2>Changes to this notice</h2>
      <p>
        This notice will be updated from time to time. The date at the top
        shows when it was last revised.
      </p>
    </LegalPageLayout>
  );
}
