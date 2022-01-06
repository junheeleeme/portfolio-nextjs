import { useRef, useEffect, useState } from "react"
import { Box } from "@chakra-ui/react";


const Voxel = () => {
    
    const [loaded, setLoaded] = useState(false);
    const view = useRef(null); //속성 변화 감지 노드
    
    useEffect(()=>{
        const root = document.querySelector(':root');
        root.style.setProperty('--poster-color', 'none');
    
        const interval = setInterval(() => {
            if(view.current.loaded === true) {
                clearInterval(interval);
                setLoaded(true);
            }else{
                console.log("로딩 체크");
            }
        }, 300);
    }, []);
    

    return(
        <>
            <Box w='100%' h='450px' m='-20px 0 -100px 0' opacity={loaded === true ? '1' : '0'} transition='opacity 1s ease'>
                <model-viewer ref={view} src='/test.gltf' camera-controls auto-rotate  disable-zoom='true'
                shadow-intensity="3" autoplay environment-image="neutral" alt='꾸생 아바타' style={{width : '100%', height : '450px' ,'--progress-bar-height' : '0' , '--progress-mask' : 'none'}}/>
            </Box>
        </>
    )
}


export default Voxel