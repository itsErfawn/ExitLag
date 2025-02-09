import React from 'react'
import GameSlider from "../components/templates/home/gameSlider/GameSlider"
import GameCard from '../components/modules/card/GameCard'
function Home() {
  return (
    <>
    <GameSlider/>
    <p className='flex items-center justify-center' >به اکزیت لگ خوش آمدید</p>
    <GameCard/>
    </>
  )
}

export default Home