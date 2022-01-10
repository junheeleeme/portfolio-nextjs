import { Image, Heading } from "@chakra-ui/react"
import Link from "next/link"
import { Link as LinkStyled } from "@chakra-ui/react"

const Logo = ({colorMode}) => {

    return(
        <>
        <Heading as='h1' position='relative' w='100%' h='100%'>
            <Link href="/" passHref>
                <LinkStyled position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)' zIndex='9999'
                transition='transform .3s ease' w='100%' h='auto' p='2px' _active={false} _focus={false}
                _hover={{transform : 'translate(-50%, -50%) rotate(7deg)'}}>
                {
                    colorMode === 'light' ? 
                    <Image src='/logo_white.png' w='100%' h='100%' alt="Logo"/>
                        :
                    <Image src='/logo_dark.png' w='100%' h='100%' alt="Logo"/>
                }
                </LinkStyled>
            </Link>
        </Heading>
        </>
    )
}

export default Logo