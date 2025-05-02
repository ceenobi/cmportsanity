import { footerlink } from '@/utils/navlink'
import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'

type link = {
  id: number
  href: string
  icon?: JSX.Element
}
export default function Footer() {
  return (
    <Flex justify='center' mt='10rem' direction='column' gap={6}>
      <HStack
        spacing='20px'
        alignItems='center'
        justifyContent='center'
        hideFrom='md'
      >
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
      </HStack>
      <Text
        as={Link}
        href='https://github.com/bchiang7/v4'
        _hover={{ color: 'brand.600', transition: '0.3s ease-in' }}
        textAlign='center'
        fontSize='12px'
        color='brand.700'
      >
        Design inspired by Brittany Chiang
      </Text>
    </Flex>
  )
}
