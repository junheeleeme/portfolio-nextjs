import { useRef, useEffect, useState } from "react"
import { Box, Center, Spinner } from "@chakra-ui/react";

const Voxel = () => {
    
    const [loaded, setLoaded] = useState(false);
    const view = useRef(null); //속성 변화 감지 노드
    

    useEffect(()=>{
        const interval = setInterval(() => {
            if(view.current.loaded === true) {
                setLoaded(true);
                clearInterval(interval);
            }
        }, 500);
    }, []);


    return(
        <>
            <Box w='100%' h='450px' m={{base : '-60px 0 -90px 0', md : '-70px 0 -100px 0' }} position='relative'>
                {
                    loaded === false ?
                    <Center position='absolute' top='0' left='0' w='100%' h='100%' zIndex='9999'>
                        <Spinner thickness='4px' speed='0.65s' color='gray.800' emptyColor='gray.300' size='xl' />
                    </Center>
                    :
                    <></>
                }
                {/* disable-zoom='false' */}
                <Box position='relative' opacity={loaded === true ? '1' : '0'} transition='opacity 1s ease'>
                    <model-viewer ref={view} src='/voxel_juni_coding.gltf' camera-controls  autoplay auto-rotate
                    shadow-intensity="3" shadow-softness='1' alt='꾸생 아바타' camera-orbit='150deg 65deg 110%' 
                    environment-image='neutral'
                    style={{width : '100%', height : '450px' ,'--progress-bar-height' : '0' , '--progress-mask' : 'none'}}/>
                </Box>
            </Box>
        </>
    )
}


export default Voxel