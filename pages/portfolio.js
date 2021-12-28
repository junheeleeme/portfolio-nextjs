import { Flex, Box, Heading } from "@chakra-ui/react"
import styled from "styled-components"
import SubTitle from "../components/subtitle"
import WrapAni from "../components/wrapAni"


const portfolio = () => {

    
    return(
        <>
            <SubTitle>Portfolio</SubTitle>

            <WrapAni>
                <Flex flexWrap='wrap' justifyContent='center' alignContent='space-around' p="40px 0" flexDirection='column'
                    alignItems='center' >
                    <Box display='block' width='80%' h='250px' mb='30px' bg='gray.400'>1</Box>
                    <Box display='block' width='400px' h='250px' mb='30px' bg='gray.400'>1</Box>
                    <Box display='block' width='400px' h='250px' mb='30px' bg='gray.400'>1</Box>
                </Flex>
            </WrapAni>
        </>
    )
}

export default portfolio