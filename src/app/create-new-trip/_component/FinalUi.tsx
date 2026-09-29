import React,{useState} from 'react'

const FinalUi = ({onSelectOption, disable}:any) => {

    const [loading, setLoading] = useState(true);
  return (
    <>
    <div className="mt-3 sm:mt-4 text-center">
      <div className="flex flex-col items-center justify-center gap-2 text-black rounded-xl bg-gray-300 hover:bg-gray-300 p-2.5 sm:p-3 ">
        <h2 className="font-semibold text-lg">Planning your trip...</h2>
        <p className="text-sm mt-2 text-gray-500">
          We are now finalizing the details based on your preferences
        </p>
        <p>Please wait for some time...⏳</p>
        <button 
        disabled={disable}
        onClick={()=>onSelectOption('Trip Details')}
        className='bg-amber-400 p-2 mt-1 rounded-md hover:text-white'>View Trip Details</button>
      </div>
    </div>
    </>
  );
};

export default FinalUi;