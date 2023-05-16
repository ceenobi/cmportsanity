import { Box, Button, Flex, HStack, Text, Link } from '@chakra-ui/react'
import Sidebar from './sidebar'
import { navlink } from '@/utils/navlink'
import { useEffect, useState } from 'react'

type link = {
  id: number
  href: string
  tag: string
  name: string
}

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const showNav = () => {
    window.scrollY >= 100 ? setShowNavbar(true) : setShowNavbar(false)
  }

  useEffect(() => {
    showNav()
    window.addEventListener('scroll', showNav)
    return () => {
      window.removeEventListener('scroll', showNav)
    }
  }, [])

  const navStyle: any = {
    position: 'fixed',
    top: '0',
    transition: '0.3s ease-in',
  }
  return (
    <Box
      zIndex={10}
      sx={showNavbar ? 'none' : navStyle}
      w='full'
      boxShadow='lg'
      bg='brand.900'
    >
      <Flex
        maxW='container.xl'
        mx='auto'
        align='center'
        justify='space-between'
        p={4}
      >
        <Flex
          border='3px solid'
          borderRadius='full'
          borderColor='brand.600'
          boxSize='50px'
          justify='center'
          align='center'
        >
          <Text textAlign='center' fontSize='larger' as={Link} href='/'>
            CM
          </Text>
        </Flex>
        <HStack spacing='24px' hideBelow='md'>
          {navlink.map((link: link) => (
            <Link
              href={`#${link.href}`}
              key={link.id}
              color='brand.700'
              _hover={{ color: 'brand.800', transition: '0.3s ease-in' }}
            >
              <Box as='span' color='brand.600'>
                {link.tag}.
              </Box>{' '}
              {link.name}
            </Link>
          ))}
          <Button
            borderColor='brand.600'
            color='brand.600'
            variant='outline'
            borderRadius='0'
          >
            Resume
          </Button>
        </HStack>
        <Sidebar />
      </Flex>
    </Box>
  )
}
