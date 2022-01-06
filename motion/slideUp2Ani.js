import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion" 

const SlideUp2Ani = ({children}) => {

    return(
        <>  
            <motion.div transition={{ ease: "easeInOut", duration: 0.4, delay: 0.6 }} initial={slideUp.initial} animate={slideUp.animate}  >
                <Box position='relative'>{children}</Box>
            </motion.div>
        </>
    )
}

const slideUp = {
    initial :{ //none use
        transform : `translateY(40px)`,
        opacity : 0,
    },
    animate : {
        transform : `translateY(0px)`,
        opacity: 1,
    },
}

export default SlideUp2Ani