import { Quote, Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

// TODO: replace with real reviews (copy exact texts and names from Google reviews with permission)
const testimonials = [
  {
    text: 'Pokoj byl vymalovaný za jeden den a ani jsem nepoznala, že tu někdo pracoval – všechno zakryté a po práci uklizeno. Přesně a rychle.',
    author: 'Zákaznice, Praha 4',
    tag: 'Rychlost a úklid',
  },
  {
    text: 'Pan Pokorný se přizpůsobil našemu termínu, přijel na minutu přesně a cena byla přesně taková, jakou jsme si domluvili předem.',
    author: 'Zákazník, Praha 2',
    tag: 'Flexibilita a férová cena',
  },
  {
    text: 'Malovali jsme celou kancelář. Rovné hrany, žádné šmouhy ani kapky na podlaze. Precizní práce, určitě objednáme znovu.',
    author: 'Firemní klient, Praha 5',
    tag: 'Preciznost',
  },
]

export function Testimonials() {
  return (
    <section id="reference" aria-labelledby="reference-title" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="reference-title"
          eyebrow="Reference"
          title="Co o nás říkají zákazníci"
          description={`Hodnocení 5,0 z 5 na základě ${site.rating.count} recenzí na Google.`}
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.author}>
              <Reveal delay={i * 100} className="h-full">
                <figure className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex" role="img" aria-label="Hodnocení 5 z 5 hvězd">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>
                    <Quote className="size-6 text-secondary-foreground/20" aria-hidden="true" />
                  </div>
                  <blockquote className="flex-1 text-lg leading-relaxed text-pretty">
                    {`„${t.text}“`}
                  </blockquote>
                  <figcaption className="border-t border-border pt-4">
                    <p className="font-semibold">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.tag}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
