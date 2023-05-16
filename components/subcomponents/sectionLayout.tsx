import { Box, Divider, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function SectionLayout({ id, number, title, children }: any) {
  return (
    <Box
      mt={{ base: '6rem', lg: '12rem' }}
      px={{ base: 'null', md: 12 }}
      id={id}
    >
      <HStack spacing={2}>
        <Box as='span' color='brand.600' fontSize='lg'>
          {number}.
        </Box>{' '}
        <Text
          color='brand.700'
          fontSize={{ base: 'md', lg: '2xl' }}
          fontWeight='bold'
        >
          {title}
        </Text>
        <Divider w='150px' />
      </HStack>
      {children}
    </Box>
  )
}
