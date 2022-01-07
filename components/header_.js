import { useRouter } from "next/router"

import Logo from "./logo.js"
import TopMenu from './topMenu.js'
import ColorToggle from "./colorToggle.js"
import { useColorMode, Flex, Box, Center, Spacer, IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();

    return(
        <>
        <Box as='header' position='fixed' top='0' left='0' w='100%' h={{ base: '60px', md : '70px'}} zIndex='9999'
            bg={colorMode === 'light' ? 'rgba(0,0,0,0)' : 'blackAlpha.300'} backdropFilter='blur(4px)' boxShadow='rgba(90, 90, 90, 0.12) 0px 1px 3px, rgba(90, 90, 90, 0.24) 0px 1px 2px'>
            <Box maxW='800px' h='100%' p='0 10px' transition='max-width 0.8s ease'>
                <Flex h='100%'>
                    <Center position='relative' w="70px" h='100%' p='0 5px'>
                        <Logo colorMode={colorMode}/>
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
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} w='40px' h='40px' p='0' m='auto' _hover={{ background : 'blackAlpha.300'}} _focus={false} id='menu' islazy={'true'}
                            borderWidth='1px'  borderColor={colorMode==='light'? 'blackAlpha.300':'whiteAlpha.300'} bg='none'/>
                        
                            <MenuList boxShadow='md' p='0' overflow='hidden'>
                                <TopMenu type={'mobile'} router={router}/>
                            </MenuList>
                        </Menu>
                    </Center>
                </Flex>
            </Box>
        </Box>
        </>
    )
}

export default Header

