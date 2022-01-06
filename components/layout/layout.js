import SlideUpAni from "../../motion/slideUpAni"
import Header from "../header_"
import Footer from "../footer_"
import Voxel from "../voxel"

import { useColorMode } from "@chakra-ui/react"
import { Box } from '@chakra-ui/react'


const Layout = ({children}) => {

    const { colorMode } = useColorMode();

    return(
        <>
            <Header/>
            <Box position='relative' w='100vw' minH='100vh' pt={{base : '60px', md: '70px'}} bg={ colorMode === 'light' ? 'gray.100' : 'gray.700'}> 
                <Box position='relative' maxW='800px'>

                    <Voxel/>
                    <SlideUpAni>
                        {children}
                        <Footer/>
                    </SlideUpAni>
                    
                </Box>
            </Box>

        </>
    )
}

export default Layout