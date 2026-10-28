import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className='parent'>
      <Card user = "Om Yepurwar" age = {21} img="https://images.unsplash.com/photo-1793014850933-561b94ff21a1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
      <Card user = "Piyush Tupe" age = {23} img="https://plus.unsplash.com/premium_photo-1720562575883-c8affef52c99?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"/>
      
    </div>
  )
}

export default App;
