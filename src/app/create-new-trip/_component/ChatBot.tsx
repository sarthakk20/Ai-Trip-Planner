'use client'
import { Textarea } from '@/components/ui/textarea'
import { Send , Loader} from 'lucide-react'
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import axios from 'axios';
import EmptyBoxState from './EmptyBoxState'
import GroupSizeUi from './GroupSizeUi'
import BudgetUi from './BudgetUi'
import TripDuration from './TripDuration'
import FinalUi from './FinalUi'
import { useMutation } from 'convex/react'
import { api } from '../../../../convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { useuserDetails } from '@/app/provider'

    // type Message = {
    //     role : string;
    //     content : string;
    // }
  type Message = {
  role: "user" | "assistant";
  content: string;
  ui?: string;
};

export type GeoCoordinates = {
  latitude: number;
  longitude: number;
};

export type Hotel = {
  hotel_name: string;
  hotel_address: string;
  price_per_night: string;
  hotel_image_url: string;
  geo_coordinates: GeoCoordinates;
  rating: number;
  description: string;
};

export type Activity = {
  place_name: string;
  place_details: string;
  place_image_url: string;
  geo_coordinates: GeoCoordinates;
  place_address: string;
  ticket_pricing: string;
  time_travel_each_location: string;
  best_time_to_visit: string;
};

export type ItineraryDay = {
  day: number;
  day_plan: string;
  best_time_to_visit_day: string;
  activities: Activity[];
};

export type TripInfo = {
  budget: string;
  destination: string;
  duration: string;
  group_size: string;
  origin: string;
  hotels: Hotel[];
  itinerary: ItineraryDay[];
};
    
const ChatBot = () => {

    const [messages, setMessages] = useState<Array<Message>>([]);
    const [userInput, setUserInput] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [isFinal, setIsFinal] = useState(false)
    const [tripDetails, setTripDetials] = useState<TripInfo>();
    const SaveTripDetails = useMutation(api.tripDetail.CreateTripDetail);
    const {userDetail, setUserDetail} = useuserDetails()

    const onSend=async()=>{
      console.log("inside")
      if(!userInput?.trim())return;
      
      setLoading(true)
      
      const newMsg:Message={
        role:'user',
        content:userInput
      }
      setUserInput("");
      console.log("Here")
      setMessages((prev:Message[])=>[...prev, newMsg]);
      
      const result = await axios.post('/api/aimodel',{
        messages:[...messages, newMsg],
        isFinal : isFinal
      });
      console.log("Trip Data",result.data);

      const aiResponse = result?.data;
      !isFinal && setMessages((prev:Message[])=>[...prev,{
        role:"assistant",
        content:aiResponse?.resp,
        ui:aiResponse?.ui,
      }])

      if(isFinal){
      setTripDetials(aiResponse?.trip_plan);
      const tripId = uuidv4();
      const result = await SaveTripDetails({
        tripDetail:aiResponse?.trip_plan,
        tripId:tripId,
        uid:userDetail?._id!,
      })

      console.log("result",result);
      }
      setLoading(false)
    }

    const RenderGenerativeUI = (ui:string)=>{
      if(ui=='budget'){
        // budget ui component
        return <BudgetUi onSelectOption={(v:string)=>{setUserInput(v),onSend()}}/>
      }
      else if(ui=='groupSize'){
        // GroupSize ui component
        return <GroupSizeUi onSelectOption={(v:string)=>{setUserInput(v),onSend()}}/>
      }
      else if(ui=='tripDuration'){
        // tripDuration ui component
        return <TripDuration onSelectOption={(v:string)=>{setUserInput(v),onSend()}}/>
      }
      else if(ui=='final'){
        // final ui component
        return <FinalUi onSelectOption={(v:string)=>{setUserInput(v),onSend()}}
        disabled={!tripDetails}
        />
      }
      return null;
    }

    useEffect(()=>{
      const LastMsg = messages[messages.length -1];
      if(LastMsg?.ui == 'final'){
        setIsFinal(true)
        setUserInput('Okay, Great!')
        // onSend()
      }
    },[messages])
    
    useEffect(()=>{
      if(isFinal && userInput){
        onSend()
      }
    },[isFinal])

    
  return (
    <>
  {/* Messages */}
  <div className="flex h-[90vh] min-h-0 flex-col chat-scrollbar">
  {messages.length ==0 && (<EmptyBoxState onSelectOption={(v:string)=>{setUserInput(v), onSend();}} />)}
  <section className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4 ">
    {messages.map((msg: Message, index) => (
      
      msg.role === "user" ? (
        <div className="flex justify-end mt-3 sm:mt-4" key={index}>
          <div className="text-white bg-orange-400 p-2.5 sm:p-3 rounded-xl max-w-[85%] sm:max-w-[75%] md:max-w-[65%] text-sm sm:text-base break-words">
            {/* {msg.data?.itinerary ? JSON.stringify(msg.data.itinerary): msg.content} */}
            {msg.content}
          </div>
        </div>
      ) : (
        <div className="flex justify-start mt-3 sm:mt-4" key={index}>
          <div className="text-black bg-gray-200 p-2.5 sm:p-3 rounded-xl max-w-[85%] sm:max-w-[75%] md:max-w-[65%] text-sm sm:text-base break-words">
            {msg.content}
            {RenderGenerativeUI(msg.ui??"")}
          </div>
        </div>
      )
    ))}
    {loading && <div className="flex justify-start mt-3 sm:mt-4">
        <div className="text-black bg-gray-200 p-2.5 sm:p-3 rounded-xl max-w-[85%] sm:max-w-[75%] md:max-w-[65%] text-sm sm:text-base break-words">
          <Loader size={20} className="animate-spin" />
        </div>
      </div>}
  </section>

  {/* Input section */}
  <section className="w-full p-3 sm:p-4">
    <div className="relative w-full max-w-4xl mx-auto">
      <Textarea
        className="w-full min-h-[70px] max-h-[150px] resize-none text-white text-base sm:text-lg bg-transparent outline-none focus-visible:ring-0 border-gray-400 rounded-xl p-3 pr-14"
        placeholder="Where do you want to go?"
        value={userInput}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
          }
        }}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <button
        onClick={onSend}
        disabled={!userInput?.trim() || loading}
        className="absolute bottom-3 right-3 flex items-center justify-center h-10 w-10 text-black hover:text-white transition-colors bg-amber-500 rounded-full"
      >
        {loading ? (
          <Loader size={18} className="animate-spin" />
        ) : (
          <Send size={18} />
        )}
      </button>
    </div>
  </section>
    </div>
    </>
)
}

export default ChatBot