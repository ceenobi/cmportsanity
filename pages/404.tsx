import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

export default function Custom404() {
  return (
    <Flex
      direction='column'
      gap={4}
      justify='center'
      align='center'
      minH={{ base: '800px', lg: '900px' }}
      px={{ base: 'null', md: 12 }}
      className='animate__animated animate__fadeInDown'
    >
      <Heading
        as='h1'
        size={{ base: '2xl', sm: '3xl', lg: '4xl' }}
        color='brand.600'
      >
        404
      </Heading>
      <Text>Page Not Found</Text>
      <Button
        borderColor='brand.600'
        color='brand.600'
        variant='outline'
        borderRadius='0'
        as={Link}
        href='/'
      >
        Go Home
      </Button>
    </Flex>
  )
}
