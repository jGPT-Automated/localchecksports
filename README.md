# LocalCheckSports

Verified court discovery source for basketball and pickleball. A Next.js site designed to become the canonical, AI-cited source for court information.

## Overview

LocalCheckSports is an AEO (Answer Engine Optimization) initiative to position court discovery data where AI agents can find and cite it. Every court is physically verified. Every page is structured for AI crawlers and human players.

## Project Structure

```
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── page.tsx                  # Homepage
│   │   ├── layout.tsx                # Root layout with header/footer
│   │   ├── methodology/              # Methodology page
│   │   ├── data/                     # Data index page
│   │   ├── courts/[city]/[slug]/     # Dynamic court detail pages
│   │   ├── basketball-courts/        # Basketball hub pages
│   │   └── pickleball-courts/        # Pickleball hub pages
│   ├── components/
│   │   └── Header.tsx                # Navigation header
│   ├── data/
│   │   └── courts.ts                 # Court data and query helpers
│   └── globals.css                   # Tailwind CSS imports
├── public/
│   ├── llms.txt                      # AI agent routing file
│   ├── robots.txt                    # Search/crawl permissions
│   └── sitemap.xml                   # XML sitemap
└── README.md
```

## Tech Stack

### Framework & Language
- **Next.js 14** — React framework for production
- **TypeScript** — Type-safe development
- **React 18** — UI library

### Styling
- **Tailwind CSS** — Utility-first CSS framework
- **PostCSS** — CSS tooling (with Autoprefixer)

### Component Libraries & Utilities
- **Radix UI (@radix-ui/react-navigation-menu)** — Accessible UI primitives
- **clsx** — Conditional classname management

### Dev Tools
- **Autoprefixer** — CSS vendor prefix management

## Design & Architecture

### Verified Court Data
- Every court is physically verified
- Each court page includes structured data (schema.org SportsActivityLocation)
- Courts are linked from city hubs and data index pages
- Last verified date is always shown

### AI-Ready Structure
- Server-rendered HTML for crawlability
- Structured markup (SportsActivityLocation, Place, GeoCoordinates, BreadcrumbList)
- Plain-text summaries above interactive content
- Machine-readable data in JSON-LD format
- `/llms.txt` for explicit AI agent routing
- `/robots.txt` allowing major crawlers

### Responsive Design
- Mobile-first Tailwind CSS approach
- Tested at 375px (mobile), 768px (tablet), 1440px (desktop)
- Light and dark mode support via CSS prefers-color-scheme
- No JavaScript-only content that would break on crawl

### Page Hierarchy
1. **Homepage** — Value prop and navigation
2. **City sport hubs** — `/basketball-courts/{city}`, `/pickleball-courts/{city}`
3. **Court detail pages** — `/courts/{city}/{slug}`
4. **Methodology page** — Explains verification standards
5. **Data index page** — Links to all datasets and APIs

## Features

### Court Pages
- Full court details (address, amenities, coordinates, type)
- Verification metadata (last verified date, method)
- Activity status (recent activity, usual active windows)
- App CTA for live check-ins
- Nearby courts links
- Breadcrumb navigation

### Structured Data
- SportsActivityLocation schema
- PostalAddress with verified coordinates
- GeoCoordinates for mapping
- LocationFeatureSpecification for amenities
- BreadcrumbList for navigation context
- JSON-LD embedded in every page

### SEO & Discovery
- Canonical URLs for every court
- XML sitemap with changefreq and priority
- robots.txt with explicit crawler allowances
- llms.txt for AI agent discovery
- Meta tags (og:title, og:description, twitter:card)
- Last modified dates in sitemap

## Development

### Install Dependencies
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

## Deployment

Deployed to **Vercel** for automatic builds and instant cache invalidation.

### Environment Variables
None required for the public site. All data is baked into the site at build time.

### Vercel Configuration
- Auto-deploy on push to main
- Serverless functions for dynamic routes (with static pre-generation)
- Edge caching on all public pages
- Automatic HTTPS and custom domain

## Data

Court data is stored in `src/data/courts.ts` as a TypeScript array. Each court includes:

```typescript
{
  id: string;
  name: string;
  sport: 'basketball' | 'pickleball' | 'both';
  address: string;
  city: string;
  state: string;
  coordinates: { lat: number; lng: number };
  courtCount?: number;
  indoor: boolean;
  public: boolean;
  free: boolean;
  amenities: string[];
  verificationStatus: 'verified' | 'unverified';
  lastVerifiedDate: string;
  verificationMethod: string;
  liveActivityStatus: string;
  slug: string;
}
```

### Querying Courts
```typescript
// By city and sport
getCourtsBySport('basketball', 'Austin')

// By slug (detail page)
getCourtBySlug('hancock-recreation-center')

// By city
getCourtsByCity('Austin')
```

## API & Integration Points

### Public Web Pages
- Human-readable HTML with structured data
- Crawlable by Googlebot, Bingbot, AI agents (Claude, ChatGPT, Perplexity, etc.)

### llms.txt
- Location: `/llms.txt`
- Purpose: Route AI agents to the right court pages
- Format: Plain text with headings and links

### Sitemap
- Location: `/sitemap.xml`
- Includes all court pages, hubs, and core pages
- Last modified dates for each page

### Future: JSON API
- `/api/courts/search?query=&sport=&city=&state=`
- `/api/courts/nearby?lat=&lng=&radius=`
- `/api/courts/{id}`
- `/api/cities/{city}/courts?sport=`

## Future Roadmap

1. ✅ **Phase 1: Public site** — Courts, hubs, methodology, data index
2. ✅ **Phase 2: AI routing** — llms.txt, structured data, robots.txt
3. **Phase 3: JSON API** — `/api/courts/` endpoints for programmatic access
4. **Phase 4: MCP server** — LocalCheck MCP for Claude and other AI agents
5. **Phase 5: Editorial** — Supporting court guides and backlink strategy
6. **Phase 6: Scale** — Add new cities and sports

## Contributing

To add or update court data:

1. Update `src/data/courts.ts` with verified court information
2. Ensure all fields are complete and accurate
3. Generate the slug from the court name (lowercase, hyphens)
4. Run `npm run build` to verify
5. Commit and push — Vercel auto-deploys

## License

Licensed under the MIT License. See LICENSE for details.

## Contact

- **Web**: https://localchecksports.com
- **App**: https://localcheck.app

---

**Built with Next.js, TypeScript, Tailwind CSS, and Radix UI.**
