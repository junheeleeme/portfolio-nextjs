import { Box, Tooltip, Center, Heading, HStack } from "@chakra-ui/react"
import { SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiJquery, SiStyledcomponents,
    SiNextdotjs, SiMongodb, SiRedux, SiAmazonaws, SiMysql, SiSvelte, SiVuedotjs, SiFlutter } from 'react-icons/si'
import { BsFillEmojiSmileFill, BsFillEmojiLaughingFill, BsFillEmojiHeartEyesFill } from 'react-icons/Bs'
import { useColorModeValue } from "@chakra-ui/react"

const SkillStack = () => {

    const color = useColorModeValue('gray.700', 'gray.200')

    return(
        <>
            <HStack as="div" fontSize='2xl' color={color} p={{ base : '15px 0' , md : '10px 0'}} >
                <Box display='inline-block' m='0' verticalAlign='middle'><BsFillEmojiSmileFill/></Box>
                <Heading as='h3' fontSize='inherit' fontWeight='bold'>기술 스택</Heading>
            </HStack>

            <Center p={{base : '10px 0 20px 0', lg : '20px 0 30px'}} flexWrap='wrap' minH='160px' justifyContent='space-around'>

                <Tooltip label='JavaScript' w='100%'>
                    <Box  className='svgWrap'><SiJavascript color="#f7e018"/></Box>
                </Tooltip>
                <Tooltip label='React' w='100%'>
                    <Box className='svgWrap'><SiReact color="#61dafb"/></Box>
                </Tooltip>
                <Tooltip label='Next.JS' w='100%'>
                    <Box className='svgWrap'><SiNextdotjs color='#000'/></Box>
                </Tooltip>
                <Tooltip label='Styled Components' w='100%'>
                    <Box className='svgWrap'><SiStyledcomponents color="#fe9ae4"/></Box>
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

            <HStack as="div" fontSize='2xl' color={color} p={{ base : '15px 0' , md : '10px 0'}}>
                <Box display='inline-block' m='0' verticalAlign='middle'><BsFillEmojiLaughingFill/></Box>
                <Heading as='h3' fontSize='inherit' fontWeight='bold'>사용해본 기술 스택</Heading>
            </HStack>

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

            <HStack as="div" fontSize='2xl' color={color} p={{ base : '15px 0' , md : '10px 0'}}>
                <Box display='inline-block' m='0' verticalAlign='middle'><BsFillEmojiHeartEyesFill/></Box>
                <Heading as='h3' fontSize='inherit' fontWeight='bold'>관심있는 기술 스택</Heading>
            </HStack>

            <Center p={{base : '10px 0 20px 0', lg : '20px 0 30px'}} minH='160px' flexWrap='wrap' justifyContent='space-around'>    
                <Center>
                    <Tooltip label='Svelte'>
                        <Box className='svgWrap'><SiSvelte color="#ff3b00" /></Box>
                    </Tooltip>
                </Center>
                <Center>
                    <Tooltip label='Vue.js'>
                        <Box className='svgWrap'><SiVuedotjs color="#41b883"/></Box>
                    </Tooltip>
                </Center>
                <Center>
                    <Tooltip label='Flutter'>
                        <Box className='svgWrap'><SiFlutter color="#02c7fa"/></Box>
                    </Tooltip>
                </Center>
            </Center>

        </>
    )

}

export default SkillStack