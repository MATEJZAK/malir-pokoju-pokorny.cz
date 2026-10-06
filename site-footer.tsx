import { site } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary pb-24 text-primary-foreground md:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold">{site.name}</p>
          <p className="mt-1 text-primary-foreground/75">{site.tagline}</p>
        </div>
        <div className="flex flex-col gap-1 text-primary-foreground/85 md:text-right">
          <a href={site.phoneHref} className="font-semibold text-primary-foreground hover:underline">
            {site.phoneDisplay}
          </a>
          <address className="not-italic">
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </address>
          <p className="text-sm text-primary-foreground/70">
            © {year} {site.name}. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
}
