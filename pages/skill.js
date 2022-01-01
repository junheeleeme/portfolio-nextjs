import styled from "styled-components"
import SubTitle from "../components/subtitle"
import SlideAnimation from "../components/slideAnimation"
import { List, ListItem, ListIcon, Center, Heading, Tooltip } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents, SiNextdotjs, SiMongodb, SiRedux, SiAmazonaws, SiMysql } from 'react-icons/Si';


const skill = () => {
    
    return(
        <>
            <SubTitle>Skill</SubTitle>

            <SlideAnimation>

                <Heading as="h3" fontSize='1.7em' p={{ base : '10px 0 20px' , md : '10px 0 30px 0'}}>💁🏻‍♂️ 기술 스택</Heading>

                <Center p='20px 0 40px' flexWrap='wrap' justifyContent='space-around'>
                    <Tooltip label='JavaScript' w='100%'>
                        <SvgWrap><SiJavascript color="#f7e018"/></SvgWrap>
                    </Tooltip>
                    <Tooltip label='React' w='100%'>
                        <SvgWrap><SiReact color="#61dafb" /></SvgWrap>
                    </Tooltip>
                    <Tooltip label='Styled Components' w='100%'>
                        <SvgWrap><SiStyledcomponents color="#fe9ae4"/></SvgWrap>
                    </Tooltip>
                    <Tooltip label='Next.JS' w='100%'>
                        <SvgWrap><SiNextdotjs /></SvgWrap>
                    </Tooltip>
                    <Tooltip label='Node.JS' w='100%'>
                        <SvgWrap><SiNodedotjs color="#8bc500" /></SvgWrap>
                    </Tooltip>
                    <Tooltip label='HTML5' w='100%'>
                        <SvgWrap><SiHtml5 color="#ff5723" /></SvgWrap>
                    </Tooltip>
                    <Tooltip label='CSS3' w='100%'>
                        <SvgWrap><SiCss3 color="#007bc9" /></SvgWrap>
                    </Tooltip>
                    <Tooltip label='JQuery' w='100%'>
                        <SvgWrap><SiJquery color="#2e68a8" /></SvgWrap>
                    </Tooltip>    
                    
                </Center>

                <Heading as="h3" fontSize='1.7em' p={{ base : '10px 0 20px' , md : '30px 0 30px 0'}}>🙋🏻‍♂️ 사용해본 기술 스택</Heading>
                <Center p={{ base : '20px 0 20px' , md : '20px 0 40px 0'}} flexWrap='wrap' justifyContent='space-around'>    
                    <Center>
                        <Tooltip label='AWS EC2'>
                            <SvgWrap><SiAmazonaws color="#ff9a02" /></SvgWrap>
                        </Tooltip>
                    </Center>
                    <Center>
                        <Tooltip label='Redux'>
                            <SvgWrap><SiRedux color="#764abc"/></SvgWrap>
                        </Tooltip>
                    </Center>
                    <Center>
                        <Tooltip label='Mongo DB'>
                            <SvgWrap><SiMongodb color="#13aa52"/></SvgWrap>
                        </Tooltip>
                    </Center>
                    <Center>
                        <Tooltip label='Mongo DB'>
                            <SvgWrap><SiMysql color="#01618a"/></SvgWrap>
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
                            <ListIcon as={CheckCircleIcon} color='green.500' />HTML과 CSS로 주어진 디자인 레이아웃에 따라 웹을 디자인할 수 있습니다.
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

const SvgWrap = styled.div`
    position: relative; width: 80px; height: 80px; display: inline-block; margin: 10px 5px;
    &>svg{ width: 80px; height: 80px; }
`

export default skill