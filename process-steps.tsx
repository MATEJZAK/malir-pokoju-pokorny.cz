import { CalendarCheck, Phone, PaintRoller } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'

const steps = [
  {
    icon: Phone,
    title: 'Zavolejte nám',
    text: `Zavolejte na ${site.phoneDisplay} nebo pošlete poptávku. Probereme, co potřebujete vymalovat.`,
  },
  {
    icon: CalendarCheck,
    title: 'Domluvíme termín a cenu',
    text: 'Podle plochy a stavu stěn vám řekneme férovou cenu předem a najdeme termín, který vám vyhovuje.',
  },
  {
    icon: PaintRoller,
    title: 'Vymalujeme a uklidíme',
    text: 'Přijedeme včas, vše zakryjeme, vymalujeme a po sobě důkladně uklidíme.',
  },
]

export function ProcessSteps() {
  return (
    <section id="postup" aria-labelledby="postup-title" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold tracking-wider text-teal-300 uppercase">
            Jak to probíhá
          </p>
          <h2 id="postup-title" className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Tři kroky k novým stěnám
          </h2>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 100} className="h-full">
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-7">
                  <span
                    className="absolute top-6 right-6 text-5xl font-extrabold text-white/10"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <s.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">
                    <span className="sr-only">Krok {i + 1}: </span>
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-primary-foreground/80">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
