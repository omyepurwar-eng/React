import React from 'react'
import Rightcard from './RIghtcard'


const Rightcontent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-7 p-6 w-2/3 '>
        {props.users.map(function(elem,idx){
            return <Rightcard key={idx} color={elem.color} id={idx} img = {elem.img} tag = {elem.tag}/>
        })}
    </div>
  )
}

export default Rightcontent
