import { useState } from 'react'
import './App.css'
import {NavBar, ColorCard} from "./Components"

const App = () => {
  

  return (
    <>
      <div>
        <NavBar/>
      </div>
      <div>
      <ColorCard colors={['001C30', '176B87', '64CCC5', 'DAFFFB']} likes={259} horas={23}/>
      </div>
    </>
  )
}

export default App
