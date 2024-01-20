'use client';
import { space } from 'postcss/lib/list';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

//6ee90f0846mshc6caf06d5ec8664p17f505jsn3093d8908abc
const Nearby = ({ where, city }) => {
    const [doctors, setDoctors] = useState([]);
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[]);

    useEffect(() => {
        const apiUrl = `https://fixh.onrender.com/doctors?city=${encodeURIComponent(city)}`;
    
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setDoctors(data));
      }, [city]);
    
      useEffect(() => {
        console.log(doctors);
      }, [doctors]);
      
    return (
        <div className='text-white'>
            {doctors.length === 0 ? (
                <p className='text-center text-muted-foreground'>No Doctors data found</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3 lg:p-0 lg:py-10">
                    {Array.isArray(doctors) && doctors.slice(0, where).map((doc) => (
                        <Card className='text-white' >
                            <CardHeader >
                                <img src={doc.image} className={`object-cover h-80`} alt="doc-img" />
                            </CardHeader>
                            <CardContent className='px-0'>
                                <CardHeader className='p-6 pb-0'>
                                    <CardTitle>{doc.name}</CardTitle>

                                    <CardDescription>{doc.email}</CardDescription>
                                    <CardDescription>{doc.expertise}</CardDescription>
                                </CardHeader>
                            </CardContent>
                            <CardFooter>
                                <Button variant='doc'>Know More</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Nearby;
