import { Image as Images } from "@chakra-ui/react";


const LazyImage = ({src, alt}) => {

    const onLoadImg = (e) => {
        e.target.classList.add('fade');
    }

    return(
        <>
            <Images src={src} alt={alt} onLoad={onLoadImg} width='100%' height='auto' opacity='0' transition="opacity 1s ease" />
        </>
    )
}

export default LazyImage