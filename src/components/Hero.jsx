import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../style";
import heroImage from "../assets/heroImage.jpg"
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className='relative mt-20 md:mt-0 md:top-40 md:h-[75vh] '>
      <div className='flex justify-center items-center flex-col md:flex-row'>
        <div className={`${styles.paddingX} flex flex-row justify-center items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#00A9FF]' />
            <div className='w-1 sm:h-80  h-40 blue-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#00A9FF]'> Abdul Sami</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`} >I develop full stack web applications.</p>
            <a download="" className='hidden md:block'> <button className="bg-[#00A9FF] mt-5 rounded-lg p-4" >Download Resume</button></a>
          </div>

        </div>
        <a download="" className='md:hidden'> <button className="bg-[#00A9FF] rounded-lg p-4" >Download Resume</button></a>
        <div className='flex justify-center'>
          <img src={heroImage} className=' rounded-full w-72 h-7w-72 mt-10 md:mt-0 ' />
        </div>
      </div>
    </section>
  )
}

export default Hero