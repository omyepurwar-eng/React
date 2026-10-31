import React from 'react'

const RightCardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex items-center justify-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadwo-2xs text-lg font-semibold leading-relaxed text-white mb-10 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni culpa aperiam quibusdam libero cumque?</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className= 'text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
                <button style={{backgroundColor:props.color}} className= 'text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardcontent
