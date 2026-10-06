import { Building2, Home, PaintRoller, Wrench } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: PaintRoller,
    title: 'Malování bytů a pokojů',
    text: 'Od jednoho pokoje po celý byt. Zakryjeme nábytek i podlahy a vymalujeme čistě a bez šmouh.',
  },
  {
    icon: Home,
    title: 'Malování domů',
    text: 'Rodinné domy, schodiště i podkroví. Poradíme s výběrem barev a vhodných materiálů.',
  },
  {
    icon: Building2,
    title: 'Malování kanceláří a firem',
    text: 'Kanceláře, obchody a provozovny. Přizpůsobíme se vašemu provozu – i o víkendu.',
  },
  {
    icon: Wrench,
    title: 'Drobné opravy stěn',
    text: 'Štukování, sádrování, vyspravení prasklin a děr po hmoždinkách před samotným malováním.',
  },
]

export function Services() {
  return (
    <section id="sluzby" aria-labelledby="sluzby-title" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="sluzby-title"
          eyebrow="Služby"
          title="Co pro vás vymalujeme"
          description="Malujeme interiéry bytů, domů a firem po celé Praze."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 80} className="h-full">
                <article className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <s.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
