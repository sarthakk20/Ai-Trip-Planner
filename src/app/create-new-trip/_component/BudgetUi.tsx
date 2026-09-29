export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Low',
        desc: 'Stay conscious of costs',
        icon: '💵',
        color: 'bg-green-100 text-green-600'
    },
    {
        id: 2,
        title: 'Medium',
        desc: 'Keep cost on the average side',
        icon: '💰',
        color: 'bg-yellow-100 text-yellow-600'
    },
    {
        id: 3,
        title: 'High',
        desc: 'Don’t worry about cost',
        icon: '💸',
        color: 'bg-purple-100 text-purple-600'
    },
]


const BudgetUi = ({onSelectOption}:any) => {
  return (
    <div className='grid grid-col-1 gap-2 md:grid-cols-3 items-center mt-1 bg-gray-300 p-2 rounded-md'>
            {SelectBudgetOptions.map((item,index)=>(
                <div 
                onClick={()=>onSelectOption(item.title + ":" + item.desc)}
                key={index} className='p-3 gap-2 rounded-lg flex flex-col items-center cursor-pointer bg-white border border-gray-300 hover:border-amber-500 hover:bg-gray-400'>
                    <div className={`text-2xl p-3 rounded-full ${item.color}`}>{item.icon}</div>
                    <h1 className="text-lg font-semibold mt-1">{item.title}</h1>
                    <p className="text-sm text-gray-800">{item.desc}</p>
                </div>
            ))}
        </div>
  )
}

export default BudgetUi