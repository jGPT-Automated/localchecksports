import { courts } from '@/data/courts';
import Link from 'next/link';

export const metadata = {
  title: 'Data - LocalCheckSports',
  description: 'Browse verified court datasets and indexes by city and sport.',
};

export default function DataPage() {
  const austin = courts.filter(c => c.city === 'Austin');
  const basketball = courts.filter(c => c.sport === 'basketball');
  const pickleball = courts.filter(c => c.sport === 'pickleball' || c.sport === 'both');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="flex gap-2 text-sm mb-8 text-court-600 dark:text-court-400">
        <Link href="/" className="hover:text-court-900 dark:hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-court-900 dark:text-white">Data</span>
      </nav>

      <h1 className="text-4xl font-bold text-court-900 dark:text-white mb-8">Data & Indexes</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-court-800 rounded-lg border border-court-200 dark:border-court-700 p-6">
          <div className="text-4xl font-bold text-court-600 mb-2">{courts.length}</div>
          <p className="text-court-600 dark:text-court-300">Verified courts</p>
        </div>
        <div className="bg-white dark:bg-court-800 rounded-lg border border-court-200 dark:border-court-700 p-6">
          <div className="text-4xl font-bold text-court-600 mb-2">{basketball.length}</div>
          <p className="text-court-600 dark:text-court-300">Basketball courts</p>
        </div>
        <div className="bg-white dark:bg-court-800 rounded-lg border border-court-200 dark:border-court-700 p-6">
          <div className="text-4xl font-bold text-court-600 mb-2">{pickleball.length}</div>
          <p className="text-court-600 dark:text-court-300">Pickleball courts</p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-court-900 dark:text-white mb-6">City Indexes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/basketball-courts/austin-tx" className="block bg-white dark:bg-court-800 rounded-lg border border-court-200 dark:border-court-700 p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-court-900 dark:text-white mb-2">Austin Basketball Courts</h3>
            <p className="text-sm text-court-600 dark:text-court-300 mb-4">
              {basketball.filter(c => c.city === 'Austin').length} verified basketball courts in Austin, TX
            </p>
            <div className="text-sm text-court-500 dark:text-court-400">View index →</div>
          </Link>

          <Link href="/pickleball-courts/austin-tx" className="block bg-white dark:bg-court-800 rounded-lg border border-court-200 dark:border-court-700 p-6 hover:shadow-lg transition">
            <h3 className="font-bold text-court-900 dark:text-white mb-2">Austin Pickleball Courts</h3>
            <p className="text-sm text-court-600 dark:text-court-300 mb-4">
              {pickleball.filter(c => c.city === 'Austin').length} verified pickleball courts in Austin, TX
            </p>
            <div className="text-sm text-court-500 dark:text-court-400">View index →</div>
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-court-900 dark:text-white mb-6">API & Access</h2>
        <div className="bg-white dark:bg-court-800 rounded-lg border border-court-200 dark:border-court-700 p-6">
          <p className="text-court-600 dark:text-court-300 mb-4">
            LocalCheckSports data is available in multiple formats to serve search engines, AI agents, and developers:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-4">
              <span className="text-court-600">📄</span>
              <div>
                <p className="font-semibold text-court-900 dark:text-white">Public Web Pages</p>
                <p className="text-sm text-court-600 dark:text-court-300">Crawlable HTML with structured data for search engines and AI agents</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-court-600">🔗</span>
              <div>
                <p className="font-semibold text-court-900 dark:text-white">sitemap.xml</p>
                <p className="text-sm text-court-600 dark:text-court-300"><a href="/sitemap.xml" className="text-court-500 hover:text-court-700 dark:text-court-400 dark:hover:text-court-200">/sitemap.xml</a> with all indexed court and hub pages</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-court-600">🤖</span>
              <div>
                <p className="font-semibold text-court-900 dark:text-white">llms.txt</p>
                <p className="text-sm text-court-600 dark:text-court-300"><a href="/llms.txt" className="text-court-500 hover:text-court-700 dark:text-court-400 dark:hover:text-court-200">/llms.txt</a> for AI agents to discover court data</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-court-600">📊</span>
              <div>
                <p className="font-semibold text-court-900 dark:text-white">Structured Data</p>
                <p className="text-sm text-court-600 dark:text-court-300">schema.org markup (SportsActivityLocation, Place, BreadcrumbList) on every court page</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-court-900 dark:text-white mb-6">All Courts</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-court-100 dark:bg-court-700 border-b border-court-200 dark:border-court-600">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-court-900 dark:text-white">Court Name</th>
                <th className="text-left px-4 py-3 font-semibold text-court-900 dark:text-white">City</th>
                <th className="text-left px-4 py-3 font-semibold text-court-900 dark:text-white">Sport</th>
                <th className="text-left px-4 py-3 font-semibold text-court-900 dark:text-white">Type</th>
                <th className="text-left px-4 py-3 font-semibold text-court-900 dark:text-white">Last Verified</th>
              </tr>
            </thead>
            <tbody>
              {courts.map((court, idx) => (
                <tr key={court.id} className={idx % 2 === 0 ? 'bg-white dark:bg-court-800' : 'bg-court-50 dark:bg-court-750'}>
                  <td className="px-4 py-3">
                    <Link href={`/courts/${court.city.toLowerCase().replace(/\s+/g, '-')}/${court.slug}`} className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white font-medium">
                      {court.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-court-600 dark:text-court-300">{court.city}</td>
                  <td className="px-4 py-3 text-court-600 dark:text-court-300 capitalize">{court.sport}</td>
                  <td className="px-4 py-3 text-court-600 dark:text-court-300">{court.indoor ? 'Indoor' : 'Outdoor'}</td>
                  <td className="px-4 py-3 text-court-600 dark:text-court-300">{new Date(court.lastVerifiedDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-12 pt-8 border-t border-court-200 dark:border-court-700">
        <Link href="/" className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
