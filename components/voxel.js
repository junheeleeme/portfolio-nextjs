import { useRef, useEffect, useState } from "react"
import { Box, Center, Spinner, Button } from "@chakra-ui/react";

const Voxel = () => {

    let course = 0;
    const speedTable = [2500, 1500, 900, 400, 200, 120, 80, 40, 10];
    
    const [loaded, setLoaded] = useState(false);
    const view = useRef(null); //속성 변화 감지 노드
    
    useEffect(()=>{
        const interval = setInterval(() => {
            if(view.current.loaded === true) {
                setLoaded(true);
                Init();
                clearInterval(interval);
            }
        }, 500);        
    }, []);

    const Init = () => {
        setTimeout(()=>{
            const interval2 = setInterval(() => {
                const before = Number(view.current.getAttribute('rotation-per-second').replace('deg', ''));
                if( before < 20){
                    clearInterval(interval2);
                }else{
                    view.current.setAttribute('rotation-per-second', speedTable[++course]+'deg');
                }
            }, 250);
        }, 500)
    }

    // const setInit = () => {
    //     view.current.setAttribute('rotation-per-second', '1600deg');
    //     course = 0;
    // }

    return(
        <>
            <Box w='100%' h='450px' m='-60px 0 -80px 0' position='relative'>
                {
                    loaded === false ?
                    <Center position='absolute' top='0' left='0' w='100%' h='100%' zIndex='9999'>
                        <Spinner thickness='4px' speed='0.65s' color='gray.800' emptyColor='gray.300' size='xl' />
                    </Center>
                    :
                    <></>
                }
                {/* disable-zoom='false' */}
                <Box position='relative' opacity={loaded === true ? '1' : '0'} transition='opacity .7s ease'>
                    <model-viewer ref={view} src='/juni-coding-voxel.gltf' camera-controls  autoplay auto-rotate
                    shadow-intensity="3" shadow-softness='1' alt='꾸생 아바타' camera-orbit='150deg 65deg 110%' 
                    environment-image='neutral' interaction-prompt='none' min-field-of-view='10deg' max-field-of-view='130deg'
                    max-camera-orbit="Infinity 180deg auto" min-camera-orbit='-Infinity 0deg auto' interpolation-decay='30'
                    auto-rotate-delay='0' rotation-per-second='2100deg'
                    style={{width : '100%', height : '450px' ,'--progress-bar-height' : '0' , '--progress-mask' : 'none', '--poster-color':  'transparent' }} />
                </Box>
            </Box>
            {/* <Button onClick={Init}>Test</Button> */}
            {/* <Button onClick={setInit}>Set Init</Button> */}
        </>
    )
}


export default Voxel