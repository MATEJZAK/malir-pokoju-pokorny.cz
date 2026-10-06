import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { LocalBusinessSchema } from '@/components/local-business-schema'
import { MobileCallBar } from '@/components/mobile-call-bar'
import { ProcessSteps } from '@/components/process-steps'
import { QuoteForm } from '@/components/quote-form'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Testimonials } from '@/components/testimonials'
import { WhyUs } from '@/components/why-us'

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <a
        href="#obsah"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Přeskočit na obsah
      </a>
      <SiteHeader />
      <main id="obsah">
        <Hero />
        <Services />
        <WhyUs />
        <ProcessSteps />
        <Testimonials />
        <QuoteForm />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  )
}
