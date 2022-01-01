import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller } from 'swiper';
import SwiperCore, { EffectCoverflow,Pagination } from 'swiper';

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import 'swiper/css/mousewheel'

import { useState as UseState } from 'react';
import axios from "axios"
import styled from 'styled-components';
import Link from "next/link"
import { Image, Box, Spacer, Flex } from "@chakra-ui/react"
import SubTitle from "../components/subtitle"
import TopMenu from '../components/topMenu'
import SlideAnimation from "../components/slideAnimation"
import GridItems from "../components/griditems"
import { ArrowForwardIcon } from '@chakra-ui/icons'

SwiperCore.use([EffectCoverflow,Pagination]);

const portfolio = ({data}) => {

    const [controlledSwiper, setControlledSwiper] = UseState(null);
    
    return(
        <>
            <SubTitle>Portfolio</SubTitle>

            <SlideAnimation>
                <BoxWrap p={{ base: '120px 0 60px', md : '80px 0'}}>

                    <Swiper effect={'coverflow'} grabCursor={true} mousewheel={true} centeredSlides={true} slidesPerView={'auto'}
                    coverflowEffect={{ "rotate": 20, "stretch": 70, "slideShadows": true }} slideToClickedSlide={true}
                    pagination={true} className="mySwiper" loop={true}
                    modules={[Controller]} controller={{ control: controlledSwiper }} style={{height : '430px', padding: '20px 0'}}> 
        
                    {
                        data.sort((a,b) => b.id-a.id ).map((p, idx)=> //정렬 후 랜더링
                            <SwiperSlide style={{ maxWidth : '500px', maxHeight : '320px',  width: '85%', height : 'calc( 85vw / 5 * 3 )', overflow: 'hidden'}} key={p.title+idx}>    
                                <DivStyled>
                                    <Image className='thumb' src={`/pofol/${p.title}_cover.png`} display='inline-block' w='100%' h='100%' alt={p.title}/>
                                    <Link href={`/portfolio/${p.id+1}`} passHref><a></a></Link>
                                    <SubWrap className='subTitle' h='40px' p={{base : '7px', lg: ' 7px 10px'}}>
                                        <Link href={`/portfolio/${p.id+1}`} passHref><a></a></Link>
                                        <Box fontSize='0'><Image src='/logo_white.png' display='inline-block' w='45px' h='100%' mr='5px'/></Box>
                                        <Box fontSize='1.2em' fontWeight='bold' h='100%' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>{p.title}</Box>
                                        <Spacer/>
                                        <Box fontSize='1em'><ArrowForwardIcon/></Box>
                                    </SubWrap>
                                </DivStyled>
                    
                            </SwiperSlide>
                        )
                    }
                    
                    </Swiper>
                    
                {/* <Grid templateColumns={{ base : 'repeat(1, 1fr)' ,md: 'repeat(2, 350px)', lg : 'repeat(2, 450px)'}} 
                    autoRows={{ base: 'calc( (100vw - 30px) / 16 * 9.5 )', md: '230px', lg:'300px'}} gap={{ base: '20px 0' ,md: '40px 0', lg: '30px'}} justifyContent='space-around' p='20px 0' >
                    
                    {
                        data.sort((a,b) => b.id-a.id ).map((p, idx)=> //정렬 후 랜더링
                            <GridItems key={p.title+idx} id={p.id} title={p.title} content={p.content}/>
                        )
                    }
                
                    
                </Grid> */}
                {/* <Skeleton w='100%' h='20px' mb='10px'/>
                <Skeleton w='100%' h='20px' mb='10px'/>
                <Skeleton w='100%' h='20px' mb='10px'/> */}
                </BoxWrap>
            </SlideAnimation>
        </>
    )
}

export const getServerSideProps = async() => {

    try{
        const res = await axios.get('http://localhost:3000/pofol/portfolio.json');
        if(res.status === 200){
            const data = res.data;
            console.log(data)
            return { props : {
                data
            } }
        }
    }catch(err){
        console.log(err);
        return { props: {} };
    }

}

const DivStyled = styled.div`
    position: relative; width: 100%; height: 100%;
    
    &>img{ transition: transform 0.3s ease; }
    &>a{
        position: absolute; bottom: 0; left: 0; z-index: 100;
        display: inline-block; width: 100%; height: 0%; opacity: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 100%);
        transition: opacity .25s ease;
    }
`
const BoxWrap = styled(Box)`
    .swiper-slide-visible{ box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; }
    .swiper-slide-active:hover a{ height: 100%; opacity: 1; }
    .swiper-slide-active:hover .thumb{ transform: translateY(-30px); }
    .swiper-slide-active:hover .subTitle{ bottom: 0; }
    .swiper-coverflow{ height: 430px; }
    @media screen and (max-width: 768px){
        .swiper-coverflow{ height: 280px; }
    }
    
`
const SubWrap = styled(Flex)`
    position: absolute; bottom: -50px; left: 0; width: 100%;
    color: #000; 
    transition: bottom 0.3s ease; background: #fff; z-index: 110;
    &>a{
        position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    }
`


export default portfolio