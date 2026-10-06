import { Paintbrush, Phone } from 'lucide-react'
import { navItems, site } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#"
          className="flex items-center gap-2 font-bold tracking-tight text-foreground"
          aria-label={`${site.name} – úvod`}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Paintbrush className="size-5" aria-hidden="true" />
          </span>
          <span className="text-base leading-tight sm:text-lg">
            Malíř pokojů <span className="text-accent">Pokorný</span>
          </span>
        </a>

        <nav aria-label="Hlavní navigace" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={site.phoneHref}
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:px-5 sm:text-base"
          aria-label={`Zavolat na číslo ${site.phoneDisplay}`}
        >
          <Phone className="size-4" aria-hidden="true" />
          Zavolat
        </a>
      </div>
    </header>
  )
}
