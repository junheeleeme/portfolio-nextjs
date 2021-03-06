import { Image as Images } from "@chakra-ui/react";
import { createContext } from "react";

const LazyImage = ({src, alt}) => {

    const onLoadImg = (e) => {
        e.target.classList.add('fade');
    }

    return(
        <>
            <Images src={src} alt={alt} onLoad={onLoadImg} width='100%' height='100%' opacity='0' transition="opacity 1s ease" />
        </>
    )
}

export default LazyImage