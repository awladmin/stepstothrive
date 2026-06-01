import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/layout/legal-page-layout";

export const metadata: Metadata = {
  title: "Complaints procedure",
  description:
    "How to raise a concern about any aspect of Steps to Thrive's service, including external routes via the HCPC, AEP and ICO.",
  alternates: { canonical: "/complaints" },
};

export default function ComplaintsPage() {
  return (
    <LegalPageLayout
      title="Complaints procedure"
      lastUpdated="1 June 2026"
      intro="Steps to Thrive is committed to providing a service that is open, careful, and respectful. If something has not gone the way you expected, raising it directly is welcomed. Feedback is taken seriously and is often the quickest route to putting things right."
    >
      <h2>Step one: raise it directly</h2>
      <p>
        The first step is to contact Dr Johannah Slifi directly, by email
        to{" "}
        <a href="mailto:jo@stepstothrive.co.uk">jo@stepstothrive.co.uk</a>{" "}
        or by phone on 07956 724357. Please describe what happened and
        what outcome you are looking for. You will receive an
        acknowledgement within five working days and a full response within
        twenty working days. If more time is needed to look into the
        concern, you will be told why and when to expect a reply.
      </p>

      <h2>Step two: formal review</h2>
      <p>
        If the response at step one does not resolve the concern, you can
        ask for a formal review. Please put your concern in writing to the
        same address, marking it &ldquo;Formal complaint.&rdquo; A written
        response will be provided within twenty working days, setting out
        what has been looked at, what conclusions have been reached, and
        what, if anything, will change as a result.
      </p>

      <h2>Step three: external bodies</h2>
      <p>
        If you remain unhappy after the internal process, or if you would
        prefer to raise the matter externally at any stage, the following
        routes are open to you:
      </p>
      <ul>
        <li>
          <strong>
            Health and Care Professions Council (HCPC)
          </strong>{" "}
          &mdash; Dr Slifi is registered with the HCPC as a Practitioner
          Psychologist. Concerns about a registered practitioner's fitness
          to practise can be raised at{" "}
          <a
            href="https://www.hcpc-uk.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            hcpc-uk.org
          </a>{" "}
          or on 0300 500 6184.
        </li>
        <li>
          <strong>
            Association of Educational Psychologists (AEP)
          </strong>{" "}
          &mdash; for matters relating to professional practice, contact
          details are at{" "}
          <a
            href="https://www.aep.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            aep.org.uk
          </a>
          .
        </li>
        <li>
          <strong>Information Commissioner's Office (ICO)</strong> &mdash;
          for concerns specifically about how your personal information
          has been handled, contact{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk
          </a>{" "}
          or 0303 123 1113.
        </li>
      </ul>

      <h2>What to expect</h2>
      <p>
        Every complaint is treated confidentially. Raising a concern will
        not affect the support being offered to your child. Where a
        complaint identifies something that should change in the practice,
        that change will be made and recorded.
      </p>
    </LegalPageLayout>
  );
}
