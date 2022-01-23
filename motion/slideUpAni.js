import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { AnimatePresence } from 'framer-motion'


const SlideUpAni = ({children}) => {

    const router = useRouter();

    return(
        <>
            <AnimatePresence exitBeforeEnter={true}> 
                <motion.main key={router.route} transition={{ ease : [0.17, 0.67, 0.83, 0.67], duration: 0.3 }}
                initial={animate.initial} animate={animate.animate} exit={animate.exit} style={{overflow: 'hidden', minHeight : '600px'}}>
                    
                        {children}

                </motion.main>
            </AnimatePresence>
        </>
    )
}


const animate = {
    initial :{ //none use
        transform : `translateX(50px)`,
        opacity : 0,
        padding: '15px',
    },
    animate : {
        transform : `translateX(0px)`,
        opacity: 1,
        padding: '15px',
    },
    exit : {
        transform : `translateX(40px)`,
        opacity: 0,
        padding: '15px',
    }
}


export default SlideUpAni