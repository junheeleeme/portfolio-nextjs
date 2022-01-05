import HeadInfo from "../components/headInfo.js"
import axios from "axios"
import SlideRight from "../motion/slideRight.js"
import SlideAnimation from "../motion/slideAnimation.js"
import SubTitle from '../components/subtitle.js'
import dynamic from "next/dynamic"

const NoSsr_SlideShow = dynamic(()=> import('../components/slideShow'), { ssr : false }); 

const portfolio = ({data}) => {

    return(
        <>
            <HeadInfo title="Portfolio" />

            <SlideRight>
                <SubTitle txt='Portfolio'/>
            </SlideRight>

            <SlideAnimation>
                <NoSsr_SlideShow data={data} />
            </SlideAnimation>
        </>
    )
}


export const getStaticProps = async() => {

    try{
        const res = await axios.get('https://www.juni-official.com/pofolList.json');
        if(res.status === 200){
            const data = res.data;
            
            return { props : {
                data
            } }
        }
    }catch(err){
        console.log(err);
        return { props: {} };
    }

}

export default portfolio