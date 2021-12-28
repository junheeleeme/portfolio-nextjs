import styled from "styled-components"
import { Box } from "@chakra-ui/react"

const WrapAni = ({children}) => {

    return(
        <>
            <WrapBox>{children}</WrapBox>
        </>
    )
}

const WrapBox = styled(Box)`
    animation: slideLeft 0.7s 1s ease forwards; opacity: 0;
    @keyframes slideLeft{
        0%{ opacity: 0; transform: translateX(40px); }
        100%{ opacity: 1; transform: translateX(0); }
    }
`

export default WrapAni