import { motion } from "framer-motion"  

const SlideRight = ({children}) => {

    return(
        <>
            <motion.div transition={{ ease: "easeInOut", duration: 0.66, delay: 0.4 }} initial={slideRightAni.initial} animate={slideRightAni.animate}>
                {children}
            </motion.div>
        </>
    )
}

const slideRightAni = {
    initial :{ //none use
        transform : `translateX(-50px)`,
        opacity : 0,
    },
    animate : {
        transform : `translateX(0px)`,
        opacity: 1,
    },
}

export default SlideRight