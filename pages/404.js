import HeadInfo from "../components/headInfo"
import Link from "next/link"
import { Center, Heading, Button, Link as LinkStyled } from "@chakra-ui/react"

const Notfound = () => {

    return(
        <>
            <HeadInfo title='404'></HeadInfo>
            <Center as='section' display='block' userSelect='none'>
                <Center p='5px'>
                    <Heading as='h2' size='4xl'>404</Heading>
                </Center>
                <Center p='5px'> 
                    <Heading as='h2' size='xl'>Page Not Found</Heading>
                </Center>
                <Center p='20px'>
                    <Button colorScheme='blue' p='0'>
                        <Link href='/' passHref>
                            <LinkStyled p='10px 20px' _hover={false}>Go Home</LinkStyled>
                        </Link>
                    </Button>
                </Center>
            </Center>
        </>
    )
}


export default Notfound
