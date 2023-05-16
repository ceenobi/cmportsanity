import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { BiRightArrow } from 'react-icons/bi'
import AnimateBox from './subcomponents/animateBox'
import SectionLayout from './subcomponents/sectionLayout'
import { ExperienceType } from '@/types'

interface IProps {
  experiencedata: ExperienceType[]
}

export default function Experience({ experiencedata }: IProps) {
  const [activeBtn, setActiveBtn] = useState(0)
  const [tekstudio, setTekstudio] = useState(true)
  const [zuri, setZuri] = useState(false)

  const filterCaption = experiencedata.map((work) => work.caption)
  const filterTechstudio = experiencedata.filter(
    (work) => work.caption === 'Techstudio'
  )
  const filterZuri = experiencedata.filter((work) => work.caption === 'Zuri')
  // const title = ['Techstudio', 'Zuri']

  const showTechstudio = () => {
    setActiveBtn(0)
    setTekstudio(true)
    setZuri(false)
  }
  const showZuri = () => {
    setActiveBtn(1)
    setZuri(true)
    setTekstudio(false)
  }

  useEffect(() => {
    showZuri()
    showTechstudio()
  }, [])

  const isActive = {
    color: 'brand.600',
    fontSize: 'sm',
    cursor: 'pointer',
    border: 'none',
    borderLeft: {
      base: '0',
      lg: '1px solid',
    },
    borderBottom: {
      base: '1px solid',
      lg: '0',
    },
    borderColor: 'brand.600',
    paddingLeft: {
      base: '0',
      lg: '10px',
    },
    paddingBottom: {
      base: '10px',
      lg: '0',
    },
    transition: '0.3s ease-in',
  }

  const notActive = {
    color: 'brand.700',
    fontSize: 'sm',
    cursor: 'pointer',
    transition: '0.3s ease-in',
  }

  return (
    <AnimateBox>
      <SectionLayout id='experience' number='02' title='Tech Experience'>
        <Box mt={8}>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: 6, lg: 12 }}
            alignItems='start'
          >
            <Flex direction={{ base: 'row', lg: 'column' }} gap={4} mb={2}>
              {filterCaption.sort().map((it, index) => (
                <Text
                  sx={activeBtn === index ? isActive : notActive}
                  onClick={activeBtn ? showTechstudio : showZuri}
                  key={index}
                >
                  {it}
                </Text>
              ))}
            </Flex>
            <Box>
              {tekstudio && (
                <>
                  {filterTechstudio.map((work) => (
                    <Box key={work._id}>
                      <Text fontSize='lg' color='brand.700'>
                        {work.title}
                        <Box as='span' color='brand.600'>
                          <Link href={work.website} isExternal>
                            {' '}
                            @{work.company}
                          </Link>
                        </Box>
                      </Text>

                      <Box as='span' color='brand.700' fontSize='sm'>
                        {work.year}
                      </Box>
                      <VStack spacing={2} alignItems='start' mt={4}>
                        {work.role.map((task, i) => (
                          <HStack spacing={2} key={i}>
                            <Icon
                              as={BiRightArrow}
                              boxSize={4}
                              color='brand.600'
                            />
                            <Text fontSize='sm' color='brand.700'>
                              {task}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>
                  ))}
                </>
              )}
              {zuri && (
                <>
                  {filterZuri.map((work) => (
                    <Box key={work._id}>
                      <Text fontSize='lg' color='brand.700'>
                        {work.title}
                        <Box as='span' color='brand.600'>
                          <Link href={work.website} isExternal>
                            {' '}
                            @{work.company}
                          </Link>
                        </Box>
                      </Text>
                      <Box as='span' color='brand.700' fontSize='sm'>
                        {work.year}
                      </Box>
                      <VStack spacing={2} alignItems='start' mt={4}>
                        {work.role.map((task, i) => (
                          <HStack spacing={2} key={i}>
                            <Icon
                              as={BiRightArrow}
                              boxSize={4}
                              color='brand.600'
                            />
                            <Text fontSize='sm' color='brand.700'>
                              {task}
                            </Text>
                          </HStack>
                        ))}
                      </VStack>
                    </Box>
                  ))}
                </>
              )}
            </Box>
          </Stack>
        </Box>
      </SectionLayout>
    </AnimateBox>
  )
}
