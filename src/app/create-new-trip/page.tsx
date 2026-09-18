import ChatBot from './_component/ChatBot'
import Map from './_component/Map'

const CreateNewTrip = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='h-screen overflow-auto'>
            <ChatBot/>
        </div>
        <div className='h-screen'>
            <Map/>
        </div>
    </div>
  )
}

export default CreateNewTrip