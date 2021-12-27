import Header from "./Header"
import Footer from "./footer"
import { useRouter } from "next/router"
import { Box } from '@chakra-ui/react'
import { motion } from "framer-motion"
import { useColorMode } from "@chakra-ui/react"
import { AnimatePresence } from 'framer-motion'

const Wrapper = ({children}) => {

    const router = useRouter();
    const { colorMode } = useColorMode();
    
    return(
        <>
            <Box w='100vw' minH='100vh' bg={ colorMode === 'light' ? 'gray.50' : 'whiteAlpha.200'}> 

            <Header/>
            <AnimatePresence exitBeforeEnter={true}>    
                <motion.div key={router.route} transition={{ ease: "easeInOut", duration: 0.35}} initial={animate.initial} animate={animate.animate} exit={animate.exit}>
                    <Box maxW='1200px' minH='calc(100vh - 110px)' p='40px' > 
                        {children}
                    </Box>
                </motion.div>
            </AnimatePresence>
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

export default Wrapper