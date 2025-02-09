"use client"
import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'
function GameSlider() {
  return (
    <div>
        <Swiper>
        <SwiperSlide>
            <Link href={'/'} >
            <img src="/images/slider-1.png" className='home-slider-images' />
            </Link>
        </SwiperSlide>
      <SwiperSlide>
        <Link href={'/'} >
        <img src="/images/slider-2.png" className='home-slider-images' />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={'/'} >
        <img src="/images/slider-3.png" className='home-slider-images' />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={'/'} >
        <img src="/images/slider-4.png" className='home-slider-images' />
        </Link>
      </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default GameSlider