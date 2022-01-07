import { Box, Tooltip, Center, Heading } from "@chakra-ui/react"
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents,
    SiNextdotjs, SiMongodb, SiRedux, SiAmazonaws, SiMysql } from 'react-icons/si'


const SkillStack = () => {


    return(
        <>
            <Heading as="h3" fontSize='1.5em' p={{ base : '15px 0' , md : '10px 0'}}>💁🏻‍♂️ 기술 스택</Heading>

            <Center p={{base : '10px 0 20px 0', lg : '20px 0 30px'}} flexWrap='wrap' minH='160px' justifyContent='space-around'>

                <Tooltip label='JavaScript' w='100%'>
                    <Box  className='svgWrap'><SiJavascript color="#f7e018"/></Box>
                </Tooltip>
                <Tooltip label='React' w='100%'>
                    <Box className='svgWrap'><SiReact color="#61dafb"/></Box>
                </Tooltip>
                <Tooltip label='Styled Components' w='100%'>
                    <Box className='svgWrap'><SiStyledcomponents color="#fe9ae4"/></Box>
                </Tooltip>
                <Tooltip label='Next.JS' w='100%'>
                    <Box className='svgWrap'><SiNextdotjs color='#000'/></Box>
                </Tooltip>
                <Tooltip label='Node.JS' w='100%'>
                    <Box className='svgWrap'><SiNodedotjs color="#8bc500"/></Box>
                </Tooltip>
                <Tooltip label='HTML5' w='100%'>
                    <Box className='svgWrap'><SiHtml5 color="#ff5723"/></Box>
                </Tooltip>
                <Tooltip label='CSS3' w='100%'>
                    <Box className='svgWrap'><SiCss3 color="#007bc9"/></Box>
                </Tooltip>
                <Tooltip label='JQuery' w='100%'>
                    <Box className='svgWrap'><SiJquery color="#2e68a8" /></Box>
                </Tooltip>    
                    
            </Center>

            <Heading as="h3" fontSize='1.5em' p={{ base : '15px 0' , md : '10px 0'}}>🙋🏻‍♂️ 사용해본 기술 스택</Heading>

            <Center p={{base : '10px 0 20px 0', lg : '20px 0 30px'}} minH='160px' flexWrap='wrap' justifyContent='space-around'>    
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