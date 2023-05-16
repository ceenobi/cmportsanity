import { groq } from 'next-sanity'
import { sanityClient } from './client'
import { AboutType, ExperienceType, HeroType, WorkType } from '@/types'

export const heroQuery = async () => {
  const query = groq`*[_type == "hero"] {
    _id,
    ...
} | order(_createdAt desc)`
  const res: HeroType[] = await sanityClient.fetch(query)
  return res
}

export const aboutQuery = async () => {
  const about = groq`*[_type == "about"] {
    _id,
     cloudinaryList[]{
        secure_url
    },
    descA,
    descB,
    stack,
    title

  } | order(_createdAt desc)`
  const res: AboutType[] = await sanityClient.fetch(about)
  return res
}
export const workQuery = async () => {
  const work = groq`*[_type == "work"] {
    _id,
     cloudinaryList[]{
        secure_url
    },
    desc,
    github,
    site,
    title,
    tag,
    featured

  } | order(_createdAt desc)`
  const res: WorkType[] = await sanityClient.fetch(work)
  return res
}

export const experienceQuery = async () => {
  const query = groq`*[_type == "experience"] {
    _id,
    company,
    year,
    title,
    website,
    role,
    caption
} | order(_createdAt desc)`
  const res: ExperienceType[] = await sanityClient.fetch(query)
  return res
}
