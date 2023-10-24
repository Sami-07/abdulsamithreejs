import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc"

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full blue-border-gradient  p-[1px] rounded-[20px] shadow-card'>
        <div options={{
          max: 45, scale: 1,
          speed: 450
        }} className='bg-tertiary rounded-[20px] py05 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a skilled Full Stack Web Developer with expertise in various trending technologies such as React.js, Next.js, MongoDB, etc. I have built projects which showcases the skillset I have in these technologies. I am really good in adapting to the various technological trends and working with the latest technologies. I am open to work as a freelance web developer and help you start or boost your online business with the help of tech.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
          return (
            <ServiceCard key={service.title} index={index} {...service} />
          )
        })
        }

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
