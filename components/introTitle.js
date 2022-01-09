import { Heading } from "@chakra-ui/react"

const IntroTitle = ({txt}) => {

    return(
        <Heading as='h2' fontSize='1.1em' w='100%' p='10px' letterSpacing='0.05em' color='white' 
        textAlign='center' bg='blackAlpha.400' borderRadius='7px' wordBreak='keep-all'>
            {txt}
        </Heading>
    )
}

export default IntroTitle