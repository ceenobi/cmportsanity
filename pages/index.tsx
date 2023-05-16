import type { GetServerSideProps } from 'next'
import AboutMe from '@/components/aboutMe'
import Hero from '@/components/hero'
import Experience from '@/components/experience'
import Work from '@/components/work'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import {
  aboutQuery,
  experienceQuery,
  heroQuery,
  workQuery,
} from '@/lib/queries'
import { AboutType, ExperienceType, HeroType, WorkType } from '@/types'

interface IProps {
  herodata: HeroType[]
  aboutdata: AboutType[]
  workdata: WorkType[]
  experiencedata: ExperienceType[]
}

export default function Home({
  herodata,
  aboutdata,
  workdata,
  experiencedata,
}: IProps) {
  return (
    <>
      <Hero herodata={herodata} />
      <AboutMe aboutdata={aboutdata} />
      <Experience experiencedata={experiencedata} />
      <Work workdata={workdata} />
      <Contact />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const herodata = await heroQuery()
  const aboutdata = await aboutQuery()
  const workdata = await workQuery()
  const experiencedata = await experienceQuery()
  return {
    props: {
      herodata,
      aboutdata,
      workdata,
      experiencedata,
    },
  }
}
