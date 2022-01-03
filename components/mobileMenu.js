import { motion, AnimatePresence } from "framer-motion"
import { VStack } from "@chakra-ui/react"

const MobileMenu = ({isVisible, colorMode, children}) => {

    return(
        <> 
            <AnimatePresence>
            {isVisible && (
                <motion.div transition={{ ease: "easeInOut", duration: 0.33 }} initial={ showMenu.initial } animate={ showMenu.animate } exit={ showMenu.exit }>
                    <VStack spacing={4} align='stretch' position='relative' w='100%' h='100%' bg={colorMode==='light'?'gray.200':'gray.700'}>
                        {children}
                    </VStack>
                </motion.div>
            )}
            </AnimatePresence> 
        </>
    )
}

const showMenu = {
    initial :{ //none use
        position: 'fixed', top: '-20px', left: '0',
        width: '100%', height: '100%',
        opacity : 0, 
    },
    animate : {
        position: 'fixed', top: '0', left: '0',
        width: '100%', height: '100%',
        opacity: 1, zIndex: '9990'
    },
    exit : {
        position: 'fixed', top: '-20px', left: '0',
        width: '100%', height: '100%',
        opacity: 0
    }
}

export default MobileMenu