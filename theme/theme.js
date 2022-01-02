import { extendTheme } from "@chakra-ui/react"
import { breakpoints } from "./breakpoints";

export const theme = extendTheme({
    config :{
        initialColorMode : 'light',
        cssVarPrefix: 'macjjuni'
    },
    colors: {
        dark_toggleBg : '#845EC2',
        light_toggleBg : '#F9F871',
        dark_BtnBg: '#171923',
        light_BtnBg: '#cfcfcf',
    },
    breakpoints,
});




