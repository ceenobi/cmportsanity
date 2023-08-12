import React from 'react'
import { footerlink } from '@/utils/navlink'
import {
  Box,
  Container,
  Grid,
  GridItem,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'

interface RootLayoutProps {
  children?: React.ReactNode
}

type link = {
  id: number
  href: string
  icon?: JSX.Element
}

export default function Appwrap({ children }: RootLayoutProps) {
  return (
    <Container maxW='container.2xl' mx='auto' w='100%' py={4}>
      <Grid templateColumns='repeat(12, 1fr)' pos='relative' minHeight='100vh'>
        <GridItem colSpan={{ md: 1, xl: 2 }} hideBelow='md' px={4}>
          <VStack spacing='20px' pos='fixed' bottom='0' left={5}>
            {footerlink.map((link: link) => (
              <a key={link.id} href={link.href}>
                <Box
                  fontSize='20px'
                  _hover={{ color: 'brand.600', transition: '0.3s ease-in' }}
                  color='brand.700'
                >
                  {link.icon}
                </Box>
              </a>
            ))}
            <Box h='100px' w='1.5px' bg='brand.700' mx='auto' />
          </VStack>
        </GridItem>
        <GridItem
          colSpan={{ base: 12, md: 10, xl: 8 }}
          overflow='scroll'
          px={4}
          className={'scrollbody'}
        >
          {children}
        </GridItem>
        <GridItem colSpan={{ md: 1, xl: 2 }} hideBelow='md' px={4}>
          <VStack spacing='20px' pos='fixed' bottom='0' right={15}>
            <Link
              href='mailto:cobimbachu@gmail.com'
              alignItems='center'
              justifyContent='end'
              _hover={{ color: 'brand.600' }}
              color='brand.700'
            >
              <Text fontSize='sm' className='write'>
                cobimbachu@gmail.com
              </Text>
            </Link>
            <Box h='100px' w='1.5px' bg='brand.700' mx='auto' />
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  )
}
