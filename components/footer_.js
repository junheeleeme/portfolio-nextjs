import { useState, useEffect } from "react"
import { Box, Center, Text } from "@chakra-ui/react";

const Footer = ({colorMode}) => {

    const [_date, setDate] = useState();
    useEffect(()=>{
        setDate(new Date().getFullYear());
    }, []);

    return(
        <>
            <Box as='footer' position='absolute' bottom='0' left='0' w='100%'>
                <Center h='40px'>
                    <Text fontSize='sm' color={colorMode==='light'?'gray.500':'gray.400'} h='100%' lineHeight='40px'>
                        {_date}. juni-official All rights reserved
                    </Text>
                </Center>
            </Box>
        </>
    )

}

export default Footer