import styled from "styled-components"
import { useState, useEffect } from "react"

export default function Footer(){

    const [_date, setDate] = useState();
    useEffect(()=>{
        setDate(new Date().getFullYear());
    }, []);

    return(
        <>
            <footer>
                <FooterWrap>
                    <p>{_date}. juni-official All rights reserved</p>
                </FooterWrap>
            </footer>
        </>
    )

}

const FooterWrap = styled.section`
    max-width: 1080px;
    height: 30px;
    text-align: center;
    &>p{
        line-height: 30px;
        font-size: 14px;
        color: #747474;
    }
`