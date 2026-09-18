'use client'
import { Textarea } from '@/components/ui/textarea'
import { Send , Loader} from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import EmptyBoxState from './EmptyBoxState'

    type Message = {
        role : string;
        content : string;
    }
    
const ChatBot = () => {

    const [messages, setMessages] = useState<Array<Message>>([]);
    const [userInput, setUserInput] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    

    const onSend=async()=>{
        if(!userInput)return;

        setLoading(true)
        setUserInput("");
        const newMsg:Message={
            role:'user',
            content:userInput
        }
        setMessages((prev:Message[])=>[...prev, newMsg]);

        const result = await axios.post('/api/aimodel',{
            messages:[...messages, newMsg]
        });
        setMessages((prev:Message[])=>[...prev,{
            role:"assistant",
            content:result?.data?.resp
        }])
        console.log(result.data);
        setLoading(false)
    }
    
  return (
    // <div className='h-[90vh] flex flex-col'>
    //     Chatbot screen 
    //     <section className='flex-1 overflow-y-auto p-4'>
    //         {messages.map((msg:Message,index)=>(
    //             msg.role=="user"?
    //             <div className='flex justify-end mt-4' key={index}>
    //             <div className='text-white bg-orange-400 p-3 rounded-xl max-w-[80%] '>
    //             {msg.content}
    //             </div>
    //         </div>:
    //         <div className='flex justify-start mt-4' key={index}>
    //             <div className='text-black bg-gray-400 p-3 rounded-xl max-w-[80%] '>
    //                 {loading? <Loader size={20} className='animate-spin'/>:msg.content}
    //             </div>    
    //         </div>
    //        ))}
            
    //     </section>
    //     {/* Input section  */}
    //     <section>
    //         <div className="relative w-[90%] md:w-[85%] lg:w-[80%] xl:w-[92%] rounded-xl ml-5">
    //         <Textarea 
    //         className='w-full h-20 md:h-25 lg:h-40 resize-none text-white text-lg md:text-xl lg:text-2xl bg-transparent outline-none focus-visible:ring-0 border-gray-400 rounded-xl p-2 pr-10' 
    //         placeholder='Where do you want to go?'
    //         value={userInput}
    //         onChange={(e)=>setUserInput(e.target.value)}
    //         />
    //         <button  
    //         onClick={()=>{ onSend()}}
    //         disabled={!userInput}
    //         className="absolute bottom-3 right-4 text-black hover:text-white transition-colors bg-amber-500 rounded-4xl p-3">
    //             <Send size={20} />
    //         </button>
    //         </div>
    //     </section>
    // </div>
  

  <>
{/* Messages */}
<div className="flex h-[90vh] min-h-0 flex-col">
{messages.length ==0 && (<EmptyBoxState onSelectOption={(v:string)=>{setUserInput(v); onSend();}} />)}
<section className="flex-1 min-h-0 overflow-y-auto p-3 sm:p-4">
  {messages.map((msg: Message, index) => (
    msg.role === "user" ? (
      <div className="flex justify-end mt-3 sm:mt-4" key={index}>
        <div className="text-white bg-orange-400 p-2.5 sm:p-3 rounded-xl max-w-[85%] sm:max-w-[75%] md:max-w-[65%] text-sm sm:text-base break-words">
          {msg.content}
        </div>
      </div>
    ) : (
      <div className="flex justify-start mt-3 sm:mt-4" key={index}>
        <div className="text-black bg-gray-200 p-2.5 sm:p-3 rounded-xl max-w-[85%] sm:max-w-[75%] md:max-w-[65%] text-sm sm:text-base break-words">
          {msg.content}
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