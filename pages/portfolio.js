import axios from "axios"
import SubTitle from "../components/subtitle"
import WrapAni from "../components/wrapAni"
import GridItems from "../components/griditems"
import Link from "next/link"
import { Grid } from "@chakra-ui/react"

const portfolio = ({data}) => {

    console.log(data)

    return(
        <>
            <SubTitle>Portfolio</SubTitle>

            <WrapAni>
                <Link href="/portfolio/1" passHref >123</Link>
                <Grid templateColumns='repeat(3, 288px)' autoRows='326px' gap='20px' justifyContent='space-around' >
                    <GridItems/>
                    <GridItems/>
                    <GridItems/>
                    <GridItems/>
                    <GridItems/>
                    <GridItems/>
                </Grid>
                {/* <Skeleton w='100%' h='20px' mb='10px'/>
                <Skeleton w='100%' h='20px' mb='10px'/>
                <Skeleton w='100%' h='20px' mb='10px'/> */}

            </WrapAni>
        </>
    )
}

export const getServerSideProps = async() => {

    try{
        const res = await axios.get('http://localhost:3000/portfolio.json');
        if(res.status === 200){
            const data = res.data;
            console.log(data)
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