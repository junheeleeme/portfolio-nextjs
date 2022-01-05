import dynamic from 'next/dynamic'
import SlideAnimation from '../motion/slideAnimation.js'

const NoSsr_IndexThree = dynamic(()=> import('../components/IndexThree'), { ssr : false});

const index = ()=> {


  return (    
    <>
      <SlideAnimation>
        <NoSsr_IndexThree />
      </SlideAnimation>
    </>

  )
}

export default index