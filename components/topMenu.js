import styled from "styled-components"
import Link from "next/link"
import { Button, MenuItem, Link as LinkStyled } from "@chakra-ui/react"


const TopMenu = ({type, router}) => {

    //Menu List
    const menu = [['Home', '/'], ['Skill', '/skill'], ['Portfolio', '/portfolio'], ['Contact', '/contact']]


    return(
        <>
            {
                type === 'desktop' ?

                menu.map((m, idx) =>
                <Link href={m[1]} passHref key={m[0]+idx}>
                    <LinkStyled as='li' fontSize='1.2em' p='0.2em 1.2em' _hover={false} className={router.pathname === m[1] ? 'focus' : ''}>
                        {m[0]}
                    </LinkStyled>
                </Link>
                )
                    :
                menu.map((m, idx) =>
                <MenuItem key={m[0]+idx} p='0'>
                    <Link href={m[1]} passHref>
                        <LinkStyled className={router.pathname === m[1] ? 'focus' : ''}>
                            {m[0]}
                        </LinkStyled>
                    </Link>
                </MenuItem>
                )
            }
        </>
    )}

// const LinkStyled = styled.a`
//     font-size: 1.2em; padding: 0 20px;
//     @media screen and (max-width: 768px){
//         display: block; width: 100%; 
//         text-align: center;
//         padding: 10px 0; margin-top: 0 !important;
// }`

export default TopMenu