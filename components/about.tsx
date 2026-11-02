import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const points = [
  'Consultas de no mínimo 40 minutos',
  'Retorno em até 30 dias sem custo adicional',
  'Resultados de exames e receitas pelo WhatsApp',
  'Laboratório parceiro no mesmo prédio',
]

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl" variant="fade-right">
          <Image
            src="/images/clinica.png"
            alt="Recepção da Clínica Serena, com poltronas verdes, plantas e janelas amplas"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal className="flex flex-col gap-6" variant="fade-left" delay={80}>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">A clínica</p>
          <h2 className="font-serif text-3xl leading-tight font-medium tracking-tight text-balance md:text-5xl">
            Um lugar pensado para você se sentir à vontade.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Desde 2011 cuidamos de famílias do bairro com a mesma ideia: boa medicina começa por uma boa conversa.
            Por isso a agenda é organizada para que nenhum atendimento seja apressado.
          </p>
          <ul className="flex flex-col gap-3">
            {points.map((point, index) => (
              <Reveal as="li" key={point} delay={160 + index * 60} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="leading-relaxed">{point}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
