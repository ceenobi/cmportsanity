import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface RootLayoutProps {
  children?: React.ReactNode
}

export default function AnimateBox({ children }: RootLayoutProps) {
  return (
    <AnimationOnScroll
      animateIn='animate__fadeInUp'
      animatePreScroll={false}
      delay={3}
      animateOnce={true}
    >
      {children}
    </AnimationOnScroll>
  )
}
