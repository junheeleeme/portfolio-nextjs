import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { useState, useEffect } from 'react'


export default function MyApp({ Component, pageProps }) {


  return (
      
        <Wrap>
          
          <Header/>
          
          <main>
            <MainWrap>

              <Component {...pageProps}/>

            </MainWrap>
          </main>

          <Footer/>
        </Wrap>  
      
  )
  
}

const Wrap = styled.div`
  width: 100vw; height: 100vh;
  /* iOS only */
@supports (-webkit-touch-callout: none) { 
  height: -webkit-fill-available;
}`



const MainWrap = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  max-width: 1080px;
  @supports (-webkit-touch-callout: none) { 
    height: calc(100vh - 180px);
  }
@media screen and (max-width: 768px){
  height: calc(100vh - 30px);
  @supports (-webkit-touch-callout: none) { 
    height: calc(100vh - 110px);
  }
}
`

