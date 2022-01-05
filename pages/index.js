import dynamic from 'next/dynamic'
import SlideAnimation from '../motion/slideAnimation'

const NoSsr_IndexThree = dynamic(()=> import('../components/indexThree.js'), { ssr : false});

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