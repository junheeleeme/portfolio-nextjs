import SlideUpAni from "../../motion/slideUpAni"
import Header from "../header_"
import Footer from "../footer_"
import Voxel from "../voxel"
import dynamic from "next/dynamic"
import { useColorMode } from "@chakra-ui/react"
import { Box } from '@chakra-ui/react'

const NoSsr_Voxel = dynamic(()=> import('../voxel'),{
    ssr : false
})


const Layout = ({children}) => {

    const { colorMode } = useColorMode();

    return(
        <>
            <Header/>
            <Box position='relative' w='100vw' minH='100vh' p='60px 0 30px' bg={ colorMode === 'light' ? 'gray.100' : 'gray.700'}> 
                <Box position='relative' maxW='800px'>

                    <NoSsr_Voxel/>
                    <SlideUpAni>
                        {children}           
                    </SlideUpAni>
                    
                </Box>
                <Footer/>
            </Box>

        </>
    )
}

export default Layout