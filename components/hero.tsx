import Image from 'next/image'
import { ArrowRight, CalendarCheck, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 pt-12 pb-20 md:grid-cols-12 md:items-center md:pt-20 md:pb-28">
      <div className="flex flex-col gap-7 md:col-span-6">
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
          <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
          Atendimento particular e principais convênios
        </p>
        <h1 className="font-serif text-4xl leading-tight font-medium tracking-tight text-balance md:text-6xl md:leading-[1.05]">
          Medicina com tempo para{' '}
          <span className="italic text-primary">ouvir você</span>.
        </h1>
        <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
          Consultas sem pressa, especialistas que conversam entre si e um acompanhamento que continua depois que
          você sai do consultório.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#agendar" className={cn(buttonVariants(), 'h-12 rounded-full px-6 text-base')}>
            Agendar consulta
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#especialidades"
            className={cn(buttonVariants({ variant: 'outline' }), 'h-12 rounded-full bg-transparent px-6 text-base')}
          >
            Ver especialidades
          </a>
        </div>
      </div>

      <div className="relative md:col-span-6">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[5/6]">
          <Image
            src="/images/hero.png"
            alt="Médica conversando com uma paciente em um consultório iluminado"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl bg-card p-4 shadow-xl shadow-foreground/10 md:-left-10 md:bottom-10">
          <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <CalendarCheck className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <span className="text-xs tracking-wide text-muted-foreground uppercase">Próximo horário</span>
            <span className="font-medium text-card-foreground">Hoje, às 16h30</span>
          </div>
        </div>
      </div>
    </section>
  )
}
