import React from 'react'
import { Button, Flex, Heading, Text, Link, Box } from '@chakra-ui/react'
import { HeroType } from '@/types'

interface IProps {
  herodata: HeroType[]
}

export default function Hero({ herodata }: IProps) {
  return (
    <Flex
      direction='column'
      gap={3}
      justify='center'
      align='start'
      minH={{ base: '800px', lg: '900px' }}
      px={{ base: 'null', md: 12 }}
    >
      <Text
        color='brand.600'
        className='animate__animated animate__fadeInDown animate__delay-0.7s'
      >
        Hi, my name is
      </Text>
      {herodata.map((data) => (
        <Box key={data._id}>
          <Box>
            <Heading
              as='h1'
              size={{ base: 'xl', md: '3xl', lg: '4xl' }}
              color='brand.700'
              className='animate__animated animate__fadeInDown animate__delay-0.9s'
            >
              {data.title}
            </Heading>

            <Heading
              as='h1'
              size={{ base: 'xl', md: '3xl', lg: '4xl' }}
              color='brand.500'
              mb={4}
              className='animate__animated animate__fadeInDown animate__delay-1s'
            >
              {data.caption}
            </Heading>
          </Box>

          <Text
            color='brand.500'
            w={{ base: 'full', md: '100%', xl: '70%' }}
            mb={8}
            className='animate__animated animate__fadeInDown animate__delay-1s'
          >
            {data.desc.slice(0, 226)}{' '}
            <Box as='span' color='brand.600'>
              <Link href='https://www.techstudioacademy.com'>
                Techstudio Consults.
              </Link>
            </Box>
          </Text>
        </Box>
      ))}

      <Button
        borderColor='brand.600'
        color='brand.600'
        variant='outline'
        borderRadius='0'
        as={Link}
        href='mailto:cobimbachu@gmail.com'
        className='animate__animated animate__fadeInDown animate__delay-1s'
      >
        Say Hello
      </Button>
    </Flex>
  )
}
