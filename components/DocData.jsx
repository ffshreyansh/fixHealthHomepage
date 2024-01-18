'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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


const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};



const DocData = () => {

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
                <Tabs defaultValue="near" className="w-full lg:w-2/3 mt-8 mx-auto">
                <motion.div
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay:0.6 }}
                >
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="near">Nearby</TabsTrigger>
                        <TabsTrigger value="mum">Mumbai</TabsTrigger>
                        <TabsTrigger value="del">Delhi</TabsTrigger>
                        <TabsTrigger value="kol">Kolkata</TabsTrigger>
                    </TabsList>
                </motion.div>
                
                    <TabsContent value="near" className='text-white'>
                        <Nearby where={6} />
                    </TabsContent>
                    <TabsContent value="mum" className='text-white'>
                        <Nearby where={3} />

                    </TabsContent>
                    <TabsContent value="del" className='text-white'>
                        <Nearby where={2} />

                    </TabsContent>
                    <TabsContent value="kol" className='text-white'>
                        <Nearby where={4} />

                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default DocData