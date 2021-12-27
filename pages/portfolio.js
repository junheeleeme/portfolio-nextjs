import { Flex, Box } from "@chakra-ui/react"

const portfolio = () => {
    return(
        <>
            <Flex flexWrap='wrap' justifyContent='space-between' alignContent='space-around' 
                alignItems='center' p='10px'> 
                <Box display='inline-block' w='40%' h='300px' m='20px 0' bg='gray.400'>1</Box>
                <Box display='inline-block' w='40%' h='300px' m='20px 0' bg='gray.400'>1</Box>
                <Box display='inline-block' w='40%' h='300px' m='20px 0' bg='gray.400'>1</Box>
            </Flex>
        </>
    )
}

export default portfolio