import Link from "next/link"
import { SimpleGrid, Box, Link as LinkStyled, Text, Button, Image, Heading, Spinner } from '@chakra-ui/react'

const Content_List = ({posts}) => {
    console.log(posts);
    return(
        <Box>
            {
                posts === null 
                    ?
                <Spinner/>
                    :
                <>    
                <Heading as='h2' size='md' pb={{base: '30px', sm: '10px'}}>최근 포스트</Heading>

                <SimpleGrid columns={{base: 1, sm: 2, md: 3}} spacingX='20px' spacingY={{base: '30px', sm : '15px'}}
                p={{base : '0 15px', sm : '20px 0'}}>
                
                {
                    posts.map((p, idx)=>
                    
                        <Box key={p.title+idx} position='relative' w='100%' overflow='hidden'>
                            <Link href={`https://juni-official.tistory.com${p.link}`} passHref>
                                <LinkStyled _hover={false}  target='_blank'>

                            <Image src={p.thumb} alt={p.title} w='100%' borderRadius='4px'/>

                            <Heading as='h3' size='sm'  position='relative' w='100%' p='5px 2px'
                            textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden'>{p.title}</Heading>

                            <Box position='relative' h='22px' fontSize='0.8em'>
                                <Text position='absolute' top='0' left='4px'>{p.cate}</Text>
                                <Text position='absolute' top='0' right='4px'>{p.date}</Text>
                            </Box>

                                </LinkStyled>
                            </Link>
                        </Box>
                    )
                }

                <Box display={{base:'none', sm: 'block', md:'none'}} position='relative' w='100%'>
                    <Link href='https://juni-official.tistory.com' passHref>
                        <LinkStyled target='_blank' display='inline-block' w='100%' height='100%' fontSize="1.1em">
                            <Text position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)'>더보기</Text>
                        </LinkStyled>
                    </Link>
                </Box>

                </SimpleGrid>

                <Box p={{base: '15px', sm: '0', md: '0 0 20px 0'}}>
                    <Link href='https://juni-official.tistory.com' passHref>
                        <LinkStyled _hover={false} target='_blank'>
                            <Button display={{base: 'block', sm: 'none', md:'block'}} w='100%' variant='outline'>더보기</Button>
                        </LinkStyled>
                    </Link>
                </Box>
                </>
            }
        </Box>
    )
}

export default Content_List