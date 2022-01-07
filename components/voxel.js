import { useRef, useEffect, useState } from "react"
import { Box, Center, Spinner } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const Voxel = () => {
    
    const { colorMode } = useColorMode();
    const [loaded, setLoaded] = useState(false);
    const view = useRef(null); //속성 변화 감지 노드
    

    useEffect(()=>{
        const interval = setInterval(() => {
            if(view.current.loaded === true) {
                console.log("로딩 완료");
                setLoaded(true);
                clearInterval(interval);
            }else{
                console.log("로딩 체크");
            }
        }, 500);
    }, []);
    

    return(
        <>
            <Box w='100%' h='450px' m='-20px 0 -100px 0' position='relative'>
                {
                    loaded === false ?
                    <Center position='absolute' top='0' left='0' w='100%' h='100%' zIndex='9999'>
                        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='gray.800' emptyColor='gray.300' size='xl' />
                    </Center>
                    :
                    <></>
                }
                <Box position='relative' opacity={loaded === true ? '1' : '0'} transition='opacity 1s ease'>
                    <model-viewer ref={view} src='/voxel_jjuni-official.gltf' camera-controls auto-rotate  disable-zoom='true'
                    shadow-intensity="3" autoplay environment-image="neutral" alt='꾸생 아바타' 
                    style={{width : '100%', height : '450px' ,'--progress-bar-height' : '0' , '--progress-mask' : 'none'}}/>
                </Box>
            </Box>
        </>
    )
}


export default Voxel