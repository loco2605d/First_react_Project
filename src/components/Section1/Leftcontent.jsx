import React from 'react'
import Arrow from './Arrow'
import Hero from './Hero'
const Leftcontent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between '>
      <Hero/>
     <Arrow />
    </div>
  )
}

export default Leftcontent
