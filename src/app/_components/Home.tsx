"use client"
import { ArrowBigDown, Mountain, Parasol, Plane, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

const Home = () => {
    const user = useUser();
    const router = useRouter();
    
    const onSend=()=>{
        console.log(user);
        if (!user){
            router.push('/sign-in')
            return
        }
        router.push('/create-new-trip')
    }
    return (
        <>
        <div className='text-white mt-24 w-full h-auto flex flex-col items-center justify-center gap-10'>

            {/* text/heading */}
            <div className='max-w-3xl w-full text-center space-y-4 '>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Hey, I'm your personal <span className='text-xl text-orange-400 md:text-3xl lg:text-4xl font-bold '>AI Trip Planner</span></h1>
                <p className='text-md md:text-lg font-medium text-gray-400'>Tell me about the trip you want to plan : I will help you with your flight, train, hotel & many more</p>
            </div>


            {/* textarea */}
            <div className="relative w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] rounded-xl">
            <Textarea 
            className='w-full h-20 md:h-25 lg:h-40 resize-none text-white text-lg md:text-xl lg:text-2xl bg-transparent outline-none focus-visible:ring-0 border-gray-400 rounded-xl p-2 pr-10' 
            placeholder='Where do you want to go?'
            />
            <button 
            type='submit'
            onClick={()=>{ onSend()}}
            className="absolute bottom-3 right-4 text-black hover:text-white transition-colors bg-amber-500 rounded-4xl p-3">
                <Send size={20} />
            </button>
            </div>
            
            {/* suggestions */}
            <div  className='w-full text-center px-2'>
                <ul className='flex items-center justify-center gap-3 text-[6px] sm:text-[10px] md:text-xs'>
                    <li className='flex items-center justify-center border border-gray-400 rounded-full p-2 hover:bg-orange-400 hover:border-black transition-colors cursor-pointer '>
                        <span className='pr-2'><Plane size={20} className='h-2 w-2 md:h-5 md:w-5 text-blue-500'></Plane></span>Plan Paris to London 4 days trip.</li>
                    <li className='flex items-center justify-center border border-gray-400 rounded-full p-2 hover:bg-orange-400 hover:border-black transition-colors cursor-pointer '>
                        <span className='pr-2'><Parasol size={20} className='h-2 w-2 md:h-5 md:w-5 text-yellow-300'></Parasol></span>Create iternary for 7 days goa trip.</li>
                    <li className='flex items-center justify-center border border-gray-400 rounded-full p-2 hover:bg-orange-400 hover:border-black transition-colors cursor-pointer '>
                        <span className='pr-2'><Mountain size={20} className='h-2 w-2 md:h-5 md:w-5 text-green-500'></Mountain></span>Discover Hidden Gems</li>
                </ul>
            </div>

            {/* Video section */}
            <div className='w-full text-center mt-10'>
                <h2 className='text-2xl md:text-3xl font-bold text-white'>Experience the world like never before</h2>
                <p className='text-md md:text-lg font-medium text-gray-400 mt-2 mb-5'>Watch how Safarnama.ai helps you plan your dream vacation</p>
                <p className='text-md md:text-lg font-medium text-gray-400 mt-2 mb-5'>Not sure where to start? <span className='text-orange-400'>See how it works <ArrowBigDown size={20} className='h-2 w-2 md:h-5 md:w-5 text-orange-400 inline-block'></ArrowBigDown></span></p>
                <HeroVideoDialog 
                    className="block dark:hidden m-5 w-[80%] lg:w-[60%] xl:w-[50%] mx-auto"
                    animationStyle="from-center"
                    videoSrc="https://www.example.com/dummy-video"
                    thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
                    thumbnailAlt="Dummy Video Thumbnail"
                />
            </div>
            
        </div>
        </>
    )
}

export default Home