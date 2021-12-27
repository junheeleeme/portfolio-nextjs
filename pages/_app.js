import '../styles/globals.css'
import Wrap from '../components/wrap'
import theme from '../theme/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { AnimatePresence } from 'framer-motion'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
})

const MyApp = ({ Component, pageProps }) => {

  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter={true}>    
      <Wrap>
        <Component {...pageProps}/>
      </Wrap>
      </AnimatePresence>
    </ChakraProvider>
  )
  
}

export default MyApp