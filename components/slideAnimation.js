import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"  

const SlideAnimation = ({children}) => {

    return(
        <>  
            <motion.div transition={{ ease: "easeInOut", duration: 0.5, delay: 0.66 }} initial={slideUp.initial} animate={slideUp.animate}>
                <Box overflow='hidden'>{children}</Box>
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

export default SlideAnimation