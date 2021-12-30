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
import { Image, Box } from "@chakra-ui/react"
import SubTitle from "../components/subtitle"
import WrapAni from "../components/wrapAni"
import GridItems from "../components/griditems"

SwiperCore.use([EffectCoverflow,Pagination]);

const portfolio = ({data}) => {

    const [controlledSwiper, setControlledSwiper] = UseState(null);
    
    return(
        <>
            <SubTitle>Portfolio</SubTitle>

            <WrapAni>
                <Box p={{ base: '120px 0 60px', md : '80px 0'}}>

                    <Swiper effect={'coverflow'} grabCursor={true} mousewheel={true} centeredSlides={true} slidesPerView={'auto'}
                    coverflowEffect={{ "rotate": 20, "stretch": 70, "slideShadows": true }} slideToClickedSlide={true}
                    pagination={true} className="mySwiper" autoplay={3000} loop={true}
                    modules={[Controller]} controller={{ control: controlledSwiper }}> 
        
                        {
                            data.sort((a,b) => b.id-a.id ).map((p, idx)=> //정렬 후 랜더링
                                    <SwiperSlide style={{ maxWidth : '700px', maxHeight : '420px',  width: '85%', height : 'calc( 85vw / 5 * 3 )'}} key={p.title+idx}>
                                        <Link href={`/portfolio/${idx+1}`} passHref><a>
                                            <Image src={`/pofol/${p.title}_cover.png`} w='100%' h='100%' alt={p.title}/></a>
                                        </Link>
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
                </Box>
            </WrapAni>
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

export default portfolio