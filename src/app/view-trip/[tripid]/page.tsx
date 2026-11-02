'use client'
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { api } from '../../../../convex/_generated/api';
import { useTripDetail, useuserDetails } from '@/app/provider';
import Itineray from '@/app/create-new-trip/_component/Itineray';

const ViewTrip = () => {
    const {tripid} = useParams();
    const convex = useConvex();
    const {userDetail, setUserDetail} = useuserDetails();
    const [tripData, setTripData] = useState<any>();
    // @ts-ignore
    const {tripDetailInfo,setTripDetailInfo} = useTripDetail()

    useEffect(()=>{
        userDetail&&getTrip()
    },[userDetail]);

        const getTrip = async()=>{
            const result = await convex.query(api.tripDetail.GetTripById,{
                uid: userDetail?._id,
                tripid: tripid+''
            });
            console.log(result);
            setTripData(result);
            setTripDetailInfo(result?.tripDetail);
        }
  return (
    <div>
        <Itineray/>
    </div>
  )
}

export default ViewTrip