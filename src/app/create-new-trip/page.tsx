import ChatBot from './_component/ChatBot'
import Itineray from './_component/Itineray'

const CreateNewTrip = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='h-screen overflow-auto'>
            <ChatBot/>
        </div>
        <div className='h-screen col-span-2 '>
            <Itineray/>
        </div>
    </div>
  )
}

export default CreateNewTrip