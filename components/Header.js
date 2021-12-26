import styled from "styled-components"
import Link from "next/link"
import { useState, useRouter } from "next/router"


export default function Header({theme}){

    const router = useRouter();
    // const [toggle, setToggle] = useState(false);


    return(
        
            <HeaderWrap>
                <NavStyled>
                    <UlStyled>
                        <li>
                            <Link href='/'><a className={router.pathname === '/' ? 'active' : ''}>Home</a></Link>
                        </li>
                        <li>
                            <Link href='/about'><a className={router.pathname === '/about' ? 'active' : ''}>About</a></Link>
                        </li>
                        <li>
                            <Link href='/skill'><a className={router.pathname === '/skill' ? 'active' : ''}>Skill</a></Link>
                        </li>
                        <li>
                            <Link href='/portfolio'><a className={router.pathname === '/portfolio' ? 'active' : ''}>Portfolio</a></Link>
                        </li>
                        <li>
                            <Link href='/contact'><a className={router.pathname === '/contact' ? 'active' : ''}>Contact</a></Link>
                        </li>
                    </UlStyled>
                </NavStyled>
            </HeaderWrap>
        
    )
}

const HeaderWrap = styled.header`
    position: relative;
    max-width: 1080px; height: 70px;
    text-align: center;
`
const NavStyled = styled.nav`
    position: absolute; top: 50%; left: 50%; 
    transform: translate(-50%, -50%); width: 100%; white-space: nowrap;
`

const UlStyled = styled.ul`
    display: inline-block; list-style: none; padding-left: 0; 
    
    &>li{
        display: inline-block; position: relative;
        margin-right: 40px;
    }
    &>li:last-child{ margin-right: 0; }
    &>li>a{
        display: inline-block;
        font-size: 20px;
        padding: 7px 7px; transition: width: 0.3s ease;
    }
    &>li>a:after{
        content: ''; position: absolute; left: 0; bottom: 0; width: 0%; height: 2px; 
        background-color: #000; transition: width 0.5s ease;
    }
    &>li>.active{ font-weight: bold; }
    &>li>.active:after, &>li>a:hover :after{ 
        width: 100%; 
    }
`