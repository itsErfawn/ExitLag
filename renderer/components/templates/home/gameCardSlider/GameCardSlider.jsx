"use client"
import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import GameCard from '../../../modules/card/GameCard'

function GameCardSlider() {
  return (
    <div>
        <h2 className='section-title' >جدیدترین بازی ها</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        >
            <SwiperSlide>
                <GameCard/>
            </SwiperSlide>
            <SwiperSlide>
                <GameCard/>
            </SwiperSlide>
            <SwiperSlide>
                <GameCard/>
            </SwiperSlide>
            <SwiperSlide>
                <GameCard/>
            </SwiperSlide>
            <SwiperSlide>
                <GameCard/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default GameCardSlider