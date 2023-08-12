import { Box, Flex, HStack, Icon,  Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

export default function featuredProject({
  direction,
  textAlign,
  textAlignDesc,
  left,
  right,
  rightDesc,
  leftDesc,
  jContent,
  imgLink,
  src,
  alt,
  title,
  desc,
  tag,
  github,
  site,
}: any) {
  return (
    <Flex
      pos='relative'
      justify='space-between'
      gap={4}
      direction={direction}
      mb={{ base: '4rem', lg: '8rem' }}
    >
      <Box hideBelow='lg'>
        <Link href={imgLink}>
          <Box
            w={{ lg: '450px', '2xl': '600px' }}
            h='350px'
            bg='brand.600'
            pos='absolute'
            top='0'
            left={left}
            right={right}
            opacity='0.7'
            borderRadius='md'
            zIndex={3}
            _hover={{
              bg: 'brand.600',
              zIndex: 3,
              opacity: '0',
              transition: '0.3s ease-in',
            }}
          />

          <Box
            w={{ lg: '450px', '2xl': '600px' }}
            h='350px'
            _hover={{
              opacity: '1',
              pos: 'relative',
              zIndex: 4,
              transition: '0.3s ease-in',
            }}
            pos='relative'
            borderRadius='md'
          >
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: 'fill', borderRadius: '7px' }}
              blurDataURL='URL'
              placeholder='blur'
            />
          </Box>
        </Link>
      </Box>
      <Flex
        justify='space-between'
        direction='column'
        p={{ base: 4, lg: 0 }}
        boxShadow={{ base: 'xl', lg: 'none' }}
      >
        <Box
          pos='absolute'
          top='0'
          left='0'
          w='full'
          h='full'
          bg='brand.600'
          opacity={0.1}
          zIndex={-3}
          hideFrom='lg'
        />
        <Box w='full' textAlign={textAlign} mb={4}>
          <Text color='brand.600'>Featured Project</Text>
          <Text
            color='brand.700'
            fontSize={{ base: 'xl', lg: '2xl' }}
            fontWeight='bold'
          >
            {title}
          </Text>
        </Box>
        <Text
          fontSize='sm'
          bg={{ base: 'none', lg: 'brand.400' }}
          color='brand.700'
          textAlign={textAlignDesc}
          p={{ base: 0, lg: 5 }}
          w={{ base: 'full', lg: '60%', xl: '65%' }}
          pos={{ base: 'relative', lg: 'absolute' }}
          top={{ base: 'null', lg: '30%' }}
          right={rightDesc}
          left={leftDesc}
          zIndex={{ base: 'null', lg: 4 }}
        >
          {desc}
        </Text>
        <Box mt={4}>
          <HStack spacing={2} color='brand.700' mb={6} flexWrap='wrap'>
            <Text fontSize='sm'>{tag}</Text>
          </HStack>
          <HStack spacing={4} color='brand.700' justifyContent={jContent}>
            <Link
              href={github}
              isExternal
              _hover={{ color: 'brand.600', transition: '0.3s ease-in' }}
            >
              <Icon as={FiGithub} boxSize='22px' />
            </Link>
            <Link
              href={site}
              isExternal
              _hover={{ color: 'brand.600', transition: '0.3s ease-in' }}
            >
              <Icon as={AiOutlineLink} boxSize='22px' />
            </Link>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  )
}
