import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '275px',
  md: '768px',
  lg: '992px',
  xl: '1280px',
  '2xl': '1440px',
}

const theme = extendTheme(
  {
    colors: {
      brand: {
        900: '#111211',
        800: '#ccd6f6',
        700: '#A0AEC0',
        600: '#078f30',
        500: '#718096',
        400: '#23232d',
      },
    },
    styles: {
      global: {
        'html, body': {
          bg: 'brand.900',
          color: 'brand.800',
          scrollBehavior: 'smooth',
        },
        '.write': {
          writingMode: 'vertical-lr',
          display: 'inline-block',
        },
        a: {
          textDecoration: 'none !important',
        },
        '.scrollbody': {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
        '.scrollbody::-webkit-scrollbar': {
          display: 'none',
        },
        p: {
          fontSize: {
            base: 'sm',
            md: 'md',
          },
        },
      },
    },
  },
  { breakpoints }
)

export default theme
