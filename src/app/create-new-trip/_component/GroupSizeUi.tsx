import React from 'react'

export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveles in exploration',
        icon: '✈️',
        people: '1'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two traveles in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adv',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A bunch of thrill-seekes',
        icon: '⛵',
        people: '5 to 10 People'
    },
]

const GroupSizeUi = ({onSelectOption}:any) => {
  return (
    <div className='grid grid-col-2 gap-2 md:grid-cols-4 items-center mt-1 bg-gray-300 rounded-md p-2'>
        {SelectTravelesList.map((item,index)=>(
            <div 
            onClick={()=>onSelectOption(item.title + ":" + item.people)}
            key={index} className='p-3 gap-2 rounded-lg cursor-pointer border border-gray-300 hover:border-amber-500 bg-white  hover:bg-gray-400'>
                <h1>{item.icon}</h1>
                <h1>{item.title}</h1>
            </div>
        ))}
    </div>
  )
}

export default GroupSizeUi