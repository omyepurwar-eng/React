// import React,{useState} from 'react'

// const App = () => {
//   const [num, setnum] = useState({user:"Sarthak", age:20})

//   const btnClicked = () => {
//     const newNum = {...num};
//     newNum.user = 'Aman'
//     newNum.age = 30
//     setnum(newNum)

//     setnum(prev=>({...prev,age:99}))// first age was 20 then 30 then 99.
//   }
//   return (
//     <div>
//       <h1>{num.user},{num.age}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App

// import React, {useState}from 'react'

// const App = () => {

//   const [num, setnum] = useState([10,20,30,40])

//   const btnClicked = () =>{
//     const newNum = [...num]
//     newNum[0] = 10    // update this existing value
//     newNum[3] =90

//     newNum.push(99)   // add new value in the end
//     setnum(newNum)

//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   )
// }

// export default App


import React,{useState} from 'react'

const App = () => {
  const [num, setnum] = useState(10)

  const btnClicked = () => {
    // setnum(num+1)
    // setnum(num+1)
    // setnum(num+1)   // here value will only change by one 
    // if you want to increase it by 3
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App