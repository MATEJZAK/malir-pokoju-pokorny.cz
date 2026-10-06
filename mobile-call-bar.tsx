import { Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-accent text-base font-semibold text-accent-foreground shadow-md active:translate-y-px"
        aria-label={`Zavolat na číslo ${site.phoneDisplay}`}
      >
        <Phone className="size-5" aria-hidden="true" />
        Zavolat {site.phoneDisplay}
      </a>
    </div>
  )
}
