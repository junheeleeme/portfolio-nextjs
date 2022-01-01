import { Heading } from "@chakra-ui/react"


const SubTitle = ({txt}) => {

    return(
        <>
            <Heading as='h2' display='block' position='relative' size='2xl' pb={{ base : '30px' ,md:'40px'}}>
                {txt}
            </Heading>
        </>
    )
}

export default SubTitle