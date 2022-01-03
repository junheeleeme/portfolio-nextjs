import axios from "axios"
import SlideAnimation from "../../../components/slideAnimation"
import SlideRight from "../../../components/slideRight"
import Link from "next/link"
import { Box, Heading, Image, Flex, Button, Link as Atag } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"

const Index = ({data}) => {

    const {colorMode} = useColorMode();


    return(
        <>
            <Box maxW='760px' p={{base: '0', lg: '40px 0'}}>
                <SlideRight>
                    <Heading as='h2' display='block' position='relative' size='lg' pb='30px' textOverflow='ellipsis' overflow='hidden' 
                        whiteSpace='nowrap' borderBottomColor='colors.end'>
                        {data.title} - {data.type}
                        <Box position='absolute' top='43px' left='30px' w='100%' h='1px' bg={colorMode==='light'? '#000':'#fff'}/>
                    </Heading>
                </SlideRight>

                <SlideAnimation>
                    <Box>
                        <Box display='block' w='100%'>
                            <Image src={data.gif} alt={data.title} w='100%' h='auto' m='20px auto'/>
                        </Box>
                        <Box fontSize='1.1em' p='20px 3px 40px 3px'>
                            {data.content}
                        </Box>
                    </Box>
                    <Heading as='h3' size='md'>🧑🏻‍💻 Skill</Heading>
                    <Flex flexWrap='wrap' p='10px 0 30px 0'>
                        {
                            data.skills.map((s, idx) => <Button key={s+idx} bg="blue.300" size="sm" fontSize='1em' color='#fff' m='0.25em'>
                                {s}
                            </Button>)
                        }
                    </Flex>
                    <Heading as='h3' size='md'>🔗 Link</Heading>
                    <Flex flexWrap='nowrap' p='10px 0'>
                        <Link href={data.link[1]} passHref>
                            <Atag target="_blank" w='100%' m='0 3px' _hover={false} _active={false} _focus={false}>
                                <Button size='md' w='100%' bg='blue.500' color="#fff">GitHub</Button>                            
                            </Atag>
                        </Link>
                        <Link href={data.link[1]} passHref>
                            <Atag target="_blank" w='100%' m='0 3px' _hover={false} _active={false} _focus={false}>
                                <Button size='md' w='100%' bg='blue.500' color="#fff">View</Button>
                            </Atag>
                        </Link>
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