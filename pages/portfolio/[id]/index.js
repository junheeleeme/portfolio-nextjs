import axios from "axios"
import SlideUp2Ani from "../../../motion/slideUp2Ani"
import SlideRight from "../../../motion/slideRight"
import Link from "next/link"
import { Box, Heading, Image, Flex, Button, Badge, Link as Atag } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"

const Index = ({data}) => {

    const {colorMode} = useColorMode();

    return(
        <>
            <Box as='section'>
                <SlideRight>
                    <Heading as='h2' display='block' position='relative' size='lg' pb='30px' textOverflow='ellipsis' overflow='hidden' 
                        whiteSpace='nowrap' borderBottomColor='colors.end'>
                        {data.title} - {data.type}
                        <Box position='absolute' top='43px' left='30px' w='100%' h='1px' bg={colorMode==='light'? '#000':'#fff'}/>
                    </Heading>
                </SlideRight>

                <SlideUp2Ani>
                    <Box>
                        <Box display='block' w='100%'>
                            <Image src={data.gif} alt={data.title} w='100%' h='auto' m='20px auto' borderRadius='5px'/>
                        </Box>
                        <Box fontSize='1.1em' p='20px 3px 40px 3px'>
                            {data.content}
                        </Box>
                    </Box>
                    <Heading as='h3' size='md'>🧑🏻‍💻 Skill</Heading>
                    <Flex flexWrap='wrap' p='20px 0 40px 0'>
                        
                        {
                            data.skills.map((s, idx) => 

                                <Badge key={s+idx} colorScheme='red' fontSize='lg' m='10px 10px 0 0'>
                                    {s}
                                </Badge>)

                        }

                    </Flex>
                    <Heading as='h3' size='md'>🔗 Link</Heading>
                    <Flex flexWrap='nowrap' p='10px 0'>
                        <Link href={data.link[1]} passHref>
                            <Atag target="_blank" w='100%' m='0 3px' _hover={false}>
                                <Button size='md' w='100%' bg='blue.500' color="#fff" _focus={false} _active={false} _hover={{bg:'blue.600'}}>GitHub</Button>                            
                            </Atag>
                        </Link>
                        <Link href={data.link[1]} passHref>
                            <Atag target="_blank" w='100%' m='0 3px' _hover={false}>
                                <Button size='md' w='100%' bg='blue.500' color="#fff" _focus={false} _active={false} _hover={{bg:'blue.600'}}>View</Button>
                            </Atag>
                        </Link>
                    </Flex>
                </SlideUp2Ani>
            </Box>      
        </>
    )
}

export const getStaticPaths = async() => {
    const res = await axios.get('https://tistory4.daumcdn.net/tistory/3617178/skin/images/pofol.json');
    const paths = res.data.map(p => {
        return{
            params : { id : (p.id+1).toString() }
        } 
    });

    return { paths, fallback: false }
}

export const getStaticProps = async ({params}) => {
    const {id} = params;

    try{
        const res = await axios.get('https://tistory4.daumcdn.net/tistory/3617178/skin/images/pofol.json');
        
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