import Image from 'next/image'
import { cn } from '@/lib/utils'

const logos = {
  dark: {
    src: '/images/logo-serena-dark.png',
    width: 410,
    height: 207,
  },
  light: {
    src: '/images/logo-serena-light.png',
    width: 408,
    height: 204,
  },
} as const

export function Logo({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: keyof typeof logos
}) {
  const asset = logos[variant]

  return (
    <span className={cn('inline-block w-fit max-w-full', className)}>
      <Image
        src={asset.src}
        alt="Serena Clínica"
        width={asset.width}
        height={asset.height}
        className="block h-14 w-auto max-w-none object-contain sm:h-16"
        priority={variant === 'dark'}
      />
    </span>
  )
}
