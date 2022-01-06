import HeadInfo from "../components/headInfo.js"
import axios from "axios"
import SubTitle from '../components/subtitle.js'
import { SimpleGrid, Box } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react"

import dynamic from "next/dynamic"

const NoSsr_SlideShow = dynamic(()=> import('../components/slideShow'), { ssr : false }); 

const portfolio = ({data}) => {

    return(
        <>
            <HeadInfo title="Portfolio" />
            <SubTitle txt='Portfolio'/>      

            <SimpleGrid columns={2} spacing={10}>
            {
                data.map((d, idx)=> 
                    <Box key={d.id+idx}>
                        <Image src={`/pofol/${d.title}_cover.png`} alt={d.title} w='100%' h='100%'/>
                    </Box>


                )
            }
                <Box bg='tomato' height='80px'></Box>
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