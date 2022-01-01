import { Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"  

const SubTitle = ({children}) => {

    return(
        <>
            <motion.div transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }} initial={slideRight.initial} animate={slideRight.animate}>
                <Heading as='h2' display='block' position='relative' size='3xl'
                    pb={{ base : '30px' ,md:'40px'}}>
                    {children}
                </Heading>
            </motion.div>
        </>
    )
}

const slideRight = {
    initial :{ //none use
        transform : `translateX(-40px)`,
        opacity : 0,
    },
    animate : {
        transform : `translateX(0px)`,
        opacity: 1,
    },
}

export default SubTitle