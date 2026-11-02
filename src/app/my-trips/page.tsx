'use client'
import { useConvex } from 'convex/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useuserDetails } from '../provider';
import { api } from '../../../convex/_generated/api';
import { ArrowBigLeft, ArrowBigLeftDash, ArrowBigRight } from 'lucide-react';

const MyTrips = () => {
    const [myTrip, setMyTrip] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { userDetail } = useuserDetails();
    const convex = useConvex();

    useEffect(() => {
        if (userDetail?._id) {
            GetUserTrips();
        } else if (userDetail === null) {
            setLoading(false);
        }
    }, [userDetail]);

    const GetUserTrips = async () => {
        if (!userDetail?._id) return;
        setLoading(true);
        try {
            const result = await convex.query(api.tripDetail.GetUserTrips, {
                uid: userDetail._id
            });
            setMyTrip(result);
            console.log(result);
        } catch (error) {
            console.error("Failed to fetch user trips:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='px-10 p-10 md:px-24 lg:px-48'>
            <h2 className='font-bold text-xl lg:text-3xl m-3'>My Trips</h2>
            {loading ? (
                <div className='flex justify-center items-center p-10 h-full'>
                    <p className='text-gray-400'>Loading trips...</p>
                </div>
            ) : myTrip.length === 0 ? (
                <div className='flex flex-col justify-center items-center gap-2 sm:gap-4 p-7 rounded-xl border border-gray-500'>
                    <h2 className='font-semibold text-lg'>You don't have any trip plan created!</h2>
                    <Link href="/create-new-trip">
                        <button className='mt-4 bg-orange-400 rounded-lg p-2 hover:bg-orange-500 cursor-pointer text-white font-medium'>Create New Trip</button>
                    </Link>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                    {myTrip.map((trip: any, index: number) => (
                        <Link href={'/view-trip/'+ trip?.tripId } key={trip.tripId || index} className=' border border-gray-700 rounded-xl p-5 hover:border-orange-400 transition-all shadow-md bg-neutral-900/50'>
                            <h3 className='flex gap-2 items-center font-bold text-lg text-white'>{trip.tripDetail?.origin} <ArrowBigRight size={20} className='text-orange-400'/> {trip.tripDetail?.destination || "Trip Plan"}</h3>
                            <p className='text-sm text-gray-400 mt-1'>
                                {trip.tripDetail?.duration} • {trip.tripDetail?.budget} budget
                            </p>
                            <p className='text-xs text-gray-500 mt-1'>
                                Group: {trip.tripDetail?.group_size}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyTrips