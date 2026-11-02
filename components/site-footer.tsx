import { Logo } from '@/components/logo'
import { Reveal } from '@/components/reveal'

export function SiteFooter() {
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-start md:justify-between">
        <Reveal className="flex flex-col items-start gap-3" variant="fade-up">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-background/70">
            Responsável técnica: Dra. Helena Duarte, CRM-SP 112.345.
          </p>
        </Reveal>
        <Reveal className="flex flex-col gap-1 text-sm text-background/70" variant="fade-up" delay={80}>
          <span>Rua das Acácias, 245, Vila Madalena, São Paulo, SP</span>
          <a href="tel:+551130000000" className="hover:text-background">
            (11) 3000-0000
          </a>
          <a href="mailto:contato@clinicaserena.com.br" className="hover:text-background">
            contato@clinicaserena.com.br
          </a>
        </Reveal>
      </div>
      <Reveal className="mx-auto mt-10 max-w-6xl px-5 text-xs text-background/50" variant="fade">
        © 2026 Clínica Serena. Todos os direitos reservados.
      </Reveal>
    </footer>
  )
}
