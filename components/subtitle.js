import { Heading, useColorMode } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react";
import styled from "styled-components";

const SubTitle = ({children}) => {

    const { colorMode } = useColorMode();

    return(
        <>
            <HeadingWrap>
                <Heading as='h2' position='relative' display='block' size='3xl' p='0 0 40px 0'>
                    {children}
                </Heading>
            </HeadingWrap>
        </>
    )

}

const HeadingWrap = styled(Box)`
    animation: slideRight 1s .5s ease forwards; opacity: 0;
    @keyframes slideRight{
        0%{ opacity: 0; transform: translateX(-40px); }
        100%{ opacity: 1; transform: translateX(0); }
    }
`

export default SubTitle