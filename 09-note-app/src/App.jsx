import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task];

    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className='bg-black h-screen lg:flex  text-white '>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex items-start lg:w-1/2 gap-2 flex-col p-10 '>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

      <input
        type="text"
        placeholder='Enter Heading'
        className='px-5 w-full font-medium outline-none py-2 rounded border-2'
        value={title}
        onChange={(e)=> {
          setTitle(e.target.value)
        }}

      />

      <textarea 
        type="text" 
        placeholder="Write Details" 
        className='px-5 h-32 font-medium outline-none w-full rounded border-2'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
      />

      <button className='bg-white active:scale-99 font-medium w-full text-black outline-none rounded px-5 py-2 '>Add Notes</button>

      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-6 items-center justify-start h-full  overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className="h-58 flex justify-between flex-col  w-40 bg-cover rounded-2xl px-4 pt-9 pb-4 py-3 text-black bg-[url('https://imgs.search.brave.com/u4zeEkSihutjHmfowcLDuFjY8cwILk0NUAo-Aeik4vg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L2ZsYXQtZGVzaWdu/LWJsdWUtbGluZWQt/cGFwZXItYmFja2dy/b3VuZF8yMy0yMTUx/MDkzOTc3LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA')]">

              <div>
                <h3 className='leading-tight text-xl font-semibold'>{elem.title}</h3>
                <p className='mt-3 leading-tight font-medium text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='cursor-pointer active:scale-80 w-full bg-red-500 text-white text-xs rounded font-bold   py-1 '>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
