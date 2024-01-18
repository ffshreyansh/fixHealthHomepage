'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
    

const HomePage = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-30% 0px', // Adjust as needed
      });
      
    return (
        <div className='flex flex-col gap-10 items-center w-full py-40 justify-center text-white px-3 lg:px-0' ref={ref}>
            <div className='w-full lg:w-1/2 text-center flex flex-col items-center gap-6'>
                <motion.h1 className='text-3xl lg:text-6xl font-bold'
                        variants={fadeInUpVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        // whileHover={{ translateY: -4, transition: { duration: 0.2 }}}
                        transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2 }}
                
                >On a mission to make people's lives <span className=' text-[#00acc1]'> pain free</span>
                </motion.h1>
                <motion.p className='text-sm lg:text-lg mx-auto'
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                //   whileHover={{ translateY: -4, transition: { duration: 0.2 }}}
                  transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.2 }}
                >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, corporis eius non esse ad maiores consectetur fugit aut deleniti corrupti?
                </motion.p>
                <motion.div
                 variants={fadeInUpVariants}
                 initial="hidden"
                 animate={inView ? "visible" : "hidden"}
                //  whileHover={{ translateY: -4, transition: { duration: 0.2 }}}
                 transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.4 }}
                 className='w-full'
                >
                <Link href={'/'} className='rounded-md mx-auto bg-[#00acc1] w-full md:w-1/4 lg:w-1/4 h-10 flex items-center justify-center font-medium'>
                    Explore Services
                </Link>
                </motion.div>

            </div>
            <motion.div className='w-full h-auto lg:w-4/5 lg:h-96 mt-4 lg:mt-20'
             variants={fadeInUpVariants}
             initial="hidden"
             animate={inView ? "visible" : "hidden"}
            //  whileHover={{ translateY: -4, transition: { duration: 0.2 }}}
             transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.6 }}
            >
                <img src={'https://images.pexels.com/photos/6129237/pexels-photo-6129237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='rounded-lg object-cover object-top max-w-full h-full w-full'  />
            </motion.div>
        </div>
    )
}

export default HomePage