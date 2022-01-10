import { useColorMode } from "@chakra-ui/react"
import { Wrap, WrapItem, Center, Image, Box, UnorderedList, ListItem, Heading,
SimpleGrid, Link as LinkStyled, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import axios from "axios"

const index = ({posts})=> {

  const { colorMode } = useColorMode();

  return (    
    <Box>
      <Heading as='h2' w='100%' p={{base : '10px', md : '10px'}} color='white' letterSpacing='0.05em' userSelect='none'
        fontFamily='SBAggroM' fontSize={{base : '1.25em', md : '1.35em'}} lineHeight={{base: '1.33', md : 'normal'}} 
        textAlign='center' bg='blackAlpha.500' borderRadius='4px' wordBreak='keep-all' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
            안녕하세요.👋 프론트엔드 개발자를 지향하는 이준희입니다.
      </Heading>

      <Wrap p={{base: '30px 0', md : '30px 0px'}} justify='center'>

        <WrapItem> 
          <Center w={{base : '100%', md : '550px'}} p='10px'>
            <UnorderedList spacing={3} fontSize='1.15em' wordBreak='keep-all'>
              <ListItem>
                변화와 도전을 통해 성장하며 유연한 사고를 위해 끊임없이 배우려는 개발자입니다.
              </ListItem>
              <ListItem>
                웹을 구현하고 더 나은 웹 품질과 사용자 편의성을 추구하고 있습니다.
              </ListItem>
              <ListItem>
                프론트엔드 뿐만 아니라 더 나아가 백엔드 분야까지 경험하고 싶습니다.
              </ListItem>
              <ListItem>
                학습한 내용을 블로그에 기록하는 습관을 가지고 있습니다.
              </ListItem>
            </UnorderedList>
          </Center>
        </WrapItem>

        <WrapItem p={{base: '30px 0', md: '0'}} w={{ base : '100%', md:'180px'}} >
          <Center borderRadius='50%' overflow='hidden' m='auto'>
            <Image src='/profile2.png' w='180px' h='180px'/>
          </Center>
        </WrapItem>

      </Wrap>


      <Box>

        <Heading as='h2' size='md' pb={{base: '30px', sm: '20px'}} textDecoration='underline'textDecorationColor={colorMode === 'light'?'#000':'#fff'} textUnderlineOffset='7px'>
          최근 포스트
        </Heading>

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
        
      </Box>
    </Box>
  )
}


export const getServerSideProps = async() => {

  const { data } = await axios('http://localhost:3000/api/posts');

  return{
    props : { posts : data }
  }
}

export default index