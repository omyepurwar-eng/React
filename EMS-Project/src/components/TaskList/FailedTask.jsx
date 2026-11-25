import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 p-5  bg-yellow-400 rounded-xl '>
                <div className='flex  justify-between items-center  '>
                    <h3 className='bg-red-500 rounded-xl px-3 py-1 text-sm '>High</h3>
                    <h4 className='text-sm  font-semibold '>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-bold '>{data.taskTitle}</h2>
                <p className='text-sm font-light mt-2  '>{data.taskDescription}</p>
                <div className='mt-6'>
                    <button className='w-full font-medium text-xs bg-emerald-700 rounded py-1 px-2 '>
                        Failed
                    </button>
                </div>
        </div> 
  )
}

export default FailedTask
