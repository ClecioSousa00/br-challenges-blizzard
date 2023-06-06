'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import './Slider.css'
import Image from 'next/image'

import diabloIIIBanner from '../../assets/images/banner-hero/games/diablo-bg-mobile.png'
import hearthstoneBanner from '../../assets/images/banner-hero/games/hearthstone-bg-mobile.png'
import wowBanner from '../../assets/images/banner-hero/games/wow-bg-mobile.png'
import diabloBanner from '../../assets/images/banner-hero/games/diablo-I-mobile.png'
import starCraftBanner from '../../assets/images/banner-hero/games/star-crafter.png'

export const Slider = () => {
  return (
    <div className=" h-screen">
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
        <SwiperSlide className="">
          <picture>
            <source media="(min-width: 1024px)" srcSet="/diablo-bg.png" />
            <Image
              className="block h-full w-full object-cover object-right "
              src={diabloIIIBanner}
              width={1000}
              height={1000}
              alt="diablo IV"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(min-width: 1024px)" srcSet="/hearthstone-bg.png" />
            <Image
              className="block h-full w-full object-cover object-[center_right]"
              src={hearthstoneBanner}
              width={1000}
              height={1000}
              alt="HearthStone"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source media="(min-width: 1024px)" srcSet="/wow-bg.png" />
            <Image
              className="block h-full w-full object-cover "
              src={wowBanner}
              width={1000}
              height={1000}
              alt="WOW"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/diablo-I-desktop.png"
            />
            <Image
              className="block h-full w-full object-cover "
              src={diabloBanner}
              width={1000}
              height={1000}
              alt="Diablo"
            />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/star-craft-desktop.jpg"
            />
            <Image
              className="block h-full w-full object-cover object-top "
              src={starCraftBanner}
              width={1000}
              height={1000}
              alt="StarCraft"
            />
          </picture>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

// shadow
// className="fixed inset-0 z-20  h-screen w-full after:fixed after:inset-0  after:h-screen after:w-screen  after:bg-shadowSlide after:content-['']"
