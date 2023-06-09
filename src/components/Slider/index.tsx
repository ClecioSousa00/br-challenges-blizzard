'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import { ReactNode } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import './Slider.css'

import { InfosSlide } from '../InfosSlide'
import { descriptionSlide } from '../InfosSlide/sliderInfos'

export const Slider = () => {
  const showSlide = (): ReactNode => {
    return descriptionSlide.map((slide, index) => {
      return (
        <SwiperSlide key={index} className="">
          <picture>
            <source media="(min-width: 1024px)" srcSet={slide.srcSet} />
            <Image
              className="block h-full w-full object-cover object-center "
              src={slide.src}
              width={1000}
              height={1000}
              alt={slide.alt}
            />
            <InfosSlide
              title={slide.title}
              subTitle={slide.subTitle}
              textButton={slide.textButton}
              icon={slide.icon}
              buttonIcon={slide.buttonIcon}
            />
          </picture>
        </SwiperSlide>
      )
    })
  }

  return (
    <div className="">
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
        className="relative h-screen"
      >
        {showSlide()}
      </Swiper>
    </div>
  )
}

// shadow
// className="fixed inset-0 z-20  h-screen w-full after:fixed after:inset-0  after:h-screen after:w-screen  after:bg-shadowSlide after:content-['']"
