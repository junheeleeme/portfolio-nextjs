import styled from "styled-components"
import { useRouter } from "next/router"
import { useState } from "react"

import Logo from "./logo"
import TopMenu from './topMenu'
import ColorToggle from "./colorToggle"
import MobileMenu from "./mobileMenu"
import { useColorMode, Flex, Center, Spacer, Button } from "@chakra-ui/react"


const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [toggle, setToggle] = useState(false);
    const router = useRouter();
    const maxWid = router.pathname === '/' ? 1200 : 960;

    const toggleMenu = () => {
        if(toggle === true){ setToggle(false); }
        else{ setToggle(true); }
    }
    const closeMenu = () => {
        setToggle(false);
    }

    return(
        <>
        <HeaderStyle>
            <HeaderWrap mw={maxWid}>
                <Flex h='100%'>
                    <Center position='relative' w="60px" h='100%'>
                        <Logo colorMode={colorMode} closeMenu={closeMenu}/>
                    </Center>
                    <Spacer/>
                    
                    {/* DeskTop Menu */}
                    <Center display={{base: 'none', md: 'flex'}} position='relative'>
                        <TopMenu router={router}/>
                    </Center>

                    {/* Color Toggle */}
                    <Center>
                        <ColorToggle colorMode={colorMode} toggleColorMode={toggleColorMode}/>
                    </Center>

                    {/* Mobile Menu Toggle */}
                    <Center display={{base: 'flex', md: 'none'}} ml='10px'>
                        <Button onClick={toggleMenu} w='40px' h='40px' _hover={false} _focus={false} _active={false}
                        bg={colorMode==='light'? 'gray.200':'black'}>M
                        </Button>
                    </Center>

                    {/* Mobile Menu */}
                    <MobileMenu isVisible={toggle} colorMode={colorMode} >
                        <TopMenu router={router} toggleMenu={toggleMenu} colorMode={colorMode}/>
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
    height: 70px; padding: 0 15px; transition: max-width 1s ease; max-width: ${props=>props.mw}px;
`


export default Header

