import Header from "../components/header"
import Footer from "../components/footer"
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
                    <motion.main key={router.route} transition={{ ease: "easeInOut", duration: 0.5 }} animate={animate.animate} exit={animate.exit} 
                    style={{overflow: 'hidden'}}>
                        <Box as='section' maxW={maxWid} minH='calc(100vh - 100px)' p={{ base : '15px', xl : '50px 15px 15px 15px' }} position='relative'> 
                            {children}
                        </Box>
                    </motion.main>
                </AnimatePresence>
            <Footer colorMode={colorMode}/>

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