export interface Court {
  id: string;
  name: string;
  sport: 'basketball' | 'pickleball' | 'both';
  address: string;
  city: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
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

export const courts: Court[] = [
  {
    id: 'hancock-rec-center-austin',
    name: 'Hancock Recreation Center',
    sport: 'basketball',
    address: '811 E 52nd St',
    city: 'Austin',
    state: 'TX',
    coordinates: {
      lat: 30.2792,
      lng: -97.7408,
    },
    courtCount: 3,
    indoor: false,
    public: true,
    free: true,
    amenities: ['Outdoor', 'Public', 'Free', 'Lighting', 'Parking'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-08-15',
    verificationMethod: 'On-site verification by LocalCheck team',
    liveActivityStatus: 'Recently active with consistent check-ins',
    slug: 'hancock-recreation-center',
  },
  {
    id: 'palmer-park-austin',
    name: 'Palmer Park',
    sport: 'basketball',
    address: '900 Barton Springs Rd',
    city: 'Austin',
    state: 'TX',
    coordinates: {
      lat: 30.2645,
      lng: -97.7667,
    },
    courtCount: 2,
    indoor: false,
    public: true,
    free: true,
    amenities: ['Outdoor', 'Public', 'Free', 'Scenic', 'Parking'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-08-10',
    verificationMethod: 'On-site verification by LocalCheck team',
    liveActivityStatus: 'Active during mornings and weekends',
    slug: 'palmer-park',
  },
  {
    id: 'south-congress-austin',
    name: 'South Congress Recreation Center',
    sport: 'both',
    address: '1100 Barton Springs Rd',
    city: 'Austin',
    state: 'TX',
    coordinates: {
      lat: 30.2583,
      lng: -97.7583,
    },
    courtCount: 4,
    indoor: true,
    public: true,
    free: false,
    amenities: ['Indoor', 'Public', 'Climate-controlled', 'Multiple courts', 'Pro shop'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-08-18',
    verificationMethod: 'On-site verification by LocalCheck team',
    liveActivityStatus: 'Highly active, league play and open pickup',
    slug: 'south-congress-recreation-center',
  },
  {
    id: 'zilker-park-austin',
    name: 'Zilker Park Courts',
    sport: 'pickleball',
    address: '2100 Barton Springs Rd',
    city: 'Austin',
    state: 'TX',
    coordinates: {
      lat: 30.2627,
      lng: -97.7697,
    },
    courtCount: 6,
    indoor: false,
    public: true,
    free: true,
    amenities: ['Outdoor', 'Public', 'Free', 'Parks', 'Covered areas'],
    verificationStatus: 'verified',
    lastVerifiedDate: '2026-08-20',
    verificationMethod: 'On-site verification by LocalCheck team',
    liveActivityStatus: 'Very active, especially mornings and evenings',
    slug: 'zilker-park-courts',
  },
];

export function getCourtBySlug(slug: string): Court | undefined {
  return courts.find(court => court.slug === slug);
}

export function getCourtsByCity(city: string): Court[] {
  return courts.filter(court => court.city.toLowerCase() === city.toLowerCase());
}

export function getCourtsBySport(sport: string, city?: string): Court[] {
  let filtered = courts;
  if (city) {
    filtered = filtered.filter(c => c.city.toLowerCase() === city.toLowerCase());
  }
  return filtered.filter(c => c.sport === sport || c.sport === 'both');
}
