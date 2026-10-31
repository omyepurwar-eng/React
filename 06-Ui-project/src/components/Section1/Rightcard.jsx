import React from 'react'
import RightCardcontent from './RightCardcontent'

const Rightcard = (props) => {
  return (
    <div className=' relative h-full shrink-0 overflow-hidden w-80 rounded-4xl '>
      <img className={props.img} alt="Working Professionals" />
      <RightCardcontent color={props.color} id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard
