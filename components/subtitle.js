import { Box, Heading, useColorMode } from "@chakra-ui/react"
import { ColorMode } from "@chakra-ui/react"

const SubTitle = ({children}) => {

    const { colorMode } = useColorMode();

    return(
        <>
            <Box mb='20px'>
                <Heading as='h2' display='inline-block' size='xl' p='5px 2px' borderBottomWidth='1px' 
                borderBottomStyle='solid' borderBottomColor={colorMode === 'light' ? '#000' : '#fff' }>
                    {children}
                </Heading>
            </Box>
        </>
    )

}

export default SubTitle