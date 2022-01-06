import { Heading } from "@chakra-ui/react"

const SubTitle = ({txt}) => {

    return(
        <>
            <Heading as='h2' display='block' position='relative' size='xl' pb={{ base : '20px' ,md:'30px'}}>
                {txt}
            </Heading>
        </>
    )
}

export default SubTitle