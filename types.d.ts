import { Experience } from '@/components/experience'
export interface HeroType {
  _id: Key | null | undefined
  desc: string
  title: string
  caption: string
}

export interface AboutType {
  _id: Key | null | undefined
  descA: string
  descB: string
  title: string
  cloudinaryList: any
  stack: string[]
}

export interface WorkType {
  _id: Key | null | undefined
  desc: string
  title: string
  github: string
  site: string
  cloudinaryList: any
  tag: string[]
  featured: boolean
}

export interface ExperienceType {
  _id: Key | null | undefined
  company: string
  year: string
  title: string
  website: string
  caption: string
  role: string[]
}
