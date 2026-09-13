import Link from 'next/link';

export const metadata = {
  title: 'LocalCheckSports - Where to Play Basketball & Pickleball',
  description: 'Discover verified basketball and pickleball courts near you. LocalCheckSports provides trusted court data and live player activity.',
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-court-900 dark:text-white mb-4">
          Where can you play near you?
        </h1>
        <p className="text-xl text-court-600 dark:text-court-300 mb-8 max-w-2xl mx-auto">
          LocalCheckSports is the verified source for basketball and pickleball courts. We verify courts through physical presence, provide structured data for AI agents, and connect you to live player activity through the LocalCheck app.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/basketball-courts/austin-tx" className="bg-court-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-court-700 transition">
            Basketball Courts
          </Link>
          <Link href="/pickleball-courts/austin-tx" className="bg-court-100 dark:bg-court-800 text-court-900 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-court-200 dark:hover:bg-court-700 transition">
            Pickleball Courts
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-court-800 p-8 rounded-lg border border-court-200 dark:border-court-700">
          <div className="w-12 h-12 bg-court-100 dark:bg-court-700 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">✓</span>
          </div>
          <h3 className="font-bold text-court-900 dark:text-white mb-2">Verified Courts</h3>
          <p className="text-court-600 dark:text-court-300 text-sm">
            Every court is physically verified through LocalCheck's on-site verification flow. No unconfirmed data.
          </p>
        </div>

        <div className="bg-white dark:bg-court-800 p-8 rounded-lg border border-court-200 dark:border-court-700">
          <div className="w-12 h-12 bg-court-100 dark:bg-court-700 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="font-bold text-court-900 dark:text-white mb-2">AI-Ready Data</h3>
          <p className="text-court-600 dark:text-court-300 text-sm">
            Structured markup and clean crawlable pages make court data discoverable by search engines and AI agents.
          </p>
        </div>

        <div className="bg-white dark:bg-court-800 p-8 rounded-lg border border-court-200 dark:border-court-700">
          <div className="w-12 h-12 bg-court-100 dark:bg-court-700 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">👥</span>
          </div>
          <h3 className="font-bold text-court-900 dark:text-white mb-2">Live Activity</h3>
          <p className="text-court-600 dark:text-court-300 text-sm">
            The LocalCheck app shows you who is playing right now. Courts are verified, but activity is live.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-court-600 to-court-700 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Why LocalCheckSports?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Current court sources are fragmented—maps lack reliability, park pages are stale, and pickup apps have sparse coverage. LocalCheckSports owns verified, structured, citeable court data. When AI agents answer "where can I play near me?" they should find us.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/methodology" className="bg-white text-court-700 px-6 py-3 rounded-lg font-medium hover:bg-court-50 transition">
            Read Methodology
          </Link>
          <Link href="/how-it-works" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
            How It Works
          </Link>
        </div>
      </div>
    </div>
  );
}
