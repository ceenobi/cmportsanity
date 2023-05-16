import Head from 'next/head'
import React from 'react'
import Navbar from './navbar'
import Appwrap from './appwrap'
import { JetBrains_Mono } from 'next/font/google'

const ibm = JetBrains_Mono({ subsets: ['latin'] })

type Props = {
  title: string
  description: string
  children?: React.ReactNode
}

export default function Layout({ title, description, children }: Props) {
  return (
    <>
      <Head>
        <title>
          {title ? `${title}` : 'Charles Mbachu'}
        </title>
        {description && <meta name='description' content={description}></meta>}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={ibm.className}>
        <Navbar />
      </header>
      <main className={ibm.className}>
        <Appwrap>{children}</Appwrap>
      </main>
    </>
  )
}
