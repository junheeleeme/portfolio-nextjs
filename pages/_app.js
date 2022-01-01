import '../styles/globals.css'
import WrapAnimation from '../components/WrapAnimation'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme/theme'


const MyApp = ({ Component, pageProps }) => {  

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