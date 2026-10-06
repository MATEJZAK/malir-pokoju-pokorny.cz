import Image from 'next/image'
import { ArrowRight, Phone, Star } from 'lucide-react'
import { site } from '@/lib/site'

export function RatingBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
      <div className="flex" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm font-medium">
        <span className="font-bold">5,0</span>
        <span className="text-muted-foreground"> / 5 · {site.rating.count} recenzí na Google</span>
      </p>
    </div>
  )
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 md:pt-16 lg:grid-cols-2 lg:gap-14 lg:pb-24">
        <div className="flex flex-col items-start gap-6">
          <RatingBadge />
          <h1
            id="hero-title"
            className="text-4xl leading-[1.1] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Vymalujeme váš byt <span className="text-accent">rychle a čistě</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
            Malování bytů, domů a kanceláří po celé Praze. {site.tagline} Cenu
            domluvíme předem a po práci po nás zůstanou jen čisté stěny.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-accent px-7 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <Phone className="size-5" aria-hidden="true" />
              Zavolat
            </a>
            <a
              href="#poptavka"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-input bg-card px-7 text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              Nezávazná poptávka
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Volejte {site.phoneDisplay} · Po–Pá 8–20, So–Ne 9–15
          </p>
        </div>

        <figure className="relative">
          <div className="absolute -inset-3 -z-10 rotate-2 rounded-[2rem] bg-secondary" aria-hidden="true" />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image
              src="/images/hero-room.png"
              alt="Čerstvě vymalovaný světlý pokoj s malířským válečkem na podlaze"
              width={1024}
              height={768}
              priority
              className="aspect-[4/3] h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs text-muted-foreground">
            Ilustrační obrázek – nahradíme fotkami vašich zakázek
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
