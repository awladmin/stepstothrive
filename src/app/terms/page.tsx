import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/layout/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The basis on which Steps to Thrive provides educational psychology services to families, schools and professionals.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="1 June 2026"
      intro="These terms set out the basis on which Steps to Thrive provides educational psychology services. They apply to all work agreed with Dr Johannah Slifi unless a separate written agreement says otherwise."
    >
      <h2>About the practice</h2>
      <p>
        Steps to Thrive is the independent practice of Dr Johannah Slifi,
        an Educational Psychologist registered with the Health and Care
        Professions Council (registration on request) and a member of the
        Association of Educational Psychologists. Dr Slifi holds an
        Enhanced Disclosure and Barring Service certificate and a Doctorate
        in Professional Educational, Child and Adolescent Psychology from
        the UCL Institute of Education.
      </p>

      <h2>Scope of service</h2>
      <p>
        Services include consultation, assessment, formulation, intervention
        planning, training, and supervision in the field of educational,
        child and adolescent psychology. Steps to Thrive does not provide
        crisis services, out-of-hours support, or emergency mental health
        care. If your child needs urgent help, please contact your GP or
        NHS 111; if there is immediate danger, call 999.
      </p>

      <h2>How work is agreed</h2>
      <p>
        Most pieces of work start with a free initial conversation by phone
        or video, so we can understand what you are looking for and whether
        this practice is the right fit. If we agree to go ahead, you will
        receive a short written agreement setting out the scope of work,
        the expected timeframe, and the fee.
      </p>

      <h2>Fees</h2>
      <p>
        Fees are not published online because every piece of work is
        different. A single parent consultation, a full assessment, and a
        school-based training session each carry different costs. Fees are
        agreed openly in writing before any chargeable work begins.
        Invoices are issued by email and payable by bank transfer within
        the timeframe stated on the invoice. Where work is funded by a
        school or local authority, the same principles apply.
      </p>

      <h2>Cancellation and rescheduling</h2>
      <p>
        If you need to reschedule a session, please give at least 48 hours'
        notice and a new time will be offered at no extra cost. Sessions
        cancelled with less than 48 hours' notice, or missed without
        notice, are charged in full. The same notice period applies to
        cancellations made by Steps to Thrive: if a session has to be
        cancelled at short notice from this side, it will be rebooked at
        no charge.
      </p>

      <h2>Confidentiality</h2>
      <p>
        What is shared in the course of this work is treated as
        confidential. Information will only be shared with others, for
        example your child's school, GP, or another professional, with
        your written agreement and only to the extent needed to support
        your child.
      </p>
      <p>
        There are limits to confidentiality. Information may need to be
        shared, without consent, in the following circumstances: where
        there is a safeguarding concern that a child or another person is
        at risk of harm; where there is a serious risk to life; where a
        court orders disclosure; or where it is necessary to meet a
        professional or legal obligation. If any of these situations
        arise, you will be told what is being shared, with whom, and why,
        unless doing so would itself increase risk.
      </p>

      <h2>Records</h2>
      <p>
        Records are kept in line with HCPC guidance and the{" "}
        <a href="/privacy">Privacy Policy</a>. You have the right to ask
        for a copy of records held about you or your child.
      </p>

      <h2>Professional standards and complaints</h2>
      <p>
        This practice operates within the standards set by the Health and
        Care Professions Council. If you are unhappy with any aspect of
        the work, please see the{" "}
        <a href="/complaints">Complaints procedure</a>. The aim is always
        to resolve concerns directly and quickly.
      </p>

      <h2>Liability</h2>
      <p>
        Educational psychology work is advisory. Recommendations are
        offered in good faith based on the information available at the
        time. Decisions about how to act on those recommendations remain
        with parents, carers, and the relevant educational and clinical
        professionals. Nothing in these terms limits liability for death
        or personal injury caused by negligence, or for any other liability
        that cannot be excluded by law.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the law of England and Wales, and any
        dispute will be subject to the exclusive jurisdiction of the courts
        of England and Wales.
      </p>
    </LegalPageLayout>
  );
}
