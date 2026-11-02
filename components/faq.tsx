import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'Quais convênios vocês aceitam?',
    a: 'Atendemos Bradesco Saúde, SulAmérica, Amil, Porto Seguro e Unimed, além de consultas particulares com reembolso facilitado.',
  },
  {
    q: 'Preciso chegar com antecedência?',
    a: 'Recomendamos chegar 10 minutos antes para o cadastro na primeira consulta. Nas próximas, basta chegar no horário.',
  },
  {
    q: 'Vocês fazem teleconsulta?',
    a: 'Sim. Clínica geral, psicologia e retornos de outras especialidades podem ser feitos por vídeo.',
  },
  {
    q: 'Como funciona o retorno?',
    a: 'O retorno para mostrar exames ou ajustar o tratamento é gratuito em até 30 dias após a consulta.',
  },
]

export function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12">
        <Reveal className="flex flex-col gap-4 md:col-span-4">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">Dúvidas</p>
          <h2 className="font-serif text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl">
            Perguntas frequentes.
          </h2>
        </Reveal>
        <div className="flex flex-col md:col-span-8">
          {faqs.map((item, index) => (
            <Reveal as="details" key={item.q} delay={index * 70} className="group border-b border-border py-5 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pt-3 leading-relaxed text-muted-foreground">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
