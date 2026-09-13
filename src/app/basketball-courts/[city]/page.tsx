import { getCourtsBySport } from '@/data/courts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: { city: string } }) {
  const city = params.city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `Basketball Courts in ${city} | LocalCheckSports`,
    description: `Find verified basketball courts in ${city}. See court details, amenities, and live player activity through LocalCheck.`,
  };
}

export default function BasketballCityPage({ params }: { params: { city: string } }) {
  const displayCity = params.city
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  const courts = getCourtsBySport('basketball', displayCity);

  if (courts.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="flex gap-2 text-sm mb-8 text-court-600 dark:text-court-400">
        <Link href="/" className="hover:text-court-900 dark:hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-court-900 dark:text-white">Basketball in {displayCity}</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-court-900 dark:text-white mb-4">
          Basketball Courts in {displayCity}
        </h1>
        <p className="text-lg text-court-600 dark:text-court-300 mb-4">
          {courts.length} verified basketball court{courts.length !== 1 ? 's' : ''} ready to play
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {courts.map(court => (
          <Link
            key={court.id}
            href={`/courts/${court.city.toLowerCase().replace(/\s+/g, '-')}/${court.slug}`}
            className="block bg-white dark:bg-court-800 rounded-lg border border-court-200 dark:border-court-700 p-6 hover:shadow-lg hover:border-court-300 dark:hover:border-court-600 transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-court-900 dark:text-white mb-1">
                  {court.name}
                </h2>
                <p className="text-sm text-court-600 dark:text-court-300">
                  {court.address}
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-semibold">
                Verified
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-sm mb-4">
              <div>
                <p className="text-court-600 dark:text-court-400">Courts</p>
                <p className="font-semibold text-court-900 dark:text-white">{court.courtCount || '—'}</p>
              </div>
              <div>
                <p className="text-court-600 dark:text-court-400">Type</p>
                <p className="font-semibold text-court-900 dark:text-white">{court.indoor ? 'Indoor' : 'Outdoor'}</p>
              </div>
              <div>
                <p className="text-court-600 dark:text-court-400">Access</p>
                <p className="font-semibold text-court-900 dark:text-white">{court.free ? 'Free' : 'Paid'}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1">
              {court.amenities.slice(0, 3).map(amenity => (
                <span key={amenity} className="text-xs bg-court-100 dark:bg-court-700 text-court-700 dark:text-court-200 px-2 py-1 rounded">
                  {amenity}
                </span>
              ))}
              {court.amenities.length > 3 && (
                <span className="text-xs text-court-600 dark:text-court-400 px-2 py-1">
                  +{court.amenities.length - 3}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-court-50 dark:bg-court-800 rounded-lg border border-court-200 dark:border-court-700 p-8 text-center">
        <h2 className="text-2xl font-bold text-court-900 dark:text-white mb-4">Ready to play?</h2>
        <p className="text-court-600 dark:text-court-300 mb-6">
          Download LocalCheck to see which courts have active players right now.
        </p>
        <a href="https://localcheck.app" className="inline-block bg-court-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-court-700 transition">
          Download LocalCheck
        </a>
      </div>
    </div>
  );
}
