import React from 'react'
import { technologies } from '../constant'
import BallCanvas from './canvas/Ball'

const Tech = () => {
  return (
    <div className='flex flex-row  flex-wrap justify-center gap-10 '>
      {technologies.map((technology) => {
        return (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}  />
          </div>
        )
      })}
    </div>
  )
}

export default Tech