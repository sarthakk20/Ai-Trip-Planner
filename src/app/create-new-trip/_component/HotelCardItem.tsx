import React from 'react'
import { Hotel } from './ChatBot'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@base-ui/react/button'

type Props= {
    hotel:Hotel,
}

const HotelCardItem = ({hotel}:Props) => {
  return (
        <div 
            className="flex flex-col gap-2">
              <img src={'hotel.png'} alt={hotel.hotel_name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-lg font-bold  text-orange-400">{hotel.hotel_name}</h3>
              <p className="text-sm text-neutral-500 pb-2 line-clamp-3">{hotel.hotel_address}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-green-400 font-bold">{hotel.price_per_night}</p>
                <div className="flex items-center gap-1 text-sm text-yellow-500">
                <Star fill='yellow' size={16} /> <p>{hotel.rating}/5</p>
              </div>
              </div>
                  <Link
                  className="w-full flex flex-col mt-1"
                  key={`${hotel.hotel_name}`}
                  target='_blank'
                  href={`https://www.google.com/maps/search/?api=1&query=${hotel.hotel_name}`}>
                    <Button className='bg-white/10 p-2 rounded-lg hover:bg-white/20 hover:text-white'>
                    View
                  </Button>
                  </Link>
            </div>
  )
}

export default HotelCardItem