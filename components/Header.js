import styled from "styled-components"

import { useRouter } from "next/router"
import { useState } from "react"
import Link from "next/link"
import TopMenu from './topMenu'
import MobileMenu from './mobileMenu'
import { Flex, Center, Spacer, Image, Box, Button, useColorMode } from "@chakra-ui/react"
import { HiMenu } from 'react-icons/hi'

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [toggle, setToggle] = useState(false);
    const router = useRouter();
    const maxWid = router.pathname === '/' ? 1200 : 960;

    const toggleMenu = () => {
        if(toggle === true){
            setToggle(false);
        }else{
            setToggle(true);
        }
        console.log(toggle)
    }
    const movePage = () => {
        setToggle(false);
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
                    
                    {/* PC 메뉴 */}
                    <Center display={{base: 'none', md: 'flex'}} position='relative'>
                        <TopMenu router={router} movePage={movePage} colorMode={colorMode} toggleColorMode={toggleColorMode} />
                    </Center>
                    
                    {/* 모바일 메뉴 */}
                    <Center display={{base: 'flex', md: 'none'}}> 
                        <Button onClick={toggleMenu} w='50px' h='50px' ><HiMenu/></Button>
                    </Center>

                    <MobileMenu isVisible={toggle} colorMode={colorMode}>
                        <TopMenu router={router} movePage={movePage} colorMode={colorMode} toggleColorMode={toggleColorMode} /> 
                    </MobileMenu>

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

export default Header

