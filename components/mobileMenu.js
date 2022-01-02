import { motion, AnimatePresence } from "framer-motion"
import { Box } from "@chakra-ui/react"


const MobileMenu = ({isVisible, children}) => {

    return(
        <> 
        <AnimatePresence >
        {isVisible && (
            
            <motion.div transition={{ ease: "easeInOut", duration: 0.2 }} initial={ showMenu.initial } animate={ showMenu.animate } exit={ showMenu.exit }>
                    {children}
            </motion.div>
        )}
        </AnimatePresence> 
        </>
    )
}

const showMenu = {
    initial :{ //none use
        position: 'fixed', top: '-20px', left: '0',
        width: '100%', height: '100%', backgroundColor: '#8843F2',
        opacity : 0, 
    },
    animate : {
        position: 'fixed', top: '0', left: '0',
        width: '100%', height: '100%', backgroundColor: '#8843F2',
        opacity: 1, zIndex: '9999'
    },
    exit : {
        position: 'fixed', top: '-20px', left: '0',
        width: '100%', height: '100%', backgroundColor: '#8843F2',
        opacity: 0
    }
}

export default MobileMenu