import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1793189288803-5fbc6572f75e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'red',
      tag:'UderServed'
    },
    {
      img:'https://images.unsplash.com/photo-1793189288803-5fbc6572f75e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      color:'green',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661559063958-968c8f1928e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
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
