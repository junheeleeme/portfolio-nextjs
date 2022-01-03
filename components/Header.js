import styled from "styled-components"
import { useRouter } from "next/router"
import { useState } from "react"

import Logo from "./logo"
import TopMenu from './topMenu'
import ColorToggle from "./colorToggle"
import { useColorMode, Flex, Box, Center, Spacer, IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

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
                    <Center as='nav'>
                        <Center as='ul' display={{base: 'none', md: 'flex'}} position='relative' listStyleType='none'>
                            <TopMenu type={'desktop'} router={router}/>
                        </Center>
                    </Center>

                    {/* Color Toggle */}
                    <Center ml='1em'>
                        <ColorToggle colorMode={colorMode} toggleColorMode={toggleColorMode}/>
                    </Center>

                    {/* Mobile Menu Toggle */}
                    <Center display={{base: 'flex', md: 'none'}} ml='10px' width='40px'>
                        <Menu isLazy id={`mobile-menu-id`}>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} w='40px' h='40px' p='0' m='auto' _focus={false} id='menu' islazy={'true'}
                            borderWidth='1px'  borderColor={colorMode==='light'? 'blackAlpha.300':'whiteAlpha.300'} bg='none'/>
                        
                            <MenuList boxShadow='md' p='0'>
                                <TopMenu type={'mobile'} router={router}/>
                            </MenuList>
                        </Menu>
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
    height: 70px; padding: 0 15px; transition: max-width 1s ease; max-width: ${props=>props.mw}px;
`


export default Header

