import { useState } from "react";
import { Center, Image, Box, Stack, Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectCoverflow,Pagination } from 'swiper';
import { Controller } from 'swiper';

SwiperCore.use([EffectCoverflow,Pagination]);

const SlideShow = ({data}) => {
    
    const { colorMode } = useColorMode();
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return(
        <>
            <BoxWrap mode={colorMode}>

                <Swiper effect={'coverflow'} grabCursor={true} mousewheel={true} centeredSlides={true} slidesPerView={'auto'}
                coverflowEffect={{"rotate": 0, "stretch": 100, "slideShadows": false }} slideToClickedSlide={true}
                pagination={true} className="swiper" loop={true} modules={[Controller]} controller={{ control: controlledSwiper }}> 
                {
                    data.sort((a,b) => b.id-a.id ).map((p, idx)=> //정렬 후 랜더링 
                    <SwiperSlide key={p.title+idx}>

                        <Link href={`/portfolio/${p.id+1}`} passHref><a></a></Link>
                        
                            <Image src={`/pofol/${p.title}_cover.png`} alt={p.title} w='100%' h='100%'/>

                            <Box position='absolute' top='0' left='0' w='100%' h='100%' zIndex='1' bg='linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))'>
                                <Stack spacing={{base:1, md:3}} position="absolute" bottom="0" left="0" w="100%" p={{base: '10px', md:'20px'}}>
                                    <Text fontSize={{base:'xl', sm : '3xl'}} fontWeight='bold' color='#fff' textOverflow='ellipsis' overflow='hidden' whiteSpace="nowrap">{p.title}</Text>
                                    <Text fontSize='xs' fontWeight='bold' h='20px' textOverflow='ellipsis'
                                    overflow='hidden' whiteSpace="nowrap" color="gray.300">
                                        {p.content}
                                    </Text>
                                </Stack>
                            </Box>

                    </SwiperSlide>
                    )
                }
                </Swiper>

            </BoxWrap>
        </>
    )
}

const BoxWrap = styled(Center)`
    position: absolute; top: 55%; left: 50%; transform: translate(-50%, -50%); width: 100%; padding: 20px 0;
    @media screen and (max-width: 1280px){ top: 50%; }
    & .swiper-pagination-bullet{ background: ${props=>props.mode==='light'?'#000':'#fff'} }
    
    .swiper{ 
        width: 100vw; height: 450px; padding: 0; overflow: initial !important;
        @media screen and (max-width: 768px){ height: 350px; padding: 40px 0;  }
        @media screen and (max-width: 480px){ height: 280px; padding: 50px 0;  }
    }
    .swiper-slide{ 
        position: relative; border-radius: 10px;
        max-width: 660px; height: 400px; overflow: hidden; 
        box-shadow: ${props=> props.mode==='light'? 
        '0 3px 15px rgb(0 0 0 / 30%)' :
        '0 3px 15px rgb(0 0 0 / 30%)'
        // 'rgba(0, 0, 0, 0.4) 0px 1px 2px 0px, rgba(0, 0, 0, 0.2) 0px 2px 6px 2px;' :
        // 'rgba(200, 200, 200, 0.1) 0px 1px 2px 0px, rgba(200, 200, 200, 0.05) 0px 2px 6px 2px;'
        };
        &.swiper-slide-active{ box-shadow: ${props=> props.mode==='light'?'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px, rgba(0, 0, 0, 0.5) 0px 2px 16px 0px':'rgba(255, 255, 255, 0.12) 0px 2px 4px 0px, rgba(255, 255, 255, 0.32) 0px 2px 16px 0px'}; }
        &>a{ display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2; }
        &.swiper-slide-active>a{ display: block; }
    }
    @media screen and (max-width: 768px){
        .swiper-slide{ max-width: 400px; height: 240px; }
    }   
    @media screen and (max-width: 480px){
        .swiper-slide{ max-width: 280px; height: 168px; }
    }
`
export default SlideShow