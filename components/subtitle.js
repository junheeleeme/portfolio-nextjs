import { Box, Heading, useColorMode } from "@chakra-ui/react"
import { ColorMode } from "@chakra-ui/react"
import styled from "styled-components";

const SubTitle = ({children}) => {

    const { colorMode } = useColorMode();

    return(
        <>
            <AnimateBox mb='20px' opacity="0">
                <Heading as='h2' display='inline-block' size='xl' p='5px 2px' borderBottomWidth='1px'
                        borderBottomStyle='solid' borderBottomColor={colorMode === 'light' ? '#000' : '#fff' }>
                    {children}
                </Heading>
            </AnimateBox>
        </>
    )

}

const AnimateBox = styled(Box)`
    animation: slide 1s 0.5s ease forwards;
    @keyframes slide{
        0%{ opacity: 0; transform: translateX(-40px); }
        100%{ opacity: 1; transform: translateX(0); }
    }
`

export default SubTitle