'use client'

import type { FormEvent } from 'react'
import { Clock, MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'

const WHATSAPP_NUMBER = '5511999990000'

const specialtyOptions = ['Clínica geral', 'Cardiologia', 'Pediatria', 'Dermatologia', 'Ortopedia', 'Psicologia']

const fieldClass =
  'h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground outline-none transition focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30'

export function Booking() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Olá! Gostaria de agendar uma consulta.',
      `Nome: ${data.get('nome')}`,
      `Telefone: ${data.get('telefone')}`,
      `Especialidade: ${data.get('especialidade')}`,
      `Período preferido: ${data.get('periodo')}`,
    ].join('\n')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')
  }

  return (
    <section id="agendar" className="scroll-mt-20 bg-secondary py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:gap-16">
        <Reveal className="flex flex-col gap-8" variant="fade-right">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">Agendamento</p>
            <h2 className="font-serif text-3xl leading-tight font-medium tracking-tight text-balance md:text-5xl">
              Marque sua consulta em poucos minutos.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Preencha seus dados e nossa recepção confirma o melhor horário com você pelo WhatsApp.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="leading-relaxed">
                Rua das Acácias, 245, Vila Madalena
                <br />
                São Paulo, SP
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="leading-relaxed">
                Segunda a sexta, 7h às 20h
                <br />
                Sábado, 8h às 13h
              </span>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:+551130000000" className="leading-relaxed underline-offset-4 hover:underline">
                (11) 3000-0000
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal variant="fade-left" delay={100}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-3xl bg-card p-6 md:p-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-sm font-medium">
              Nome completo
            </label>
            <input id="nome" name="nome" required autoComplete="name" className={fieldClass} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="telefone" className="text-sm font-medium">
              Telefone / WhatsApp
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              placeholder="(11) 90000-0000"
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="especialidade" className="text-sm font-medium">
              Especialidade
            </label>
            <select id="especialidade" name="especialidade" required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Selecione
              </option>
              {specialtyOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <fieldset className="flex flex-col gap-2">
            <legend className="mb-2 text-sm font-medium">Período preferido</legend>
            <div className="grid grid-cols-3 gap-2">
              {['Manhã', 'Tarde', 'Noite'].map((p, i) => (
                <label
                  key={p}
                  className="flex h-11 cursor-pointer items-center justify-center rounded-xl border border-input text-sm transition has-checked:border-primary has-checked:bg-primary has-checked:text-primary-foreground"
                >
                  <input type="radio" name="periodo" value={p} defaultChecked={i === 0} className="sr-only" />
                  {p}
                </label>
              ))}
            </div>
          </fieldset>
          <Button type="submit" className="mt-2 h-12 rounded-full text-base">
            Solicitar agendamento
          </Button>
          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            Você será direcionado ao WhatsApp da recepção.
          </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
