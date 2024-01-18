'use client';
import { space } from 'postcss/lib/list';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

//6ee90f0846mshc6caf06d5ec8664p17f505jsn3093d8908abc
const Nearby = ({ where }) => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((response) => response.json())
            .then((data) => setDoctors(data));
    }, []);

    useEffect(() => {
        console.log(doctors);
    }, [doctors]);

    return (
        <div className='text-white'>
            {doctors.length === 0 ? (
                <p className='text-center text-muted-foreground'>No Doctors data found</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3 lg:p-10">
                    {Array.isArray(doctors.users) && doctors.users.slice(0, where).map((doc) => (
                        <Card className='text-white' >
                            <CardHeader >
                                <img src={doc.image} className={`object-cover`} alt="doc-img" />
                            </CardHeader>
                            <CardContent className='px-0'>
                                <CardHeader>
                                    <CardTitle>Dr. {doc.firstName} {doc.lastName}</CardTitle>

                                    <CardDescription>{doc.email}</CardDescription>
                                    {/* <CardDescription className='text-xs bg-[#00abc1cc] rounded-full w-fit px-4 text-white py-1'>• Available</CardDescription> */}
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
