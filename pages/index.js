import axios from "axios"
import { Wrap, WrapItem, Center, Image, Box, UnorderedList, ListItem, Heading } from "@chakra-ui/react"
import Content_List from "../components/content_list"

const index = ({posts})=> {

  return (
    <Box>
      <Heading as='h2' w='100%' p={{base : '10px', md : '10px'}} color='white' letterSpacing='0.05em' userSelect='none'
        fontFamily='SBAggroM' fontSize={{base : '1.25em', md : '1.35em'}} lineHeight={{base: '1.33', md : 'normal'}} 
        textAlign='center' bg='blackAlpha.500' borderRadius='4px' wordBreak='keep-all' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
            안녕하세요.👋 이것저것 만들기 좋아하는 개발자입니다.
      </Heading>

      <Wrap p={{base: '30px 0', md : '30px 0px'}} justify='center' alignItems="center !important">

        <Box as='li' display="flex" justifyContent="justify-content" > 
          <Center w={{base : '100%', md : '550px'}} p='10px'>
            <UnorderedList spacing={3} fontSize='1.15em' wordBreak='keep-all'>
              <ListItem>
                웹을 구현하고 더 나은 품질과 사용자 편의성을 추구합니다.
              </ListItem>
              <ListItem>
                프론트엔드 뿐만 아니라 더 나아가 백엔드 분야에도 관심있습니다.
              </ListItem>
              <ListItem>
                공부한 내용을 블로그에 기록하는 습관을 가지고 있습니다.
              </ListItem>
            </UnorderedList>
          </Center>
        </Box>

        <WrapItem p={{base: '30px 0', md: '0'}} w={{ base : '100%', md:'180px'}} >
          <Center borderRadius='50%' overflow='hidden' m='auto'>
            <Image src='/profile2.png' w='180px' h='180px'/>
          </Center>
        </WrapItem>

      </Wrap>

      <Content_List posts={posts}/>
      
    </Box>
  )
}

export const getStaticProps = async() => {
  try{
    const { data } = await axios(`http://localhost:${process.env.PORT}/api/posts`);
    // const { data } = await axios('/pofol/pofolList.json');
    return{
      props : { posts : data },
      revalidate: 3600
    }
  }catch(err){
    console.log(err);
    return{
      props : { posts : null }
    }
  }
}

export default index