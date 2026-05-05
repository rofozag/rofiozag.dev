import { Hero }     from '@/components/sections/Hero'
import { Ticker }   from '@/components/sections/Ticker'
import { Services } from '@/components/sections/Services'
import { Work }     from '@/components/sections/Work'
import { Process }  from '@/components/sections/Process'
import { Pricing }  from '@/components/sections/Pricing'
import { CTA }      from '@/components/sections/CTA'
import { Contact }  from '@/components/sections/Contact'
import { Footer }   from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />

      <div className="divider" style={{ margin: '0 72px' }} />
      <Services />

      <div className="divider" style={{ margin: '0 72px' }} />
      <Work />

      <div className="divider" style={{ margin: '0 72px' }} />
      <Process />

      <div className="divider" style={{ margin: '0 72px' }} />
      <Pricing />

      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
