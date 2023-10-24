import React from 'react'
import { technologies } from '../constant'
import BallCanvas from './canvas/Ball'
import { motion, spring } from "framer-motion"
import { styles } from "../style"
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const Tech = () => {
  return (

    <div className='flex flex-col'>
<motion.div variants={textVariant()} className='mb-10'>
        <p className={`${styles.sectionSubText}`}>What I am Skilled At</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

    <div className='flex flex-row  flex-wrap justify-center gap-10 '>
      {technologies.map((technology) => {
        return (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}  />
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default SectionWrapper(Tech, "");