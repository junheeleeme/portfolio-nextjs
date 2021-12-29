import '../styles/globals.css'
import Wrapper from '../components/wrapper'
import theme from '../theme/theme'
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
        <Wrapper>
          <Component {...pageProps}/>
        </Wrapper>
        
      </ChakraProvider>
    </>
  )
  
}

export default MyApp