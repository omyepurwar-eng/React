import React from 'react'

const NewTask = () => {
  return (
    <div className='shrink-0 h-full w-75 p-5  bg-green-400 rounded-xl '>
                    <div className='flex  justify-between items-center  '>
                        <h3 className='bg-red-500 rounded-xl px-3 py-1 text-sm '>High</h3>
                        <h4 className='text-sm  font-semibold '>20 feb 2027</h4>
                    </div>
                    <h2 className='mt-5 text-2xl font-bold '>Make a Youtube Video</h2>
                    <p className='text-sm font-light mt-2  '> Lorem  ipsum dolor sit amet consectetur, adipisicing elit. Ipsam nostrum velit architecto!</p>
                    <div className='mt-5 '> 
                                <button>Accept Task</button>
                    </div>
            </div> 
  )
}

export default NewTask
