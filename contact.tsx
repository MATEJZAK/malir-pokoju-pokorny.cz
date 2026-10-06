import { Clock, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="kontakt-title" eyebrow="Kontakt" title="Kde nás najdete" description="Sídlíme v Nuslích a malujeme po celé Praze." />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <Phone className="mt-1 size-6 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="font-bold">Telefon</h3>
                <a href={site.phoneHref} className="text-xl font-semibold underline-offset-4 hover:text-accent hover:underline">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <MapPin className="mt-1 size-6 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="font-bold">Adresa</h3>
                <address className="leading-relaxed text-muted-foreground not-italic">
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </address>
                <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline">
                  Otevřít v Mapách Google
                  <span className="sr-only"> (otevře se v novém okně)</span>
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <Clock className="mt-1 size-6 shrink-0 text-accent" aria-hidden="true" />
              <div className="w-full">
                <h3 className="font-bold">Otevírací doba</h3>
                <dl className="mt-1 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-muted-foreground">
                  {site.hours.map((h) => (
                    <div key={h.days} className="contents">
                      <dt>{h.days}</dt>
                      <dd className="text-right font-medium text-foreground tabular-nums">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="min-h-80 overflow-hidden rounded-2xl border border-border bg-muted lg:col-span-3">
            <iframe
              src={site.mapEmbed}
              title="Mapa – Malíř pokojů Pokorný, Slavojova 95/16, Praha 2"
              className="h-full min-h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
