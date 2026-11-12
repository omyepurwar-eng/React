import React from 'react'

const App = () => {
  // localStorage.clear()
  // localStorage.setItem('user','Sarthak')// this data will be saved even after the browser is closed.

  // const user = localStorage.getItem('user')
  // console.log(user);

  // localStorage.setItem('age','18')
  // const age = localStorage.getItem('age')
  // const user = localStorage.getItem('user')
  // console.log(age, user);
  // localStorage.removeItem('user')
  // localStorage.removeItem('age')

  // the 4 steps 
  // 1- Setitems to initiate the value
  // 2- getItems to get the value or variable 
  // 3- removeItem to remove the one item form localstorage
  // 4- clear to remove/clear  the whole data .  


  const user = {
    username: 'Sarthak',
    age:18,
    city: 'Bhopal'
  }

  // localStorage.setItem('user',user)// if you write this way user only gets {Object} This is wrong method.

  localStorage.setItem('user',JSON.stringify(user))// here the user gets the whole value of the object	{"username":"Sarthak","age":18,"city":"Bhopal"}

  const userZ = JSON.parse(localStorage.getItem('user'))// here the json.parse will convert the string form into object form

  console.log(userZ)
  return (
    <div>
      App
    </div>
  )
}

export default App
