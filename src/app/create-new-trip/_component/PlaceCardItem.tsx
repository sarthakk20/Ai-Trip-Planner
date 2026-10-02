'use client'
import { Button } from '@/components/ui/button'
import { Clock, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React, { act } from 'react'
import { Activity } from './ChatBot'
import { Map, MapPin, Ticket } from 'lucide-react';
import axios from 'axios'
import { useEffect,useState } from 'react'

type Props={
    activity:Activity,
}

const PlaceCardItem = ({activity}:Props) => {

  const [photoUrl, setPhotoUrl] = useState<string>();

  useEffect(()=>{
    activity && GooglePlaceDetails();
  },[activity]);

  const GooglePlaceDetails =async()=>{
    const result = await axios.post('/api/google-place-detail',{placeName:activity.place_name + ":" + activity.place_address });
    
    if (result.data?.error) {
      return;
    }
      setPhotoUrl(result.data);
  }

  return (
    <div 
            key={`${activity.place_name}`}
            className='flex flex-col items-center'
            >
              <img src={photoUrl ? photoUrl : '/hotel.png'} alt={activity?.place_name} className='object-cover rounded-2xl' />
              <h3 className='font-semibold text-lg text-orange-400'>{activity?.place_name}</h3>
              <p className='text-sm text-center text-gray-300 line-clamp-2'>{activity?.place_details}</p>
              <p className='flex items-center gap-2 text-sm text-gray-300 line-clamp-2'><MapPin size={15}/>{activity?.place_address}</p>
              <p className='flex items-center gap-2 text-sm text-yellow-400 font-semibold'><Map size={15}/> {activity?.time_travel_each_location}</p>
              <div className='w-full flex justify-between mt-2'>
                <p className='flex items-center gap-2 text-sm text-green-400 line-clamp-1'><Clock size={15}/> {activity?.best_time_to_visit}</p>  
                <p className='flex items-center gap-2 text-sm text-blue-600 font-semibold'><Ticket size={15}/>:{activity?.ticket_pricing}</p>
              </div>
              <Link
                  className="w-full flex flex-col mt-1"
                  key={`${activity.place_name}`}
                  target='_blank'
                  href={`https://www.google.com/maps/search/?api=1&query=${activity.place_name}`}
              >
              <Button className="mt-2 w-full flex items-center justify-center gap-2 bg-white/10 p-2 rounded-lg text-white/80 hover:bg-white/20 hover:text-white">
                View On Map<ExternalLink size={16} />
              </Button>
              </Link>
            </div>
  )
}

export default PlaceCardItem