import { Flex, Grid, GridItem, Icon, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'
import AnimateBox from './animateBox'
import { WorkType } from '@/types'

interface IProps {
  highlightWorks: WorkType[]
}

export default function ProjectHiglights({ highlightWorks }: IProps) {
  const boxStyle = {
    bg: 'brand.400',
    boxShadow: 'lg',
    h: {
      base: '300px',
      lg: '350px',
    },
    w: 'full',
    p: 4,
    _hover: {
      xl: {
        transform: 'scale(1.051)',
        transition: '0.3s ease-in',
        border: '1px solid',
        borderColor: 'brand.600',
        '.kk': {
          color: 'brand.600',
          transition: '0.3s ease-in',
        },
      },
    },
  }
  return (
    <AnimateBox>
      <Text
        color='brand.700'
        fontSize={{ base: 'md', lg: '2xl' }}
        fontWeight='bold'
        textAlign='center'
        mb={8}
      >
        Other Highlights
      </Text>
      <Grid templateColumns='repeat(12, 1fr)' gap={{ base: 0, lg: 8 }}>
        {highlightWorks.map((project) => (
          <GridItem colSpan={{ base: 12, lg: 4 }} mb={4} key={project._id}>
            <Flex direction='column' justify='space-between' sx={boxStyle}>
              <Flex justify='end' align='end' gap={8}>
                <Link
                  href={project.github}
                  isExternal
                  _hover={{ color: 'brand.600', transition: '0.3s ease-in' }}
                >
                  <Icon as={FiGithub} boxSize='22px' />
                </Link>
                <Link
                  href={project.site}
                  isExternal
                  _hover={{ color: 'brand.600', transition: '0.3s ease-in' }}
                >
                  <Icon as={AiOutlineLink} boxSize='22px' />
                </Link>
              </Flex>
              <Link href={project.site} isExternal>
                <Text
                  color={{ base: 'brand.700', xl: 'brand.700' }}
                  fontSize='xl'
                  fontWeight='bold'
                  className='kk'
                >
                  {project.title}
                </Text>
              </Link>
              <Link href={project.site} isExternal>
                <Text fontSize='sm' color='brand.700'>
                  {project.desc}
                </Text>
              </Link>
              <Text fontSize='sm' color={{base:'brand.600', lg:'brand.700'}}>
                {project.tag.join(' ')}
              </Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </AnimateBox>
  )
}
