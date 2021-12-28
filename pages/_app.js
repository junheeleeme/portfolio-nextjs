import '../styles/globals.css'
import Wrapper from '../components/wrapper'
import theme from '../theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'



const MyApp = ({ Component, pageProps }) => {

  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
        <Component {...pageProps}/>
      </Wrapper>
      
    </ChakraProvider>
  )
  
}

export default MyApp