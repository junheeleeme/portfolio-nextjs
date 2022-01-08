import HeadInfo from "../components/headInfo.js"
import axios from "axios"
import SubTitle from '../components/subtitle.js'
import { SimpleGrid } from '@chakra-ui/react'
import PortfolioArticle from "../components/portfolioArticle.js"


const portfolio = ({data}) => {

    return(
        <>
            <HeadInfo title="Portfolio" />
            <SubTitle txt='Portfolio'/>      

            <SimpleGrid columns={{base: 1, sm :2}} spacing={10} gap={{base : '30px', md: '25px', lg:'50px'}}
            p={{base:"20px 15px", sm : '30px 5px', md : '30px 0' }} >
                {
                    data.sort((a, b)=> b.id-a.id).map((d, idx)=> //
                        <PortfolioArticle data={d} key={d.title+idx}/>
                    )
                }
            </SimpleGrid>
            {/* <NoSsr_SlideShow data={data} /> */}
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