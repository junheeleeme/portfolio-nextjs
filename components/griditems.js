import { GridItem } from "@chakra-ui/react"
import styled from "styled-components"
import { Image } from "@chakra-ui/react"
import Link from "next/link"

const GridItems = ({id, title }) => {
    
    return(
        <>
            <Thumb w='100%' bg="gray.500" boxShadow='rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'>
                <Link href={`/portfolio/${id+1}`} passHref><a>
                    <Image src={`/pofol/${title}_cover.png`} w='100%' h='100%' alt={title} /></a>
                </Link>
                
            </Thumb>  
        </>
    )
}

const Thumb = styled(GridItem)`
    position: relative;
    /* &:after{
        content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
        background: linear-gradient(rgba(0,0,0, 0.1), rgba(0,0,0,0.6));
    }
    &:hover>img{
        
    } */
`

export default GridItems