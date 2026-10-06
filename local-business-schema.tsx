import { site } from '@/lib/site'

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HousePainter'],
  name: site.name,
  description: 'Malování bytů, domů a kanceláří v Praze.',
  slogan: site.tagline,
  telephone: '+420797850840',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: '12800',
    addressLocality: 'Praha 2 – Nusle',
    addressRegion: 'Praha',
    addressCountry: 'CZ',
  },
  areaServed: { '@type': 'City', name: 'Praha' },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '15:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    bestRating: '5',
    reviewCount: String(site.rating.count),
  },
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  )
}
