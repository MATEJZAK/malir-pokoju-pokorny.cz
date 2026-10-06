export const site = {
  name: 'Malíř pokojů Pokorný',
  tagline: 'Rychle, přesně a bez jediné kapky navíc.',
  phoneDisplay: '+420 797 850 840',
  phoneHref: 'tel:+420797850840',
  address: {
    street: 'Slavojova 95/16',
    postalCode: '128 00',
    city: 'Praha 2 – Nusle',
    locality: 'Praha',
  },
  rating: { value: 5.0, count: 20 },
  hours: [
    { days: 'Pondělí – Pátek', time: '08:00 – 20:00' },
    { days: 'Sobota – Neděle', time: '09:00 – 15:00' },
  ],
  mapEmbed:
    'https://www.google.com/maps?q=Slavojova+95%2F16,+128+00+Praha+2&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Slavojova+95%2F16+128+00+Praha+2',
} as const

export const navItems = [
  { href: '#sluzby', label: 'Služby' },
  { href: '#proc-my', label: 'Proč my' },
  { href: '#postup', label: 'Jak to probíhá' },
  { href: '#reference', label: 'Reference' },
  { href: '#kontakt', label: 'Kontakt' },
] as const
