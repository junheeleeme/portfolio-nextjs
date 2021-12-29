import { Heading } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react";
import styled from "styled-components";

const SubTitle = ({children}) => {


    return(
        <>
            <HeadingWrap>
                <Heading as='h2' display={{ base: 'block' ,xl : 'none'}} position='relative' size='3xl'
                    pb={{ base : '30px' ,md:'40px'}}>
                    {children}
                </Heading>
            </HeadingWrap>
        </>
    )

}

const HeadingWrap = styled(Box)`
    animation: slideRight 0.6s 0.4s ease forwards; opacity: 0;
    @keyframes slideRight{
        0%{ opacity: 0; transform: translateX(-40px); }
        100%{ opacity: 1; transform: translateX(0); }
    }
`

export default SubTitle