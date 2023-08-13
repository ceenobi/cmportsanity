import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'
import React from 'react'
// import AnimateBox from './subcomponents/animateBox'

export default function Contact() {
  return (
    <>
      <Box
        mt={{ base: '6rem', lg: '12rem' }}
        px={{ base: 'null', md: 12 }}
        id='contact'
      >
        <HStack spacing={2} justifyContent='center' mb={4}>
          <Box as='span' color='brand.600' fontSize='md'>
            04.
          </Box>{' '}
          <Text color='brand.700' fontSize='md' fontWeight='bold'>
            Up Next
          </Text>
        </HStack>
        <Heading as='h1' textAlign='center' color='brand.700'>
          Get In Touch
        </Heading>
        <Text
          w={{ base: 'full', lg: '70%' }}
          textAlign='center'
          mx='auto'
          mt={12}
          color='brand.700'
        >
          {
            "Do not hesitate, feel free to reach out, and I'll be happy to respond. I am open to ideas, connects or a simple hello. You never know what the universe has got planned."
          }
        </Text>
        <Flex justify='center' mt={12}>
          <Button
            borderColor='brand.600'
            color='brand.600'
            variant='outline'
            borderRadius='0'
            as={Link}
            href='mailto:cobimbachu@gmail.com'
          >
            Say Hello
          </Button>
        </Flex>
      </Box>
    </>
  )
}
