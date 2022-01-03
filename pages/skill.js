import SlideRight from "../motion/slideRight"
import SlideAnimation from "../motion/slideAnimation"
import SubTitle from "../components/subtitle"
import { List, ListItem, ListIcon, Center, Heading, Tooltip, Box } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents, SiNextdotjs, SiMongodb, SiRedux, SiAmazonaws, SiMysql } from 'react-icons/Si';


const skill = () => {
    
    return(
        <>
            <SlideRight>
                <SubTitle txt='Skill' />
            </SlideRight>

            <SlideAnimation>

                <Heading as="h3" fontSize='1.7em' p={{ base : '10px 0 20px' , md : '10px 0 30px 0'}}>💁🏻‍♂️ 기술 스택</Heading>

                <Center p='20px 0 40px' flexWrap='wrap' justifyContent='space-around'>
                    <Tooltip label='JavaScript' w='100%'>
                        <Box className='svgWrap'><SiJavascript color="#f7e018"/></Box>
                    </Tooltip>
                    <Tooltip label='React' w='100%'>
                        <Box className='svgWrap'><SiReact color="#61dafb" /></Box>
                    </Tooltip>
                    <Tooltip label='Styled Components' w='100%'>
                        <Box className='svgWrap'><SiStyledcomponents color="#fe9ae4"/></Box>
                    </Tooltip>
                    <Tooltip label='Next.JS' w='100%'>
                        <Box className='svgWrap'><SiNextdotjs /></Box>
                    </Tooltip>
                    <Tooltip label='Node.JS' w='100%'>
                        <Box className='svgWrap'><SiNodedotjs color="#8bc500" /></Box>
                    </Tooltip>
                    <Tooltip label='HTML5' w='100%'>
                        <Box className='svgWrap'><SiHtml5 color="#ff5723" /></Box>
                    </Tooltip>
                    <Tooltip label='CSS3' w='100%'>
                        <Box className='svgWrap'><SiCss3 color="#007bc9" /></Box>
                    </Tooltip>
                    <Tooltip label='JQuery' w='100%'>
                        <Box className='svgWrap'><SiJquery color="#2e68a8" /></Box>
                    </Tooltip>    
                    
                </Center>

                <Heading as="h3" fontSize='1.7em' p={{ base : '10px 0 20px' , md : '30px 0 30px 0'}}>🙋🏻‍♂️ 사용해본 기술 스택</Heading>
                <Center p={{ base : '20px 0 20px' , md : '20px 0 40px 0'}} flexWrap='wrap' justifyContent='space-around'>    
                    <Center>
                        <Tooltip label='AWS EC2'>
                            <Box className='svgWrap'><SiAmazonaws color="#ff9a02" /></Box>
                        </Tooltip>
                    </Center>
                    <Center>
                        <Tooltip label='Redux'>
                            <Box className='svgWrap'><SiRedux color="#764abc"/></Box>
                        </Tooltip>
                    </Center>
                    <Center>
                        <Tooltip label='Mongo DB'>
                            <Box className='svgWrap'><SiMongodb color="#13aa52"/></Box>
                        </Tooltip>
                    </Center>
                    <Center>
                        <Tooltip label='Mongo DB'>
                            <Box className='svgWrap'><SiMysql color="#01618a"/></Box>
                        </Tooltip>
                        <SiMysql/>
                    </Center>
                </Center>


                <Center p='30px 0 50px 0'>
                    <List spacing={3} fontSize='1.2em'>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />웹표준, 웹 접근성 및 SEO를 고려한 시멘틱 마크업 작업이 가능합니다.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />HTML/CSS로 주어진 디자인 레이아웃에 따라 웹을 디자인할 수 있습니다.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />CSS Media Query를 사용하여 반응형 웹을 만들 수 있습니다.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />Vanila JS와 제이쿼리를 사용하여 DOM 객체를 제어할 수 있습니다.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />AWS EC2, MySQL/MongoDB와 Express를 연동한 클라이언트와 서버를 구성 할 수 있습니다.
                        </ListItem>
                    </List>
                </Center>

            </SlideAnimation>
        </>
    )
}


export default skill