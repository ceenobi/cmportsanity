import React, { useEffect, useState, lazy } from 'react'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Spinner from '@/utils/spinner'
const Layout = lazy(() => import('@/components/layout'))

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState<boolean>(true)
  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  return (
    <ChakraProvider theme={theme}>
      <React.Suspense fallback={<Spinner />}>
        <Layout title={''} description={''}>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </React.Suspense>
    </ChakraProvider>
  )
}
