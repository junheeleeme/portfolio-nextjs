import { SunIcon , MoonIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"

const ColorToggle = ({colorMode, toggleColorMode}) =>{

    return(
        <>
            <Button w='40px' h='40px' m='auto' _focus={false} _hover={false} _active={false}
                onClick={toggleColorMode} bg={colorMode !== 'light' ? 'light_toggleBg' : 'dark_toggleBg'}>
                {colorMode !== 'light' ? <SunIcon color="gray.900"/> : <MoonIcon color="gray.50"/>}
            </Button>
        </>
    )
}

export default ColorToggle