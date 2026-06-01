import type { Metadata } from "next";

import { LegalPageLayout } from "@/components/layout/legal-page-layout";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Steps to Thrive does not use tracking cookies, advertising pixels, or third-party analytics that profile visitors.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Cookies notice"
      lastUpdated="1 June 2026"
      intro="This website is built to respect your privacy. It does not set advertising cookies, does not use third-party analytics that profile visitors, and does not share information about your visit with social media platforms."
    >
      <h2>What is used</h2>
      <p>
        Only the cookies and storage strictly necessary to make the site
        work are used. These cover things like remembering that you have
        seen this notice, and allowing the contact form to function. They
        do not identify you personally and are not used for advertising.
      </p>
      <p>
        If the site ever uses analytics, it will use a cookieless,
        aggregated method that counts visits without tracking individuals.
      </p>

      <h2>What is not used</h2>
      <ul>
        <li>
          No Google Analytics, no Meta Pixel, no LinkedIn Insight, no
          advertising cookies
        </li>
        <li>No cross-site tracking</li>
        <li>No selling or sharing of browsing data</li>
      </ul>

      <h2>Your choices</h2>
      <p>
        Because no tracking or advertising cookies are set, there is
        nothing here you need to switch off. If you would still like to
        clear stored data, your browser settings allow you to delete
        cookies and local storage for any site at any time.
      </p>

      <h2>Questions</h2>
      <p>
        For anything to do with cookies, tracking, or data on this site,
        please contact{" "}
        <a href="mailto:jo@stepstothrive.co.uk">jo@stepstothrive.co.uk</a>.
      </p>
    </LegalPageLayout>
  );
}
