'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { MoveDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Testimonials = () => {

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-30% 0px', // Adjust as needed
    });


    return (
        <div className=' w-full px-3 lg:px-10 py-20 text-center flex flex-col gap-10' ref={ref}>
            <div className='flex flex-col gap-3'>
                <motion.span className='text-[#00acc1] border border-[#00acc1] text-xs rounded-full px-2 py-1 w-fit mx-auto'
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2 }}
                >Clients
                </motion.span>
                <motion.span className=' text-4xl font-semibold text-white'
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.2 }}
                >Testimonials</motion.span>
                <motion.p className=' text-muted-foreground'
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.4 }}
                >What user tells about us!</motion.p>
            </div>
            <Carousel className='w-full lg:w-2/3 mx-auto'>
                <CarouselContent className='h-fit flex items-center cursor-pointer text-white my-auto' >
                    <CarouselItem>
                        <div className='flex flex-col items-center mx-auto w-full rounded-lg text-center bg-[#191919] border border-[#414141] py-10 px-5 lg:px-20'>
                            <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-10 h-10 rounded-full object-cover mx-auto' alt="" />
                            <p className='font-regular italic mt-4'>fixhealth has helped my team and I stay on the same page. Previously, we were all over the board. Using fixhealth has definitely saved us time and money.</p>
                            <span className='font-bold mt-4'>Clark Kent</span>
                            <span className='text-sm'>Founder & CEO - SpaceX</span>
                            {/* <span className='text-xs mt-8 text-[#414141]'><MoveDownIcon/></span>     */}
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className='flex flex-col items-center mx-auto w-full rounded-lg text-center bg-[#191919] border border-[#414141] py-10 px-5 lg:px-20'>
                            <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-10 h-10 rounded-full object-cover mx-auto' alt="" />
                            <p className='font-regular italic mt-4'>Would definitely recommend fixhealth and will definitely be ordering again.
</p>
                            <span className='font-bold mt-4'>Clark Kent</span>
                            <span className='text-sm'>Founder & CEO - SpaceX</span>
                            {/* <span className='text-xs mt-8 text-[#414141]'><MoveDownIcon/></span>     */}
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className='hidden lg:flex' />
                <CarouselNext className='hidden lg:flex' />
            </Carousel>

        </div>
    )
}

export default Testimonials