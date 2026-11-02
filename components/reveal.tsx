'use client'

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import { cn } from '@/lib/utils'

export type RevealVariant = 'fade-up' | 'fade-down' | 'fade' | 'fade-left' | 'fade-right'

type RevealProps = {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  /** Atraso em ms (útil para listas em sequência). */
  delay?: number
  as?: ElementType
}

export function Reveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  as: Component = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const style = delay > 0 ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined

  return createElement(
    Component,
    {
      ref,
      className: cn('reveal', `reveal-${variant}`, visible && 'reveal-visible', className),
      style,
    },
    children,
  )
}
