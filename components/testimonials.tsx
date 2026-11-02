import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    quote:
      'Foi a primeira vez que saí de uma consulta sem nenhuma dúvida. A Dra. Helena explicou tudo com calma e ainda me mandou um resumo pelo WhatsApp.',
    name: 'Marta Ribeiro',
    detail: 'Paciente há 6 anos',
  },
  {
    quote:
      'Levo meus dois filhos com a Dra. Camila desde que nasceram. Eles adoram ir à consulta, o que diz muito.',
    name: 'Bruno Alves',
    detail: 'Pai do Theo e da Lia',
  },
  {
    quote:
      'Consegui consulta com o cardiologista na mesma semana e fiz os exames no próprio prédio. Muito prático.',
    name: 'Sérgio Mendes',
    detail: 'Paciente de cardiologia',
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5">
        <Reveal className="flex flex-col gap-4 text-center">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">Depoimentos</p>
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight font-medium tracking-tight text-balance md:text-5xl">
            O que nossos pacientes contam.
          </h2>
        </Reveal>

        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Reveal as="li" key={t.name} delay={index * 90}>
              <figure className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-card p-7">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1 text-accent" aria-label="Avaliação: 5 de 5 estrelas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="font-serif text-lg leading-relaxed text-card-foreground">
                    {`“${t.quote}”`}
                  </blockquote>
                </div>
                <figcaption className="flex flex-col">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-sm text-muted-foreground">{t.detail}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
