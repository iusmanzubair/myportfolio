import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services = [
  {
    name: 'UI/UX Design',
    description: "I am a UI/UX Designer with over many years of experience. Although i am still improving my skills.",
    link: 'Learn more'
  },
  {
    name: 'Development',
    description: "I am a Front-end Developer with over many years of experience. Although i am still improving my skills.",
    link: 'Learn more'
  },
  {
    name: 'Digital Marketing',
    description: "I am into Digital Marketing for many years. I work on my skills daily and improve them.",
    link: 'Learn more'
  },
  {
    name: 'Programming',
    description: "I am a programmer with over many years of experience. Although i am still improving my skills.",
    link: 'Learn more'
  },
]

function Services() {
  return (
    <section className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I'm a Freelancer Front-end Developer with over 2 years of experience.</h3>
          <a href='https://github.com/ElipseCode' target='_blank' rel="noreferrer"><button className="btn btn-sm">See my work</button></a>
        </motion.div>
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'} 
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <div>
            {services.map((service, index)=> {
              const {name, description, link} = service;
                return <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a className='btn w-9 h-9 mb-[42px] flex justify-center items-center' href="https://github.com/ElipseCode" target='_blank' rel="noreferrer"><BsArrowUpRight/></a>
                    <a href="https://github.com/ElipseCode" target='_blank' rel="noreferrer" className='text-gradient text-sm'>{link}</a>
                  </div>
                </div>
            })}
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  )
}

export default Services
