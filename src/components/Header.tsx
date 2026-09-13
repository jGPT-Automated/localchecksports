import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-court-200 bg-white dark:bg-court-900 dark:border-court-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-court-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LC</span>
            </div>
            <span className="text-lg font-bold text-court-900 dark:text-white">LocalCheckSports</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/basketball-courts/austin-tx" className="text-sm font-medium text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">
              Basketball
            </Link>
            <Link href="/pickleball-courts/austin-tx" className="text-sm font-medium text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">
              Pickleball
            </Link>
            <Link href="/methodology" className="text-sm font-medium text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">
              Methodology
            </Link>
            <Link href="/data" className="text-sm font-medium text-court-600 dark:text-court-300 hover:text-court-900 dark:hover:text-white">
              Data
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
