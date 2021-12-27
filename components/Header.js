import styled from "styled-components"
import Link from "next/link"
import { useState, useRouter } from "next/router"
import { useColorMode } from "@chakra-ui/react"
import { Flex, Center, Spacer, Button } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter();

    return(
        
        <HeaderStyled>

            <Flex h='100%'>
                <Center w="80px" h='100%'>
                    <Link href="/" passHref><Logo><h1>&#60;꾸&#47;&#62;</h1></Logo></Link>
                </Center>
                <Spacer/>
                <Center w="700px" h='100%'>
                    <Link href='/' passHref>
                        <LinkStyled className={router.pathname === '/' ? 'focus' : ''}>Home</LinkStyled>
                    </Link>
                    <Link href='/skill' passHref>
                        <LinkStyled className={router.pathname === '/skill' ? 'focus' : ''}>Skill</LinkStyled>
                    </Link>
                    <Link href='/portfolio' passHref>
                        <LinkStyled className={router.pathname === '/portfolio' ? 'focus' : ''}>Portfolio</LinkStyled>
                    </Link>
                    <Link href='/contact' passHref>
                        <LinkStyled className={router.pathname === '/contact' ? 'focus' : ''}>Contact</LinkStyled>
                    </Link>
                </Center>

                <Center>
                    <ToggleStyled onClick={toggleColorMode} bg={colorMode === 'light' ? 'blackAlpha.200' : 'gray.500'}>
                        {colorMode === 'light' ? <SunIcon /> : <MoonIcon/>}
                    </ToggleStyled>
                </Center>
            </Flex>

        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    max-width: 1080px; height: 70px;
`
const Logo = styled.a`
    font-size: 2em;
    font-weight: bold;
`
const LinkStyled = styled.a`
    position: relative; padding: 5px 10px;
    transition: border .6s ease;
    &:hover { border-bottom: 1px solid #000; }
    &.focus{ font-weight: bold; }
`

const ToggleStyled = styled(Button)`
    width: 40px; height: 40px; border-radius: 50%; padding: 0;
    &>svg{ font-size: 22px; }
`


export default Header

