import React from 'react'
import { Timeline } from '@/components/ui/timeline'

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
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full h-[90vh] overflow-auto chat-scrollbar ">
      <Timeline data={data} tripData={TRIP_DATA}/>
    </div>
  );
}

export default Itineray