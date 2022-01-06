import { useState, useEffect } from "react"
import { Box, Center, Text } from "@chakra-ui/react";

const Footer = ({colorMode}) => {

    const [_date, setDate] = useState();
    useEffect(()=>{
        setDate(new Date().getFullYear());
    }, []);

    return(
        <>
            <Box as='footer'>
                <Center h='30px'>
                    <Text fontSize='sm' color={colorMode==='light'?'gray.500':'gray.400'}>{_date}. juni-official All rights reserved</Text>
                </Center>
            </Box>
        </>
    )

}

export default Footer