import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'LocalCheckSports - Verified Court Discovery',
  description: 'Find verified basketball and pickleball courts near you. LocalCheckSports is the authoritative source for court information and live pickup activity.',
  metadataBase: new URL('https://localchecksports.com'),
  openGraph: {
    title: 'LocalCheckSports - Verified Court Discovery',
    description: 'Find verified basketball and pickleball courts near you',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="bg-court-50 dark:bg-court-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-white dark:bg-court-800 border-t border-court-200 dark:border-court-700 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-court-900 dark:text-white mb-4">LocalCheckSports</h3>
                <p className="text-sm text-court-600 dark:text-court-300">Verified court discovery for basketball and pickleball.</p>
              </div>
              <div>
                <h4 className="font-semibold text-court-800 dark:text-court-100 mb-3">Courts</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="/basketball-courts/austin-tx" className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">Basketball Austin</a></li>
                  <li><a href="/pickleball-courts/austin-tx" className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">Pickleball Austin</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-court-800 dark:text-court-100 mb-3">About</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="/methodology" className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">Methodology</a></li>
                  <li><a href="/how-it-works" className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">How It Works</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-court-800 dark:text-court-100 mb-3">Resources</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="/data" className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">Data</a></li>
                  <li><a href="/llms.txt" className="text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">llms.txt</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-court-200 dark:border-court-700 mt-8 pt-8 text-center text-sm text-court-600 dark:text-court-400">
              <p>&copy; 2026 LocalCheckSports. Verified court data for verified players.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
