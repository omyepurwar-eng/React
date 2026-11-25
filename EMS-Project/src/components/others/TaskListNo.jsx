import React from 'react'

const TaskListNo = ({data}) => {
  return (
    <div className='flex mt-10  screen justify-between gap-5 '>
        <div className=' py-6 px-9 w-[45%] bg-red-600 rounded-xl '>
            <h2 className='text-3xl font-bold '>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium '>New Task</h3>
        </div>
        <div className=' py-6 px-9 w-[45%] bg-green-600 rounded-xl '>
            <h2 className='text-3xl font-bold '>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium '>Completed Task</h3>
        </div>
        <div className=' py-6 px-9 w-[45%] bg-blue-600 rounded-xl '>
            <h2 className='text-3xl font-bold '>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium '>Accepted Task</h3>
        </div>
        <div className=' py-6 px-9 w-[45%] bg-amber-600 rounded-xl '>
            <h2 className='text-3xl font-bold '>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium '>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNo
