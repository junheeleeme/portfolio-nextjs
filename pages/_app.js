import '../styles/globals.css'

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import 'swiper/css/mousewheel'

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