import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { Clock, ExternalLink, LocationEdit, Map, MapPin, Star, Ticket } from 'lucide-react';
import hotelImage from 'public/hotel.png'
import { Button } from '@base-ui/react/button';
import Link from 'next/link';
import HotelCardItem from './HotelCardItem';

const TRIP_DATA = {
        "destination": "Pune",
        "duration": "3 Days",
        "origin": "Mumbai",
        "budget": "Medium",
        "group_size": "2",
        "hotels": [
            {
                "hotel_name": "The O Hotel",
                "hotel_address": "Kalyani Nagar, Pune, Maharashtra, India",
                "price_per_night": "₹4,500",
                "hotel_image_url": "https://example.com/the_o_hotel.jpg",
                "geo_coordinates": {
                    "latitude": 18.5543,
                    "longitude": 73.9251
                },
                "rating": 4.5,
                "description": "A luxury hotel located in the heart of Pune, offering modern amenities and an excellent dining experience."
            },
            {
                "hotel_name": "Hotel Aurora Towers",
                "hotel_address": "Pune Station Road, Pune, Maharashtra, India",
                "price_per_night": "₹3,000",
                "hotel_image_url": "https://example.com/hotel_aurora_towers.jpg",
                "geo_coordinates": {
                    "latitude": 18.5204,
                    "longitude": 73.8567
                },
                "rating": 4,
                "description": "Located close to popular attractions, this hotel provides a comfortable stay with great customer service."
            },
            {
                "hotel_name": "Hyatt Regency Pune",
                "hotel_address": "Pune Nagar Road, Near Airport, Pune, Maharashtra, India",
                "price_per_night": "₹6,000",
                "hotel_image_url": "https://example.com/hyatt_regency_pune.jpg",
                "geo_coordinates": {
                    "latitude": 18.509,
                    "longitude": 73.9189
                },
                "rating": 4.6,
                "description": "A luxury hotel with spacious rooms, excellent dining options, and a relaxing spa."
            }
        ],
        "itinerary": [
            {
                "day": 1,
                "day_plan": "Arrive in Pune, visit historical sites in the morning, and enjoy nightlife in the evening.",
                "best_time_to_visit_day": "Morning",
                "activities": [
                    {
                        "place_name": "Aga Khan Palace",
                        "place_details": "A historical monument that played a significant role in India's freedom movement.",
                        "place_image_url": "https://example.com/aga_khan_palace.jpg",
                        "geo_coordinates": {
                            "latitude": 18.525,
                            "longitude": 73.8861
                        },
                        "place_address": "Aga Khan Palace, Pune, Maharashtra, India",
                        "ticket_pricing": "₹5",
                        "time_travel_each_location": "30 minutes from the hotel",
                        "best_time_to_visit": "9 AM to 11 AM"
                    },
                    {
                        "place_name": "Paasha",
                        "place_details": "A rooftop restaurant providing an exquisite dining experience with a view.",
                        "place_image_url": "https://example.com/paasha.jpg",
                        "geo_coordinates": {
                            "latitude": 18.5415,
                            "longitude": 73.9147
                        },
                        "place_address": "Paasha, Pune, Maharashtra, India",
                        "ticket_pricing": "₹2,000 (average per couple)",
                        "time_travel_each_location": "15 minutes from Aga Khan Palace",
                        "best_time_to_visit": "7 PM onward"
                    }
                ]
            },
            {
                "day": 2,
                "day_plan": "Explore local culture and culinary experiences.",
                "best_time_to_visit_day": "Morning and Afternoon",
                "activities": [
                    {
                        "place_name": "Shaniwar Wada",
                        "place_details": "A traditional fortification that served as the seat of the Peshwas of the Maratha Empire.",
                        "place_image_url": "https://example.com/shaniwar_wada.jpg",
                        "geo_coordinates": {
                            "latitude": 18.5195,
                            "longitude": 73.8556
                        },
                        "place_address": "Shaniwar Peth, Pune, Maharashtra, India",
                        "ticket_pricing": "₹5",
                        "time_travel_each_location": "20 minutes from the hotel",
                        "best_time_to_visit": "10 AM to 12 PM"
                    },
                    {
                        "place_name": "Kayani Bakery",
                        "place_details": "A famous bakery known for its delicious sweets and snacks.",
                        "place_image_url": "https://example.com/kayani_bakery.jpg",
                        "geo_coordinates": {
                            "latitude": 18.5205,
                            "longitude": 73.8549
                        },
                        "place_address": "Wellington Road, Pune, Maharashtra, India",
                        "ticket_pricing": "₹300 (for snacks)",
                        "time_travel_each_location": "10 minutes from Shaniwar Wada",
                        "best_time_to_visit": "12 PM to 1 PM"
                    }
                ]
            },
            {
                "day": 3,
                "day_plan": "Relax and unwind at local parks and enjoy evening shopping.",
                "best_time_to_visit_day": "Late Afternoon",
                "activities": [
                    {
                        "place_name": "Pune-Okayama Friendship Garden",
                        "place_details": "A serene Japanese garden near Pune, perfect for relaxation and nature walks.",
                        "place_image_url": "https://example.com/pune_okayama.jpg",
                        "geo_coordinates": {
                            "latitude": 18.5218,
                            "longitude": 73.8956
                        },
                        "place_address": "Pune, Maharashtra, India",
                        "ticket_pricing": "₹30",
                        "time_travel_each_location": "30 minutes from the hotel",
                        "best_time_to_visit": "5 PM to 7 PM"
                    },
                    {
                        "place_name": "MG Road (Mahatma Gandhi Road)",
                        "place_details": "A popular shopping street with various restaurants, cafes, and shops.",
                        "place_image_url": "https://example.com/mg_road.jpg",
                        "geo_coordinates": {
                            "latitude": 18.5204,
                            "longitude": 73.8567
                        },
                        "place_address": "MG Road, Pune, Maharashtra, India",
                        "ticket_pricing": "Free entry",
                        "time_travel_each_location": "20 minutes from Pune-Okayama Garden",
                        "best_time_to_visit": "7 PM onwards"
                    }
                ]
            }
        ]
    }

const Itineray = () => {
 const data = [
    {
      title: "Hotel Recommendations",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm">
            Here are some hotel recommendations for your trip:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {TRIP_DATA?.hotels.map((hotel)=>(
            <HotelCardItem hotel={hotel}/>
           ))}
          </div>
        </div>
      ),
      },
      ...(TRIP_DATA?.itinerary.map((day)=>({
      title :`Day ${day?.day}`,
      content:(
        <div>
        <span className='font-bold text-xl text-gray-500'>Best time to visit: {day?.best_time_to_visit_day}</span>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          {day?.activities.map((activity)=>(
            <div 
            key={`${day.day}-${activity.place_name}`}
            className='flex flex-col items-center'
            >
              <img src={'/hotel.png'} alt={activity?.place_name} className='object-cover rounded-2xl' />
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
          ))}
        </div>
      </div>
        )
    })))
    
  ];
  return (
    <div className="relative w-full h-[90vh] overflow-auto chat-scrollbar ">
      <Timeline data={data} tripData={TRIP_DATA}/>
    </div>
  );
}

export default Itineray