import React from 'react'
import { Box, Flex, HStack, Text, VStack, Icon, Link } from '@chakra-ui/react'
import { BiRightArrow } from 'react-icons/bi'
import AnimateBox from './subcomponents/animateBox'
import SectionLayout from './subcomponents/sectionLayout'
import { AboutType } from '@/types'
import Image from 'next/image'

interface IProps {
  aboutdata: AboutType[]
}

export default function AboutMe({ aboutdata }: IProps) {
  return (
    <AnimateBox>
      <SectionLayout id='about' number='01' title='About me'>
        {aboutdata.map((data) => (
          <Flex
            mt={6}
            justify='space-between'
            direction={{ base: 'column', lg: 'row' }}
            key={data._id}
          >
            <Box mb='3rem' color='brand.700'>
              <Text w={{ base: 'full', lg: '78%' }}>
                {data.descA}
                <br /> <br />
                {data.descB.slice(0, 109)}
                <Box as='span' color='brand.600'>
                  <Link href='https://techstudioacademy.com' isExternal>
                    Techstudio
                  </Link>
                </Box>
                {data.descB.slice(119)}
              </Text>
              <br /> <br />
              <Text mb={4}>{data.title}</Text>
              <Flex flexWrap='wrap' gap={8} mb={4}>
                <VStack spacing={2} alignItems='start'>
                  {data.stack.slice(0, 3).map((stack: string, index) => (
                    <HStack spacing={2} key={index}>
                      <Icon as={BiRightArrow} boxSize={4} color='brand.600' />
                      <Text fontSize='sm'>{stack}</Text>
                    </HStack>
                  ))}
                </VStack>
                <VStack spacing={2} alignItems='start'>
                  {data.stack.slice(3, 6).map((stack: string, index) => (
                    <HStack spacing={2} key={index}>
                      <Icon as={BiRightArrow} boxSize={4} color='brand.600' />
                      <Text fontSize='sm'>{stack}</Text>
                    </HStack>
                  ))}
                </VStack>
              </Flex>
            </Box>
            <Box
              pos='relative'
              w={{ base: '60vw', md: '300px' }}
              mx='auto'
              _hover={{
                transform: 'scaleX(1.051)',
                transition: '0.3s ease-in',
              }}
            >
              <Box
                w={{ base: '60vw', md: '300px' }}
                h='300px'
                border='2px solid'
                borderColor='brand.600'
                borderRadius='md'
              />
              <Box
                w={{ base: '60vw', md: '300px' }}
                h='300px'
                bg='brand.600'
                borderRadius='md'
                pos='absolute'
                top='-5'
                left='-5'
                zIndex={3}
                opacity='0.7'
                _hover={{
                  bg: 'brand.600',
                  zIndex: 3,
                  opacity: '0',
                  transition: '0.3s ease-in',
                }}
              />
              <Box
                w={{ base: '60vw', md: '300px' }}
                h='300px'
                pos='absolute'
                top='-5'
                left='-5'
                borderRadius='md'
                _hover={{ opacity: '1' }}
              >
                <Image
                  src={data?.cloudinaryList[0]?.secure_url}
                  alt='My profile pic'
                  fill
                  style={{ objectFit: 'cover', borderRadius: '7px' }}
                  blurDataURL='URL'
                  placeholder='blur'
                />
              </Box>
            </Box>
          </Flex>
        ))}
      </SectionLayout>
    </AnimateBox>
  )
}
