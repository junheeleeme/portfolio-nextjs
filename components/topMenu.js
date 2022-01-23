import Link from "next/link"
import { MenuItem, Link as LinkStyled } from "@chakra-ui/react"

const TopMenu = ({type, router}) => {

    //Menu List
    const menu = [['Home', '/'], ['Skill', '/skill'], ['Portfolio', '/portfolio'], ['Contact', '/contact']]


    return(
        <>
            {
                type === 'desktop' ?

                menu.map((m, idx) =>
                <Link href={m[1]} passHref scroll={false} key={m[0]+idx}>
                    <LinkStyled as='li' fontSize='1.2em' p='0.2em 1.2em' _hover={false} className={router.pathname === m[1] ? 'focus' : ''}>
                        {m[0]}
                    </LinkStyled>
                </Link>
                )
                    :
                menu.map((m, idx) =>
                <MenuItem key={m[0]+idx} p='0' bg='none' _focus={false} className={router.pathname === m[1] ? 'focus' : ''}>
                    <Link href={m[1]} scroll={false} passHref>
                        <LinkStyled w='100%' fontSize='1.25em' p='10px 0' m='0' textAlign='center' _hover={false} _active={false} _focus={false}>
                            {m[0]}
                        </LinkStyled>
                    </Link>
                </MenuItem>
                )
            }
        </>
    )}

export default TopMenu