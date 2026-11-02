import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('inline-block w-fit max-w-full', className)}>
      <Image
        src="/images/logo-serena.png"
        alt="Serena Clínica"
        width={410}
        height={207}
        className="block h-14 w-auto max-w-none object-contain sm:h-16"
        priority
      />
    </span>
  )
}
