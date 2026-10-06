'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeading } from '@/components/section-heading'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

type Field = 'name' | 'phone' | 'email' | 'area' | 'message'
type Errors = Partial<Record<Field, string>>

function validate(data: Record<Field, string>): Errors {
  const errors: Errors = {}
  const name = data.name.trim()
  const phone = data.phone.replace(/[\s-]/g, '')
  const email = data.email.trim()
  const area = data.area.trim().replace(',', '.')
  const message = data.message.trim()

  if (!name) errors.name = 'Vyplňte prosím své jméno.'
  else if (name.length < 2) errors.name = 'Jméno musí mít alespoň 2 znaky.'

  if (!phone) errors.phone = 'Vyplňte prosím telefonní číslo.'
  else if (!/^(\+420|00420)?\d{9}$/.test(phone))
    errors.phone = 'Zadejte platné telefonní číslo, např. 777 123 456.'

  if (!email) errors.email = 'Vyplňte prosím e-mail.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = 'Zadejte platnou e-mailovou adresu.'

  if (area) {
    const n = Number(area)
    if (Number.isNaN(n) || n <= 0) errors.area = 'Plocha musí být kladné číslo.'
    else if (n > 10000) errors.area = 'Zadejte prosím plochu do 10 000 m².'
  }

  if (!message) errors.message = 'Napište nám prosím, co potřebujete vymalovat.'
  else if (message.length < 10) errors.message = 'Zpráva musí mít alespoň 10 znaků.'
  else if (message.length > 2000) errors.message = 'Zpráva může mít maximálně 2000 znaků.'

  return errors
}

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const data = Object.fromEntries(
      (['name', 'phone', 'email', 'area', 'message'] as Field[]).map((k) => [k, String(fd.get(k) ?? '')]),
    ) as Record<Field, string>
    const result = validate(data)
    setErrors(result)
    const firstInvalid = Object.keys(result)[0]
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    setSent(true)
    form.reset()
  }

  function fieldProps(name: Field) {
    return {
      id: `q-${name}`,
      name,
      'aria-invalid': errors[name] ? true : undefined,
      'aria-describedby': errors[name] ? `q-${name}-error` : undefined,
      onChange: () => errors[name] && setErrors((prev) => ({ ...prev, [name]: undefined })),
    }
  }

  function renderError(name: Field) {
    if (!errors[name]) return null
    return (
      <p id={`q-${name}-error`} className="text-sm font-medium text-destructive">
        {errors[name]}
      </p>
    )
  }

  const inputClass = 'h-12 rounded-xl bg-background px-4 text-base md:text-base'

  return (
    <section id="poptavka" aria-labelledby="poptavka-title" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          id="poptavka-title"
          eyebrow="Poptávka"
          title="Nezávazná poptávka"
          description={`Vyplňte formulář a ozveme se vám s cenou. Nebo rovnou zavolejte na ${site.phoneDisplay}.`}
        />

        {sent ? (
          <div role="status" className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-secondary p-10 text-center">
            <CheckCircle2 className="size-12 text-accent" aria-hidden="true" />
            <h3 className="text-2xl font-bold">Děkujeme za poptávku!</h3>
            <p className="max-w-md text-lg text-muted-foreground">
              Ozveme se vám co nejdříve, obvykle ještě týž den. Pokud spěcháte, zavolejte na{' '}
              <a href={site.phoneHref} className="font-semibold text-foreground underline underline-offset-4">
                {site.phoneDisplay}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Odeslat další poptávku
            </button>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl border border-border bg-background p-6 shadow-sm sm:grid-cols-2 sm:p-8"
          >
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="q-name" className="text-base">Jméno *</Label>
              <Input {...fieldProps('name')} autoComplete="name" className={inputClass} />
              {renderError('name')}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="q-phone" className="text-base">Telefon *</Label>
              <Input {...fieldProps('phone')} type="tel" inputMode="tel" autoComplete="tel" placeholder="777 123 456" className={inputClass} />
              {renderError('phone')}
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="q-email" className="text-base">E-mail *</Label>
              <Input {...fieldProps('email')} type="email" inputMode="email" autoComplete="email" placeholder="vas@email.cz" className={inputClass} />
              {renderError('email')}
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="q-area" className="text-base">
                Plocha (m²) <span className="font-normal text-muted-foreground">– nepovinné</span>
              </Label>
              <Input {...fieldProps('area')} inputMode="decimal" placeholder="např. 65" className={cn(inputClass, 'sm:max-w-48')} />
              {renderError('area')}
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <Label htmlFor="q-message" className="text-base">Zpráva *</Label>
              <Textarea
                {...fieldProps('message')}
                rows={5}
                placeholder="Co potřebujete vymalovat? Počet místností, stav stěn, preferovaný termín…"
                className="min-h-32 rounded-xl bg-background px-4 py-3 text-base md:text-base"
              />
              {renderError('message')}
            </div>
            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">* Povinné údaje</p>
              <button
                type="submit"
                className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-accent px-8 text-base font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <Send className="size-5" aria-hidden="true" />
                Odeslat poptávku
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
