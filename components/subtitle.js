import { Heading } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"

const SubTitle = ({txt}) => {
    const { colorMode } = useColorMode();

    return(
        <>
            <Heading as='h2' display='block' position='relative' size='xl' p={{ base : '0 0 20px 0' ,lg:' 0 0 30px'}}
            textDecoration='underline' textDecorationColor={colorMode === 'light'?'#000':'#fff'} textUnderlineOffset='7px'>
                {txt}
            </Heading>
        </>
    )
}

export default SubTitle