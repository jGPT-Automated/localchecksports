import { getCourtBySlug, courts } from '@/data/courts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return courts.map(court => ({
    city: court.city.toLowerCase().replace(/\s+/g, '-'),
    slug: court.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string; city: string } }) {
  const court = getCourtBySlug(params.slug);
  if (!court) return {};

  return {
    title: `${court.name} - ${court.sport} Court in ${court.city}, ${court.state}`,
    description: `Verified ${court.sport} court located at ${court.address}, ${court.city}, ${court.state}. Free: ${court.free ? 'Yes' : 'No'}. Public: ${court.public ? 'Yes' : 'No'}.`,
    openGraph: {
      title: `${court.name} - LocalCheckSports`,
      description: `Verified ${court.sport} court in ${court.city}`,
    },
  };
}

export default function CourtPage({ params }: { params: { slug: string; city: string } }) {
  const court = getCourtBySlug(params.slug);

  if (!court) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: court.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: court.address,
      addressLocality: court.city,
      addressRegion: court.state,
      postalCode: 'XX',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: court.coordinates.lat,
      longitude: court.coordinates.lng,
    },
    sport: court.sport === 'both' ? ['Basketball', 'Pickleball'] : [court.sport === 'basketball' ? 'Basketball' : 'Pickleball'],
    publicAccess: court.public,
    priceRange: court.free ? '$' : '$$$',
    amenityFeature: court.amenities.map(amenity => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity,
    })),
    url: `https://localchecksports.com/courts/${court.city.toLowerCase().replace(/\s+/g, '-')}/${court.slug}`,
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav className="flex gap-2 text-sm mb-8 text-court-600 dark:text-court-400">
        <Link href="/" className="hover:text-court-900 dark:hover:text-white">Home</Link>
        <span>/</span>
        <Link href={`/${court.sport === 'pickleball' ? 'pickleball-courts' : 'basketball-courts'}/${court.city.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-court-900 dark:hover:text-white">
          {court.sport === 'pickleball' ? 'Pickleball' : 'Basketball'} in {court.city}
        </Link>
        <span>/</span>
        <span className="text-court-900 dark:text-white">{court.name}</span>
      </nav>

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-court-900 dark:text-white mb-2">{court.name}</h1>
        <p className="text-lg text-court-600 dark:text-court-300">
          {court.address} • {court.city}, {court.state}
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <div className="bg-white dark:bg-court-800 rounded-lg border border-court-200 dark:border-court-700 p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-court-900 dark:text-white mb-2">Sport</h3>
              <p className="text-court-600 dark:text-court-300 capitalize">
                {court.sport === 'both' ? 'Basketball & Pickleball' : court.sport}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-court-900 dark:text-white mb-2">Courts</h3>
              <p className="text-court-600 dark:text-court-300">{court.courtCount || 'N/A'}</p>
            </div>
            <div>
              <h3 className="font-semibold text-court-900 dark:text-white mb-2">Type</h3>
              <p className="text-court-600 dark:text-court-300">
                {court.indoor ? 'Indoor' : 'Outdoor'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-court-900 dark:text-white mb-2">Access</h3>
              <p className="text-court-600 dark:text-court-300">
                {court.public ? 'Public' : 'Private'} • {court.free ? 'Free' : 'Paid'}
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-court-900 dark:text-white mb-4">Verification</h2>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <p className="text-sm text-green-800 dark:text-green-200">
              ✓ <strong>Verified Court</strong> — Last verified on {new Date(court.lastVerifiedDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-court-600 dark:text-court-300 mt-2">
              {court.verificationMethod}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-court-900 dark:text-white mb-4">Activity Status</h2>
          <p className="text-court-600 dark:text-court-300">{court.liveActivityStatus}</p>
          <p className="text-sm text-court-500 dark:text-court-400 mt-2">
            For live player check-ins and current activity, download the LocalCheck app.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-court-900 dark:text-white mb-4">Amenities</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {court.amenities.map(amenity => (
              <li key={amenity} className="flex items-center gap-2 text-court-600 dark:text-court-300">
                <span className="text-green-600">•</span> {amenity}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-court-200 dark:border-court-700 pt-8">
          <h2 className="text-2xl font-bold text-court-900 dark:text-white mb-4">Play Here</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <p className="text-court-600 dark:text-court-300 mb-4">
              Want to see who is playing right now or check in with other players? Download the LocalCheck app.
            </p>
            <a href="https://localcheck.app" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Open LocalCheck App
            </a>
          </div>
        </section>

        <section className="mt-8 pt-8 border-t border-court-200 dark:border-court-700">
          <h3 className="font-semibold text-court-900 dark:text-white mb-2">See Also</h3>
          <div className="space-y-2">
            <Link href={`/${court.sport === 'pickleball' ? 'pickleball-courts' : 'basketball-courts'}/${court.city.toLowerCase().replace(/\s+/g, '-')}`} className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">
              ← All {court.sport === 'pickleball' ? 'Pickleball' : 'Basketball'} Courts in {court.city}
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
