import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Specialties } from '@/components/specialties'
import { About } from '@/components/about'
import { Team } from '@/components/team'
import { Testimonials } from '@/components/testimonials'
import { Booking } from '@/components/booking'
import { Faq } from '@/components/faq'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Specialties />
        <About />
        <Team />
        <Testimonials />
        <Booking />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
