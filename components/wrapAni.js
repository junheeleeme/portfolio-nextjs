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
    animation: slideLeft 0.6s 0.7s ease forwards; opacity: 0; overflow: hidden;
    @keyframes slideLeft{
        0%{ opacity: 0; transform: translateY(40px); }
        100%{ opacity: 1; transform: translateY(0); }
    }
`

export default WrapAni