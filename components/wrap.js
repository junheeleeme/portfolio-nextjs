import Header from "./Header"
import Footer from "./footer"
import { useRouter } from "next/router"
import { Box } from '@chakra-ui/react'
import { motion, AnimatePresence } from "framer-motion"
import { useColorMode } from "@chakra-ui/react"


const Wrap = ({children}) => {

    const router = useRouter();
    const { colorMode } = useColorMode();
    
    return(
        <>
            <Box w='100vw' h='100vh' bg={ colorMode === 'light' ? 'gray.50' : 'whiteAlpha.200'}> 

            <Header/>

            <motion.div key={router.route} transition={{ ease: "easeInOut", duration: 0.55}} initial={animate.initial} animate={animate.animate} exit={animate.exit} style={{ minHeight : `inherit`}}>
                <Box maxW='1080px' minH='calc(100vh - 100px)' p='0px'>
                    {children}
                </Box>
            </motion.div>
  
            <Footer/>

            </Box>
        </>
    )
}

const animate = {
    initial :{ 
        transform : `translateY(40px)`,
        opacity : 0,
    },
    animate : {
        transform : `translateY(0px)`,
        opacity: 1,
    },
    exit : {
        transform : `translateY(40px)`,
        opacity: 0,
    }
}

export default Wrap