import SlideUpAni from "../../motion/slideUpAni"
import Header from "../header_"
import Footer from "../footer_"
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
            <Box position='relative' p='60px 0 30px' bg={ colorMode === 'light' ? 'gray.50' : 'gray.700'}> 
                <Box position='relative' maxW='800px' minH='100vh'>
                    
                    <Box height={{base: '340px', sm : '400px', md: '500px'}} m='-60px 0 -80px 0' position='relative'>
                        <NoSsr_Voxel/>
                    </Box>

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