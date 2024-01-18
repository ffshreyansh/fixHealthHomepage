'use client'
import React, { useState } from 'react'
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        age: '',
        city: '',
        company: '',
        chiefComplaints: '',
        previousExperience: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        if (
            formData.name &&
            formData.phoneNumber &&
            formData.age &&
            formData.city &&
            formData.company &&
            formData.chiefComplaints
        ) {
            // You can perform additional validation if needed
            setFormSubmitted(true);
            console.log('Form data submitted:', formData);
        } else {
            alert('Please fill in all the required fields.');
        }
    };
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-30% 0px', // Adjust as needed
    });


    const showPreviousExperience = Number(formData.age) > 40;

    return (
        <div className='flex flex-col items-center gap-5 w-full py-20' ref={ref}>

            <motion.span className='text-[#00acc1] border border-[#00acc1] text-xs rounded-full px-2 py-1 '
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2 }}
            >Contact Us</motion.span>
            <motion.h2 className="text-3xl text-white font-bold mb-4 text-center"
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.2 }}
            >Consultation Form ✍</motion.h2>
            <motion.p className=' w-full lg:w-1/3 text-center mx-auto text-sm text-muted-foreground px-3'
                variants={fadeInUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ type: "spring", stiffness: 100, damping: 10, duration: 0.2, delay: 0.4 }}
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ratione nihil eos voluptatem adipisci fugit modi impedit perferendis accusamus culpa?</motion.p>

            <div className='flex flex-col lg:flex-row items-center justify-between w-full'>
                <div className='flex flex-col  items-center gap-3 text-white w-full lg:w-1/2 p-3 lg:p-10'>
                    <img src="https://images.pexels.com/photos/5722158/pexels-photo-5722158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-lg' alt="" />
                </div>
                {formSubmitted ? (
                    <motion.p
                        className='text-white mt-4 text-center mx-auto'
                        variants={fadeInUpVariants}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.2, delay: 0.6 }}
                    >
                        Thank you! We will get to you.
                    </motion.p>
                ) : (<div className="container mx-auto w-full lg:w-1/2 p-3 lg:p-10 ">
                    <div className="mb-4">
                        {/* <label className="block text-sm font-semibold mb-1">Name:</label> */}
                        <input
                            type="text"
                            className="w-full border-[#414141] border text-white rounded-lg p-3 text-sm bg-[#191919]"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder='Name'
                        />
                    </div>
                    <div className="mb-4 flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/2">
                            {/* <label className="block text-sm font-semibold mb-1">:</label> */}
                            <input
                                type="text"
                                className="w-full border-[#414141] border text-white rounded-lg p-3 text-sm bg-[#191919]"
                                value={formData.phoneNumber}
                                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                                placeholder='Phone Number'

                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            {/* <label className="block text-sm font-semibold mb-1">Age:</label> */}
                            <input
                                type="text"
                                className="w-full border-[#414141] border text-white rounded-lg p-3 text-sm bg-[#191919]"
                                value={formData.age}
                                onChange={(e) => handleChange('age', e.target.value)}
                                placeholder='Age'
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/2">
                            {/* <label className="block text-sm font-semibold mb-1">City:</label> */}
                            <input
                                type="text"
                                className="w-full border-[#414141] border rounded-lg p-3 text-white text-sm bg-[#191919]"

                                value={formData.city}
                                onChange={(e) => handleChange('city', e.target.value)}
                                placeholder='City'
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            {/* <label className="block text-sm font-semibold mb-1">Company:</label> */}
                            <input
                                type="text"
                                className="w-full border-[#414141] border rounded-lg p-3 text-white text-sm bg-[#191919]"

                                value={formData.company}
                                onChange={(e) => handleChange('company', e.target.value)}
                                placeholder='Company'
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        {/* <label className="block text-sm font-semibold mb-1">Chief Complaints:</label> */}
                        <textarea
                            className="w-full border-[#414141] border rounded-lg p-3 text-white text-sm bg-[#191919]"
                            value={formData.chiefComplaints}
                            onChange={(e) => handleChange('chiefComplaints', e.target.value)}
                            placeholder='Chief Complaints'
                        />
                    </div>
                    {showPreviousExperience && (
                        <div className="mb-4">
                            {/* <label className="block text-sm font-semibold mb-1 text-white">
      :
    </label> */}
                            <textarea
                                className="w-full border-[#414141] border rounded-lg p-3 text-white text-sm bg-[#191919]"
                                value={formData.previousExperience}
                                onChange={(e) => handleChange('previousExperience', e.target.value)}
                                placeholder='Previous Experience with Physiotherapy'
                            />
                        </div>
                    )}
                    <Button onClick={handleSubmit} variant='navbar2'>Submit</Button>
                </div>)}

            </div>
        </div>
    );
};

export default ConsultationForm;