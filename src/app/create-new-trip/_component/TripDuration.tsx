import { Minus, Plus } from 'lucide-react'
import React,{useState,useEffect} from 'react'

const TripDuration = ({onSelectOption}:any) => {
    const [loading, setLoading] = useState(true);
    const [duration, setDuration] = useState(1);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000); 
    }, []);
    const substractDays=()=>{
        if(duration>0) setDuration((prev:number)=>prev - 1)
    }
    const addDays=()=>{
        setDuration((prev:number)=>prev + 1)
    }
  return (
    <div className="text-center mt-1 p-2 bg-gray-300 rounded-md">
        <h2 className="text-lg font-semibold">How many days you want to travel</h2>
        <div className='flex justify-center mt-2 p-2'>

        <button 
        disabled={duration==0}
        className={duration>0?"":"opacity-50 cursor-not-allowed"}
        onClick={()=>substractDays()}>
            <Minus size={34} strokeWidth={3} className='cursor-pointer mx-2 p-2 hover:bg-amber-400 hover:text-white rounded-md'/>
        </button>
            <span className='text-2xl font-semibold'>{duration} </span>
            <h2 className='text-2xl font-semibold ml-2'>Days</h2>
            <button onClick={()=>addDays()}>
                <Plus size={34} strokeWidth={3} className='cursor-pointer mx-2 p-2 hover:bg-amber-400 hover:text-white rounded-md'/>
            </button>
        </div>
        <div className='flex justify-center items-center mt-2 p-2'>
            <button 
            onClick={()=>onSelectOption(duration+' Days')}
            className='bg-amber-500 p-2 mt-1 rounded-md hover:text-white'>Confirm Days</button>
        </div>
    </div>
  )
}

export default TripDuration