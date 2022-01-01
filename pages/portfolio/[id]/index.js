import axios from "axios";
import SlideAnimation from "../../../components/slideAnimation";
import SlideRight from "../../../components/slideRight";
import Link from "next/link";
import { Box, Heading, Image, Flex, Button } from "@chakra-ui/react";



const Index = ({data}) => {
    
    const btnBg = "linear-gradient(to right, #eb9ac8, #df95d2, #ce92dc, #b791e7, #9991f0, #789ffb, #4fabff, #00b6ff, #00cbfa, #00dce9, #57ebd3, #99f6be)"

    return(
        <>
            <Box maxW='760px'>
                <SlideRight>
                    <Heading as='h2' display='block' position='relative' size='lg' pb='30px' textOverflow='ellipsis' overflow='hidden' 
                        whiteSpace='nowrap' borderBottomColor='colors.end'>
                        {data.title} - {data.type}
                    </Heading>
                </SlideRight>

                <SlideAnimation>
                    <Box>
                        <Box display='block' w='100%'>
                            <Image src={data.gif} alt={data.title} maxW='100%' h='auto' m='20px auto'/>
                        </Box>
                        <Box fontSize='1.1em' p='20px 3px'>
                            {data.content}
                        </Box>
                    </Box>
                    <Heading as='h3' size='md'>🧑🏻‍💻 Skills</Heading>
                    <Flex flexWrap='wrap' p='10px 0'>
                        {
                            data.skills.map(s => <Button bg="#2b4a7b" size="sm" fontSize='1em' color='#fff' m='0.25em'>
                                {s}
                            </Button>)
                        }
                    </Flex>
                    <Flex flexWrap='wrap'>
                        {data.link.map( (l, idx) => 
                            
                            <Link href={l} passHref>
                                {idx === 0 ? 'GitHub' : 'Visit'}
                            </Link> 
                            
                        )}
                    </Flex>
                </SlideAnimation>
            </Box>
        </>
    )
}

export const getServerSideProps = async ({params}) => {
    const {id} = params;

    try{
        const res = await axios.get('http://localhost:3000/pofol/portfolio.json');
        
        if(res.status === 200){
            const _data = res.data;
            const data = _data[Number(id)-1];
            if(data !== undefined){
                return { props : { data } }
            }else{
                return{ notFound : true }
            }
        }
    }catch(err){
        console.log(err);
        return { props: {} };
    }
}

export default Index