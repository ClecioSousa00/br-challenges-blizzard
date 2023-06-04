'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import './Slider.css'
import Image from 'next/image'

import diabloBanner from '../../assets/images/banner-hero/games/diablo-bg.png'
import hearthstoneBanner from '../../assets/images/banner-hero/games/hearthstone-bg.png'
import wowBanner from '../../assets/images/banner-hero/games/wow-bg.png'

export const Slider = () => {
  return (
    <div className="h-screen">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full "
      >
        <SwiperSlide>
          <Image
            className="block h-full w-full object-cover object-center"
            src={diabloBanner}
            alt="diablo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="block h-full w-full object-cover object-[center_right]"
            src={hearthstoneBanner}
            alt="diablo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="block h-full w-full object-cover object-center "
            src={wowBanner}
            alt="diablo"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
