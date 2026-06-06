import { Hero } from '@/components/sections/Hero'
import { SkillsBar } from '@/components/sections/SkillsBar'
import { Vision } from '@/components/sections/Vision'
import { Mission } from '@/components/sections/Mission'
import { Principles } from '@/components/sections/Principles'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsBar />
      <Vision />
      <Mission />
      <Principles />
      <Footer />
    </main>
  )
}
