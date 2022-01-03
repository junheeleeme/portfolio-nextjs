import Header from "./Header"
import Footer from "./footer"
import { useRouter } from "next/router"
import { Box } from '@chakra-ui/react'
import { motion } from "framer-motion"
import { useColorMode } from "@chakra-ui/react"
import { AnimatePresence } from 'framer-motion'

const WrapAnimation = ({children}) => {

    const router = useRouter();
    const { colorMode } = useColorMode();
    const maxWid = router.pathname === '/' ? '1200px' : '960px';

    return(
        <>
            <Box w='100vw' minH='100vh' bg={ colorMode === 'light' ? 'gray.100' : 'gray.700'}> 

            <Header/>
                <AnimatePresence>
                    <motion.div key={router.route} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }} animate={animate.animate} exit={animate.exit} 
                    style={{overflow: 'hidden'}}>
                        <Box maxW={maxWid} minH='calc(100vh - 110px)' p={{ base : '15px', xl : '50px 15px 15px 15px' }} position='relative'> 
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
    initial :{ //none use
        transform : `translateY(50px)`,
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

export default WrapAnimation