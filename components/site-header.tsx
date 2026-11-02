'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'

const links = [
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sobre', label: 'A clínica' },
  { href: '#equipe', label: 'Equipe' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between px-5 sm:h-20">
        <a href="#" aria-label="Clínica Serena, início">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button render={<a href="#agendar" />} nativeButton={false} className="hidden h-10 rounded-full px-5 md:inline-flex">
            Agendar consulta
          </Button>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Mobile" className="border-t border-border md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-3">
              <Button
                render={<a href="#agendar" onClick={() => setOpen(false)} />}
                nativeButton={false}
                className="h-11 w-full rounded-full"
              >
                Agendar consulta
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
