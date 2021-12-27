import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
    initialColorMode: 'light', 
    useSystemColorMode: false, //initialColorMode를 알 수 없는 경우 true일 때, system 기본값으로 사용
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme