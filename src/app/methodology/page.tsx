import Link from 'next/link';

export const metadata = {
  title: 'Methodology - How LocalCheckSports Verifies Courts',
  description: 'Learn how LocalCheckSports verifies basketball and pickleball courts through physical verification, structural data, and live activity.',
};

export default function MethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="flex gap-2 text-sm mb-8 text-court-600 dark:text-court-400">
        <Link href="/" className="hover:text-court-900 dark:hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-court-900 dark:text-white">Methodology</span>
      </nav>

      <article className="prose dark:prose-invert max-w-none">
        <h1>How LocalCheckSports Verifies Courts</h1>

        <section>
          <h2>Verified vs. Unverified</h2>
          <p>
            Every court on LocalCheckSports is <strong>physically verified</strong> through LocalCheck's on-site verification flow. This is not a scraped directory or imported map data. Verification means:
          </p>
          <ul>
            <li>A team member has been to the location</li>
            <li>Courts exist and are accessible</li>
            <li>Court count and amenities are documented</li>
            <li>Court type (indoor/outdoor, public/private) is confirmed</li>
            <li>Address and coordinates are verified</li>
          </ul>
        </section>

        <section>
          <h2>Verification Methods</h2>
          <p>
            Courts are verified using one or more of the following methods:
          </p>
          <ul>
            <li><strong>On-site visit</strong> — LocalCheck team member visits the court in person</li>
            <li><strong>Live location verification</strong> — Multiple check-ins from different users at the location</li>
            <li><strong>Community partnership</strong> — Verified data from trusted local sources</li>
            <li><strong>Camera evidence</strong> — Photographic or video documentation of the court</li>
          </ul>
        </section>

        <section>
          <h2>Data Quality Standards</h2>
          <p>
            LocalCheckSports maintains high data quality standards:
          </p>
          <ul>
            <li><strong>No fabricated data</strong> — Every field is verified, not estimated</li>
            <li><strong>Unknown is unknown</strong> — Missing information is labeled as such, not guessed</li>
            <li><strong>Fresh verification dates</strong> — Each court displays its last verified date</li>
            <li><strong>Transparent methodology</strong> — Each court page explains how it was verified</li>
            <li><strong>Live activity is honest</strong> — Active status reflects real check-ins, not wishful thinking</li>
          </ul>
        </section>

        <section>
          <h2>Live Activity</h2>
          <p>
            LocalCheckSports distinguishes between court verification and live player activity:
          </p>
          <ul>
            <li><strong>Court verification</strong> is permanent — a physical court either exists or it doesn't</li>
            <li><strong>Live activity</strong> is current — updated through the LocalCheck app when players check in</li>
          </ul>
          <p>
            The public site shows verified courts and general activity patterns. The LocalCheck app shows real-time check-ins and live player presence.
          </p>
        </section>

        <section>
          <h2>Structured Data</h2>
          <p>
            Every court page includes machine-readable structured data (schema.org markup) so that search engines and AI agents can understand and cite court information with confidence.
          </p>
          <p>
            This makes LocalCheckSports citeable for AI-generated answers to questions like "where can I play basketball near me?"
          </p>
        </section>

        <section>
          <h2>Why Verification Matters</h2>
          <p>
            The current landscape of court discovery is fragmented:
          </p>
          <ul>
            <li>Google Maps shows places but doesn't verify pickup reliability</li>
            <li>Park department pages are often stale or hard to parse</li>
            <li>Existing pickup apps have sparse local coverage</li>
            <li>AI agents need clean, crawlable, structured, citeable sources</li>
          </ul>
          <p>
            A smaller verified dataset is more valuable to AI agents (and to players) than a larger unverified one. Trust comes from being honest about what you know and don't know.
          </p>
        </section>

        <section>
          <h2>Continuous Improvement</h2>
          <p>
            Court data is not static. LocalCheckSports continuously:
          </p>
          <ul>
            <li>Re-verifies courts on a regular schedule</li>
            <li>Updates amenities and access information as it changes</li>
            <li>Accepts corrections from community members</li>
            <li>Adds newly verified courts as they are discovered</li>
          </ul>
        </section>
      </article>

      <div className="mt-12 pt-8 border-t border-court-200 dark:border-court-700">
        <Link href="/" className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
