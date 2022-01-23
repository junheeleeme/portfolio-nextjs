import Link from "next/link"
import { Box, Image, Link as LinkStyled, Text } from "@chakra-ui/react"

const PortfolioArticle = ({data}) => {

    return(
        <>
        { 
            <Box as='article' position='relative' borderRadius='5px' overflow='hidden' w='100%' h='100%'
            boxShadow='rgb(90 90 90 / 41%) 0px 5px 15px 0px'>
                <Link scroll={false} href={'/portfolio/'+(data.id+1)} passHref>
                    <LinkStyled >
                        <Image src={`/pofol/${data.title}_cover.png`} alt={data.title} display='inline-block'
                        w='100%' h='100%' maxW='1280px' maxH='720px'/>
                        <Box position='absolute' top='0' left='0' w='100%' h='100%' bg='linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))'>
                            <Text position='absolute' bottom='0' left='0' w='100%' fontSize='1.3em' fontWeight='bold' p='10px 12px' textOverflow='ellipsis'
                            overflow='hidden' whiteSpace='nowrap' color="#fff">
                                {data.title}
                            </Text>
                        </Box>
                        
                    </LinkStyled>
                </Link>
            </Box>
        }
        </>
    )
}

export default PortfolioArticle