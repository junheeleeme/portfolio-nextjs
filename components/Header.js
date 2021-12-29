import styled from "styled-components"
import Link from "next/link"
import { useRouter } from "next/router"
import { useColorMode } from "@chakra-ui/react"
import Image from "next/image"
import { Flex, Center, Spacer, Button } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Logo from '../public/logo.png';


const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const router = useRouter();

    const maxWid = router.pathname === '/' ? 1200 : 960;
    
    return(
        
        <HeaderStyle>
            <HeaderWrap mw={maxWid}>
                <Flex h='100%'>
                    <Center w="60px" h='100%'>
                        <Link href="/" passHref>
                            <LogoLink>
                                <Image src={Logo} alt="Logo" />
                            </LogoLink>
                        </Link>
                    </Center>
                    <Spacer/>
                    <Center w="400px" h='100%'>
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
                
                    </Center>
                    <Center>
                        O
                    </Center>
                    <Center>
                        <ToggleStyled onClick={toggleColorMode} bg={colorMode === 'light' ? 'blackAlpha.200' : 'gray.500'}>
                            {colorMode === 'light' ? <SunIcon /> : <MoonIcon/>}
                        </ToggleStyled>
                    </Center>
                </Flex>
            </HeaderWrap>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
`

const HeaderWrap = styled.div`
    height: 70px; padding: 0 20px; transition: max-width 1s ease; max-width: ${props=>props.mw}px;
`


const LogoLink = styled.a`
    font-size: 2em; height: 40px;
    font-weight: bold;
`
const LinkStyled = styled.a`
    position: relative; padding: 5px 5px;
    transition: border .6s ease;
    &:after{ 
        content: ''; position: absolute; bottom: 0; left: 0; 
        width: 0%; height: 1px; background-color: #000;
        transition: 0.5s ease;
    }
    &:hover :after { width: 100%; }
    &.focus { font-weight: bold; }
    &.focus :after{  width: 100%; height: 2px; }
`

const ToggleStyled = styled(Button)`
    width: 40px; height: 40px; border-radius: 50%; padding: 0;
    &>svg{ font-size: 22px; }
`

export default Header

