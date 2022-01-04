import { Box, Tooltip, Center, Heading } from "@chakra-ui/react"
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents,
    SiNextdotjs, SiMongodb, SiRedux, SiAmazonaws, SiMysql } from 'react-icons/Si';

const SkillStack = () => {
    
    return(
        <>
            <Heading as="h3" fontSize='1.7em' p={{ base : '10px 0 20px' , md : '10px 0 30px 0'}}>💁🏻‍♂️ 기술 스택</Heading>

            <Center p='20px 0 40px' flexWrap='wrap' minH='160px' justifyContent='space-around'>
                <Tooltip label='JavaScript' w='100%'>
                    <Box  className='svgWrap'><SiJavascript color="#f7e018"/></Box>
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

            <Center p={{ base : '20px 0 20px' , md : '20px 0 40px 0'}} minH='160px' flexWrap='wrap' justifyContent='space-around'>    
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

        </>
    )

}

export default SkillStack