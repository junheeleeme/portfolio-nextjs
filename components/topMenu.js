import styled from "styled-components"
import Link from "next/link"
import { Box, Button } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons"

const TopMenu = ({router, toggleMenu, colorMode}) => {

    return(
        <>
            <Box display={{base: 'block', md: 'none'}} position='relative' padding='0 15px' h='70px' m='0'>
                <Button position='absolute' top='50%' right='15px' transform='translate(0, -50%)' w='40px' h='40px' onClick={toggleMenu}
                borderRadius='50%' border="1px solid #000" bg={colorMode==='light'? 'gray.200':'black'} _hover={false} _focus={false} _active={false}>
                    <CloseIcon />
                </Button>    
            </Box>
            

            <Link href='/' passHref >
                <LinkStyled className={router.pathname === '/' ? 'focus' : ''} onClick={toggleMenu}>
                    Home
                    </LinkStyled>
            </Link>
            <Link href='/skill' passHref>
                <LinkStyled className={router.pathname === '/skill' ? 'focus' : ''} onClick={toggleMenu}>
                    Skill
                </LinkStyled>
            </Link>
            <Link href='/portfolio' passHref>
                <LinkStyled className={router.pathname === '/portfolio' ? 'focus' : ''} onClick={toggleMenu}>
                    Portfolio
                </LinkStyled>
            </Link>
            <Link href='/contact' passHref>
                <LinkStyled className={router.pathname === '/contact' ? 'focus' : ''} onClick={toggleMenu}>
                    Contact
                </LinkStyled>
            </Link>
        </>
    )}

const LinkStyled = styled.a`
    font-size: 1.2em; padding: 0 20px;
    @media screen and (max-width: 768px){
        display: block; width: 100%; 
        text-align: center;
        padding: 15px 0; margin-top: 0 !important;
}`

export default TopMenu