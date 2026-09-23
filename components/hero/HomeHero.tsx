'use client';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

export default function HomeHero(){
    return(
        <>
        <section className="w-full flex mb-5">
            <div className="w-7xl mx-auto">
                <Swiper modules={[Autoplay,Pagination]} autoplay={{delay: 2000}} loop pagination={{type: "bullets"}}>
                    <SwiperSlide>
                        <Image src="https://img.lazcdn.com/us/domino/b487c7ce-357e-40d7-9895-36d9a4b0aa4a_NP-1976-688.jpg_2200x2200q80.jpg"
                    width={1440}
                    height={350}
                    alt="Banner1"
                    className="w-full"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://img.lazcdn.com/us/domino/2461136b-4a50-4d6b-b565-145d20d069ae_NP-1976-688.jpg_2200x2200q80.jpg"
                    width={1440}
                    height={350}
                    alt="Banner2"
                    className="w-full"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            
        </section>
        </>
    )
}