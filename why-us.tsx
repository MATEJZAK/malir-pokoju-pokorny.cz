import { BadgeCheck, Clock, HandCoins, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Dlouholetá praxe',
    text: 'Malování je naše řemeslo. Víme, jak na staré omítky, vlhké kouty i náročné barvy.',
  },
  {
    icon: Clock,
    title: 'Hotovo za jeden den',
    text: 'Menší pokoje vymalujeme obvykle za jediný den, abyste se mohli rychle vrátit domů.',
  },
  {
    icon: Sparkles,
    title: 'Perfektní úklid po práci',
    text: 'Odvezeme folie, umyjeme podlahy a vrátíme nábytek. Žádná kapka barvy navíc.',
  },
  {
    icon: HandCoins,
    title: 'Férová cena předem',
    text: 'Cenu domluvíme před začátkem práce. Žádné skryté poplatky ani překvapení na konci.',
  },
]

export function WhyUs() {
  return (
    <section id="proc-my" aria-labelledby="proc-my-title" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="proc-my-title" eyebrow="Proč my" title="Malíř, na kterého se můžete spolehnout" />
        <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {reasons.map((r, i) => (
            <li key={r.title}>
              <Reveal delay={i * 80} className="flex gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <r.icon className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{r.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{r.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
