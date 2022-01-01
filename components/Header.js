import { debounce } from 'lodash'
import styled from "styled-components"

import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import TopMenu from './topMenu'
import { Flex, Center, Spacer, Image, Box, Button, useColorMode } from "@chakra-ui/react"


const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [mobile, setMobile] = useState();
    const [toggle, setToggle] = useState(false);
    const router = useRouter();
    const maxWid = router.pathname === '/' ? 1200 : 960;

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, []);

    const handleResize = debounce(() => {
        console.log('change')
    }, 250);

    const toggleMenu = () => {
        if(toggle === true) setToggle(false);
        else setToggle(true);
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
                    <Button display={{base: 'block', md :'none'}} onClick={toggleMenu}>❖</Button>
                    
                        {/* PC 메뉴 */}
                    <Center display={{base: 'none', md: 'flex'}} position='relative' bg={ colorMode === 'light' ? 'gray.100' : 'gray.800'}>
                        <TopMenu router={router} movePage={movePage} colorMode={colorMode} toggleColorMode={toggleColorMode} />
                    </Center>

                        {/* 모바일 메뉴 */}
                        {/* <TopMenu router={router} movePage={movePage} colorMode={colorMode} toggleColorMode={toggleColorMode} /> */}

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

