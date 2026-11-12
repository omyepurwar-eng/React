import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  //  async function getData(){

  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

  //   console.log(response);

  //   // let's see what happened here

  //   // there are 2 ways to call API 

                  //  FIRST ONE
  //   // we use fetch. In this fetch :-
  //   //1- we are getting api key from json placeholder and paste that key into response.
  //   //2- we use async and await keywords. it will stop the rsponse untill the data from api key gets to the rresponse 
  //   // 3- without using asnyc and await your code will show {Promise {<pending>}} this is means your data is on the way 
  // }

                // SECOND ONE
    // const getData = async  () =>{
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //     console.log(response.data);
    // }
    const [data, setData] = useState('')

    const getData = async () => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
     console.log(response.data);

     setData(response.data)
     
    }
  return (
    <div>
      <button onClick={getData}> Get Data</button>
      <div>
        {data.map(function(elem,idx){

          return <h3>Hello{idx}</h3>
        })}

      </div>
    </div>
  )
}

export default App
