import '../styles/globals.css'
import HeadInfo from '../components/headInfo.js'
import Script from 'next/script'

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import 'swiper/css/mousewheel'

import Layout from '../components/layout/layout'
import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react'
import { theme } from '../theme/theme'


const MyApp = ({ Component, pageProps }) => {  

  const colorModeManager = typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager;

  return (
    <>
      <HeadInfo />
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"/>  

      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        <Layout>        
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </>
  )
  
}

export default MyApp