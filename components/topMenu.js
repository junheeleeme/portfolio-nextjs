import styled from "styled-components"
import Link from "next/link"
import { Center } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const TopMenu = ({router, movePage, colorMode, toggleColorMode }) => {

    return(
        <>
            <Link href='/' passHref ><LinkStyled className={router.pathname === '/' ? 'focus' : ''} onClick={movePage}>Home</LinkStyled></Link>
            <Link href='/skill' passHref><LinkStyled className={router.pathname === '/skill' ? 'focus' : ''} onClick={movePage}>Skill</LinkStyled></Link>
            <Link href='/portfolio' passHref><LinkStyled className={router.pathname === '/portfolio' ? 'focus' : ''} onClick={movePage}>Portfolio</LinkStyled></Link>
            <Link href='/contact' passHref><LinkStyled className={router.pathname === '/contact' ? 'focus' : ''} onClick={movePage}>Contact</LinkStyled></Link>

            <ToggleStyled onClick={toggleColorMode} bg={colorMode === 'light' ? 'blackAlpha.200' : 'gray.500'}>
                {colorMode === 'light' ? <SunIcon /> : <MoonIcon/>}
            </ToggleStyled>
        </>
    )

}

const LinkStyled = styled.a`
    font-size: 1.2em; padding: 0 10px;
    @media screen and (max-width: 768px){
        display: block; text-align: center;
        padding: 20px 0;
}`

const ToggleStyled = styled(Center)`
    width: 40px; height: 40px; border-radius: 50%; padding: 0; margin-left: 15px; cursor: pointer;
    &>svg{ font-size: 22px; }
`


export default TopMenu