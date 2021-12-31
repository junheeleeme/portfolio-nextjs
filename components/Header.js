import styled from "styled-components"
import { useRouter } from "next/router"
import { useState } from "react"
import { Flex, Center, Spacer, Image, Box, Button, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Link from "next/link"


const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [menu, setMenu] = useState(false);
    const router = useRouter();
    const maxWid = router.pathname === '/' ? 1200 : 960;

    const toggleMenu = () => {
        if(menu === true) setMenu(false);
        else setMenu(true);
    }
    const movePage = () => {
        setMenu(false);
    }

    return(
        <>
        <HeaderStyle>
            <HeaderWrap mw={maxWid}>
                <Flex h='100%'>
                    <Center w="60px" h='100%'>
                        <Link href="/" passHref>
                            <Box>
                            {
                                colorMode === 'light' ? 
                                <Image src='/logo_white.png' w='100%' h='100%' alt="Logo"/>
                                    :
                                <Image src='/logo_dark.png' w='100%' h='100%' alt="Logo"/>
                            }
                            </Box>
                        </Link>
                    </Center>
                    <Spacer/>
                    <Button display={{base: 'block', md :'none'}} onClick={toggleMenu}>❖</Button>
                    <Center display={{base: 'block', md: 'flex'}} position={{base: 'fixed', md: 'relative'}} top={{base: '70px', md: 'auto'}} left={{base : '0', md:'auto'}} opacity={menu === false ? { base: '0', md : "1"} : { base: '1', md: '1'}}
                            w={{ base: '100vw', md : "400px"}} h={menu === false ? { base: '0', md : "100%"} : { base: '100vh', md: '100%'}} overflow='hidden' zIndex={{base: 999, md: 'auto'}} transition='opacity 0.5s ease, transform 0.5s ease' bg={ colorMode === 'light' ? 'gray.100' : 'gray.800'}
                            transform={menu === false ? { base: 'translateY(-30px)', md : "none"} : { base : 'translateY(0px)' , md : 'translateY(-30px)'}}>

                        <Link href='/' passHref ><LinkStyled className={router.pathname === '/' ? 'focus' : ''} onClick={movePage}>Home</LinkStyled></Link>
                        <Link href='/skill' passHref><LinkStyled className={router.pathname === '/skill' ? 'focus' : ''} onClick={movePage}>Skill</LinkStyled></Link>
                        <Link href='/portfolio' passHref><LinkStyled className={router.pathname === '/portfolio' ? 'focus' : ''} onClick={movePage}>Portfolio</LinkStyled></Link>
                        <Link href='/contact' passHref><LinkStyled className={router.pathname === '/contact' ? 'focus' : ''} onClick={movePage}>Contact</LinkStyled></Link>
                        <ToggleStyled onClick={toggleColorMode} bg={colorMode === 'light' ? 'blackAlpha.200' : 'gray.500'}>
                            {colorMode === 'light' ? <SunIcon /> : <MoonIcon/>}
                        </ToggleStyled>

                    </Center>

                </Flex>
            </HeaderWrap>
        </HeaderStyle>
        </>
    )
}

const HeaderStyle = styled.header`
    & .focus { font-weight: bold; }
`
const HeaderWrap = styled.div`
    height: 70px; padding: 0 20px; transition: max-width 1s ease; max-width: ${props=>props.mw}px;
`
const LinkStyled = styled.a`
    font-size: 1.2em;
    @media screen and (max-width: 768px){
        display: block; text-align: center;
        padding: 20px 0;
        
    }
`
const ToggleStyled = styled(Center)`
    width: 40px; height: 40px; border-radius: 50%; padding: 0; cursor: pointer;
    &>svg{ font-size: 22px; }
`

export default Header

