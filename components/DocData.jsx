'use client'
import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from './ui/button'
import Nearby from './nearby';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter, useSearchParams } from 'next/navigation';


const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};



const DocData = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    }, [])

    const searchParams = useSearchParams();
    const search = searchParams.get('city')

    const defaultCity = search || 'mumbai';


    const [ref, inView] = useInView({
        triggerOnce: false,
        rootMargin: '-30% 0px', // Adjust as needed
    });

    return (
        <div className='flex flex-col items-center gap-3 px-3 lg:px-0' ref={ref}>
            <div className='flex items-center flex-col gap-3'>
                <motion.span className='text-[#00acc1] border border-[#00acc1] text-xs rounded-full px-2 py-1 '
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2 }}
                >Doctors</motion.span>
                <motion.span className=' text-4xl font-semibold text-white'
                   variants={fadeInUpVariants}
                   initial="hidden"
                   animate={inView ? "visible" : "hidden"}
                   transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.2 }}
                >Meet Our Experts</motion.span>
                <motion.p className='text-white'
                       variants={fadeInUpVariants}
                       initial="hidden"
                       animate={inView ? "visible" : "hidden"}
                       transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.4 }}
                    >Experts near your to experts of mega cities</motion.p>
            </div>
            <div className=' min-h-96 w-full'>
                <Tabs defaultValue={defaultCity} className="w-full lg:w-2/3 mt-8 mx-auto">
                <motion.div
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay:0.6 }}
                >
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="mumbai">Mumbai</TabsTrigger>
                        <TabsTrigger value="bangalore">Bangalore</TabsTrigger>
                        <TabsTrigger value="kolkata">Kolkata</TabsTrigger>
                        <TabsTrigger value="chennai">Chennai</TabsTrigger>
                    </TabsList>
                </motion.div>
                
                    <TabsContent value="mumbai" className='text-white'>
                        <Nearby where={6} city={'mumbai'} />
                    </TabsContent>
                    <TabsContent value="bangalore" className='text-white'>
                        <Nearby where={3} city={'bangalore'} />

                    </TabsContent>
                    <TabsContent value="kolkata" className='text-white'>
                        <Nearby where={2} city={'kolkata'} />

                    </TabsContent>
                    <TabsContent value="chennai" className='text-white'>
                        <Nearby where={4} city={'chennai'} />

                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default DocData