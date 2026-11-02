import { Baby, Bone, Brain, HeartPulse, Sparkles, Stethoscope } from 'lucide-react'

const specialties = [
  {
    icon: Stethoscope,
    name: 'Clínica geral',
    description: 'Check-ups, acompanhamento de doenças crônicas e o primeiro olhar para qualquer sintoma.',
  },
  {
    icon: HeartPulse,
    name: 'Cardiologia',
    description: 'Avaliação cardiológica, eletrocardiograma e controle de pressão arterial.',
  },
  {
    icon: Baby,
    name: 'Pediatria',
    description: 'Puericultura, vacinação e cuidado do recém-nascido à adolescência.',
  },
  {
    icon: Sparkles,
    name: 'Dermatologia',
    description: 'Saúde da pele, cabelos e unhas, com mapeamento de pintas.',
  },
  {
    icon: Bone,
    name: 'Ortopedia',
    description: 'Dores articulares, lesões esportivas e reabilitação.',
  },
  {
    icon: Brain,
    name: 'Psicologia',
    description: 'Terapia individual para adultos e adolescentes, presencial ou online.',
  },
]

export function Specialties() {
  return (
    <section id="especialidades" className="scroll-mt-20 bg-card py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">Especialidades</p>
            <h2 className="font-serif text-3xl leading-tight font-medium tracking-tight text-balance md:text-5xl">
              Tudo o que sua família precisa, no mesmo lugar.
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Seu histórico é compartilhado entre os especialistas, para que ninguém precise contar a mesma história
            duas vezes.
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map(({ icon: Icon, name, description }) => (
            <li key={name} className="group flex flex-col gap-4 bg-card p-7 transition-colors hover:bg-secondary">
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
