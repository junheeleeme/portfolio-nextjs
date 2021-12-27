import { Flex, Box, Heading } from "@chakra-ui/react"
import styled from "styled-components"
import SubTitle from "../components/subtitle"


const portfolio = () => {

    
    return(
        <>
            <SubTitle>Portfolio</SubTitle>
            <Flex flexWrap='wrap' justifyContent='center' alignContent='space-around' 
                alignItems='center' >
                <Box display='block' width='90%' h='300px' mt='30px' bg='gray.400'>1</Box>
                <Box display='block' width='90%' h='300px' mt='30px' bg='gray.400'>1</Box>
                <Box display='block' width='90%' h='300px' mt='30px' bg='gray.400'>1</Box>
            </Flex>
        </>
    )
}

export default portfolio