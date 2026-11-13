import React, { useEffect, useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  // useEffect(function(){
  //   console.log('use effect is running....')
  // },[num])

  // return (
  //   <div>
  //     <h1>value of num = {num}</h1>
  //     <h1>value of num2 = {num2}</h1>
  //     <button
  //     onMouseEnter={() => {
  //       setNum(num+1)
  //     }}
  //     onMouseLeave={()=>{
  //       setNum2(num+100)
  //     }}>
  //       Click
  //     </button>
  //   </div>
  // )


            // 2nd example for useEffect    

  const [a, setA] = useState(0)
  const [b, setB] = useState(20)

  function achanging(){
    console.log('A ki value changed');
  }
  function bchanging(){
    console.log('B ki value changed');
  }
  useEffect(function(){
    achanging()
    console.log('useEffect is running...');
  },[a])

  return(
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App
