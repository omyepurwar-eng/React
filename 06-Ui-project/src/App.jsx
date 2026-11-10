import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1669686966156-1018b1705979?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'red',
      tag:'UderServed'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1670884443193-deb1c4e9c1a1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'green',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1680807869514-5e8463014efa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'yellow',
      tag:'UderBooked'
    }
  ]
  return (
    <div>
     <Section1 users={users}/>
     <Section2/>
    </div>
  )
}

export default App
