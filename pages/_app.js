import '../styles/globals.css'
import WrapAnimation from '../components/WrapAnimation'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '480px',
  md: '768px',
  lg: '960px',
  xl: '1280px',
  'menu' : '640px'
})


const MyApp = ({ Component, pageProps }) => {

  const theme = extendTheme({ breakpoints });

  return (
    <>
      <ChakraProvider theme={theme}>
        <WrapAnimation>
          <Component {...pageProps}/>
        </WrapAnimation>
      </ChakraProvider>
    </>
  )
  
}

export default MyApp