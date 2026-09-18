"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Sparkles, Calendar, Clock, MapPin, Compass, ArrowRight } from "lucide-react";

interface DestinationInfo {
  category: string;
  title: string;
  src: string;
  description: string;
  highlights: string[];
  bestTimeToVisit: string;
  duration: string;
  vibe: string;
}

const DestinationDetailContent = ({ destination }: { destination: DestinationInfo }) => {
  const router = useRouter();
  const { isSignedIn } = useUser();

  const handlePlanTrip = () => {
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }
    router.push("/create-new-trip");
  };

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800/95 p-6 md:p-10 rounded-3xl mb-4 text-neutral-800 dark:text-neutral-100 shadow-sm border border-neutral-200/60 dark:border-neutral-700/60">
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Main Image */}
        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-md">
          <Image
            src={destination.src}
            alt={destination.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
            <span className="text-white text-xs md:text-sm font-medium px-3.5 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
              {destination.vibe}
            </span>
          </div>
        </div>

        {/* Overview */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2 text-neutral-900 dark:text-white">
            <Compass className="w-5 h-5 text-amber-500" />
            Overview
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
            {destination.description}
          </p>
        </div>

        {/* Quick Info Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/80">
            <Calendar className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Best Time to Visit</p>
              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{destination.bestTimeToVisit}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/80">
            <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Ideal Duration</p>
              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">{destination.duration}</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-neutral-900 dark:text-white">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Must-Visit Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {destination.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700/80 text-sm text-neutral-700 dark:text-neutral-200"
              >
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-3 flex justify-end">
          <button
            onClick={handlePlanTrip}
            className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Plan a Trip to {destination.category.split(",")[0]}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const destinations: DestinationInfo[] = [
  {
    category: "Paris, France",
    title: "Explore the City of Lights – Eiffel Tower, Louvre & more",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2600&auto=format&fit=crop",
    description:
      "Paris is an iconic global hub for art, fashion, gastronomy, and culture. Stroll along the Seine, marvel at world-class masterpieces in the Louvre, and experience the magical illuminated Eiffel Tower at night.",
    highlights: [
      "Eiffel Tower & Seine River Cruise",
      "The Louvre Museum & Musée d'Orsay",
      "Montmartre & Sacré-Cœur Basilica",
      "Champs-Élysées & Arc de Triomphe",
    ],
    bestTimeToVisit: "April – May & September – October",
    duration: "4 – 6 Days",
    vibe: "Romance • Art • Architecture • Gourmet Dining",
  },
  {
    category: "New York, USA",
    title: "Experience NYC – Times Square, Central Park, Broadway",
    src: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The city that never sleeps offers an unmatched energy. From soaring skyscrapers and world-famous Broadway musicals to tranquil strolls through Central Park, New York delivers unforgettable memories.",
    highlights: [
      "Times Square & Broadway Shows",
      "Central Park & The Met Museum",
      "Statue of Liberty & Ellis Island",
      "Empire State Building & Summit One Vanderbilt",
    ],
    bestTimeToVisit: "September – November & April – June",
    duration: "5 – 7 Days",
    vibe: "Skyscrapers • Broadway • Energy • Skyline",
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo – Shibuya, Cherry Blossoms, Temples",
    src: "https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A dazzling mix of ultramodern neon skyscrapers and historic shrines. Experience Tokyo's vibrant neighborhoods, Michelin-starred culinary scene, high-tech districts, and serene traditional gardens.",
    highlights: [
      "Shibuya Crossing & Harajuku",
      "Historic Senso-ji Temple in Asakusa",
      "Shinjuku Gyoen National Garden",
      "Akihabara & TeamLab Digital Art",
    ],
    bestTimeToVisit: "March – May & October – November",
    duration: "6 – 8 Days",
    vibe: "Futuristic • Heritage • Anime • Street Food",
  },
  {
    category: "Rome, Italy",
    title: "Walk through History – Colosseum, Vatican, Roman Forum",
    src: "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Step into an open-air museum where ancient Roman history meets lively piazzas. Indulge in authentic pasta and gelato while exploring thousand-year-old architectural marvels.",
    highlights: [
      "The Colosseum & Roman Forum",
      "Vatican City & St. Peter's Basilica",
      "Trevi Fountain & Spanish Steps",
      "Pantheon & Trastevere Dining",
    ],
    bestTimeToVisit: "April – May & September – October",
    duration: "4 – 5 Days",
    vibe: "Ancient History • Romance • Gelato • Art",
  },
  {
    category: "Dubai, UAE",
    title: "Luxury and Innovation – Burj Khalifa, Desert Safari",
    src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Dubai combines breathtaking modern architecture, luxurious shopping, and thrilling Arabian desert adventures. Witness record-breaking landmarks and pristine golden beaches.",
    highlights: [
      "Burj Khalifa Top Observatory",
      "Desert Safari & Dune Bashing",
      "The Dubai Mall & Dubai Fountain",
      "Palm Jumeirah & Marina Yacht Tour",
    ],
    bestTimeToVisit: "November – March",
    duration: "4 – 6 Days",
    vibe: "Luxury • Skyscrapers • Desert Safari • Beaches",
  },
  {
    category: "India",
    title: "Timeless Heritage – Taj Mahal, Royal Palaces & Culture",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Immerse yourself in India's glorious heritage, majestic monuments, colorful bazaars, and legendary hospitality. From the wonder of the Taj Mahal to grand desert forts.",
    highlights: [
      "Taj Mahal & Agra Fort",
      "Jaipur's Amber Fort & Hawa Mahal",
      "Vibrant Spice & Silk Bazaars",
      "Authentic Royal Indian Cuisine",
    ],
    bestTimeToVisit: "October – March",
    duration: "5 – 7 Days",
    vibe: "Heritage • Wonders • Royal Forts • Culture",
  },
];

export function PopularCityList() {
  const cards = destinations.map((dest, index) => (
    <Card
      key={dest.src}
      card={{
        src: dest.src,
        title: dest.title,
        category: dest.category,
        content: <DestinationDetailContent destination={dest} />,
      }}
      index={index}
    />
  ));

  return (
    <section className="w-full h-full py-16 md:py-24">
      <div className="max-w-7xl pl-4 mx-auto mb-2">
        <span className="text-amber-500 font-semibold text-sm md:text-base tracking-wider uppercase">
          Top Destinations
        </span>
        <h2 className="text-2xl md:text-5xl font-bold text-white font-sans mt-1">
          Explore Popular Destinations.
        </h2>
        <p className="text-gray-400 text-sm md:text-base mt-2 max-w-2xl">
          Click on any card to explore must-visit highlights, recommended durations, and plan your next journey.
        </p>
      </div>
      <Carousel items={cards} />
    </section>
  );
}

