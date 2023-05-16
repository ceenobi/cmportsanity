import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export const navlink = [
  {
    id: 1,
    href: 'about',
    name: 'About',
    tag: '01',
  },
  {
    id: 2,
    href: 'experience',
    name: 'Experience',
    tag: '02',
  },
  {
    id: 3,
    href: 'work',
    name: 'Work',
    tag: '03',
  },
  {
    id: 4,
    href: 'contact',
    name: 'Contact',
    tag: '04',
  },
]

export const footerlink = [
  {
    id: 1,
    href: 'https://github.com/ceenobi',
    icon: <FiGithub />,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/charles-mbachu-40bb66173/',
    icon: <FiLinkedin />,
  },
  {
    id: 3,
    href: 'https://www.twitter.com/ceenobii',
    icon: <FiTwitter />,
  },
]

export const techstack = [
  {
    id: 1,
    name: 'JavaScript (ES6+)',
  },
  {
    id: 2,
    name: 'React',
  },
  {
    id: 3,
    name: 'Node js',
  },
  {
    id: 4,
    name: 'TypeScript',
  },
  {
    id: 4,
    name: 'Mongodb',
  },
  {
    id: 5,
    name: 'Sanity cms',
  },
]

export const codetask = [
  {
    id: 1,
    role: 'Create lesson plans, projects, assignments, code challenges, and exercises',
  },
  {
    id: 2,
    role: 'Monitor student participation and performance',
  },
  {
    id: 3,
    role: 'Delivering feedback to students to help them improve',
  },
  {
    id: 4,
    role: 'Collaborating with fellow instructors to enhance the curriculum',
  },
]
export const zuritask = [
  {
    id: 1,
    role: 'Completing series of weekly tasks on CSS and Javascript to improve logical reasoning',
  },
  {
    id: 2,
    role: 'Collaborate with designers, and other programmers to transform creative concepts into reality for clients',
  },
  {
    id: 3,
    role: 'Work using figma to interprete and edit designs',
  },
]

export const project = [
  {
    id: 1,
    isFeatured: true,
    img: 'https://res.cloudinary.com/ceenobi/image/upload/v1682372769/portfolio/Web_capture_24-4-2023_223657_tmdbmoviez.netlify.app_bzl6rr_sqjdow.webp',
    title: 'TMDB Movies',
    desc: ' A web app for viewing all relevant information about a movie,watch the movie trailer and see recommendatons, as well as view details of casts of the movie.',
    tag: ['React', 'TMDB-Api', 'React-player'],
    github: 'https://github.com/ceenobi/tmdb-janwkdy',
    site: 'https://tmdbmoviez.netlify.app/',
  },
]
export const projectB = [
  {
    id: 1,
    isFeatured: true,
    img: 'https://res.cloudinary.com/ceenobi/image/upload/v1682372874/portfolio/Web_capture_24-4-2023_223921_the-footshop.netlify.app_zqo2ep_embgn1.webp',
    title: 'ECommerce Shop',
    desc: ' A fullstack ecommerce site built using the MERN stack, as well as paypal integration for payments.',
    tag: ['React', 'Node js', 'Mongodb', 'React-bootstrap', 'Cloudinary'],
    github: 'https://github.com/ceenobi/footstore',
    site: 'https://the-footshop.netlify.app/',
  },
]
export const projectC = [
  {
    id: 1,
    isFeatured: true,
    img: 'https://res.cloudinary.com/ceenobi/image/upload/v1682372831/portfolio/Web_capture_24-4-2023_224053_realestate-psi.vercel.app_dyesah_tlngir.webp',
    title: 'Rental Homes',
    desc: ' A website displaying properties for rent, buy and other hospitable amenities. Data is pulled from Bayut on Rapidapi.',
    tag: ['Next Js', 'Rapidapi', 'Chakra UI'],
    github: 'https://github.com/ceenobi/realestate',
    site: 'https://realestate-psi.vercel.app/',
  },
]

export const projectHighlights = [
  {
    id: 1,
    github: 'https://github.com/ceenobi/ownatekaccessories',
    site: 'https://ecommerce-sanity-taupe.vercel.app/',
    title: 'Build an Ecommerce Store using Headless CMS',
    desc: 'Using Sanity CMS, I was able to build this site without having to use node and express for my backend.',
    tag: ['Next Js', 'Sanity', 'Chakra UI', 'Stripe', 'Cloudinary'],
  },
  {
    id: 2,
    github: 'https://github.com/ceenobi/tiktok-clone',
    site: 'https://the-buzz.netlify.app/',
    title: 'Building a Social app using Sanity',
    desc: 'Tried my hands on social media site, using firebase for user authentication. Watch, comment and upload videos.',
    tag: ['React', 'Sanity', 'Firebase'],
  },
  {
    id: 3,
    github: 'https://github.com/ceenobi/tmdb-clone',
    site: 'https://tubinedb.vercel.app/',
    title: 'TMDB Clone',
    desc: 'I cloned TMDB site to an extent, a little bit different from my other movie project using TMDB api. Users can log in and save a show to their account.',
    tag: ['Next Js', 'Firebase', 'Chakra UI', 'TMDB API'],
  },
  {
    id: 4,
    github: 'https://github.com/ceenobi/tmdb-clone',
    site: 'https://tubinedb.vercel.app/',
    title: 'TMDB Clone',
    desc: 'I cloned TMDB site to an extent, a little bit different from my other movie project using TMDB api. Users can log in and save a show to their account.',
    tag: ['Next Js', 'Firebase', 'Chakra UI', 'TMDB API'],
  },
]
