// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(56)
//   const [user, setUser] = useState("Om")
//   const [users, setUsers] = useState([10,20,30])

//   function change(){
//      setNum(20)
//      setUser("Naveen")  
//      setUsers([30,40,50])
//   }

//   return (
//     <div>
//       <h1>value of num is {num} <br /> {users} <br /> vale of user is {user}
//       </h1>
//       <button onClick={change}>click</button>
//     </div>
//   )
// }

// export default App
import React , {useState}from 'react'
const App = () => {

  const [num, setnum] = useState(20)

  function increaseNum(){
    setnum(num+1)
  }

  function decreseNum(){
    setnum(num-1)
  }

  function jumpby4(){
    setnum(num+4)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick = {increaseNum}>increase</button>
      <button onClick = {decreseNum}>decrease</button>
      <button onClick = {jumpby4}>increase by 4</button>
    </div>
  )
}

export default App

