import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const doctors = [
  {
    name: 'Dra. Helena Duarte',
    role: 'Clínica geral e diretora médica',
    crm: 'CRM-SP 112.345',
    image: '/images/dra-helena.png',
  },
  {
    name: 'Dr. Rafael Nogueira',
    role: 'Cardiologista',
    crm: 'CRM-SP 154.872',
    image: '/images/dr-rafael.png',
  },
  {
    name: 'Dra. Camila Sato',
    role: 'Pediatra',
    crm: 'CRM-SP 168.204',
    image: '/images/dra-camila.png',
  },
]

export function Team() {
  return (
    <section id="equipe" className="scroll-mt-20 bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5">
        <Reveal className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-accent uppercase">Equipe</p>
          <h2 className="font-serif text-3xl leading-tight font-medium tracking-tight text-balance md:text-5xl">
            Quem vai cuidar de você.
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground/80">
            Profissionais com formação nas principais universidades do país e que fazem questão de conhecer seus
            pacientes pelo nome.
          </p>
        </Reveal>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <Reveal as="li" key={doctor.name} delay={index * 100} className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-primary-foreground/10">
                <Image
                  src={doctor.image || '/placeholder.svg'}
                  alt={`Retrato de ${doctor.name}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-xl font-medium">{doctor.name}</h3>
                <p className="text-primary-foreground/80">{doctor.role}</p>
                <p className="text-sm text-primary-foreground/60">{doctor.crm}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
