import { useState } from 'react'
import Header from "./Components/Header/Header"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from "./Pages/Home/home"
import { People } from "./Pages/People/people"
import {Planets} from "./Pages/Planets/planets"
import { SingleCharacter } from './Pages/SingleCharacter/SingleCharacter'



function App() {

  return (
    <>
      

      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/home" element = {<Home />}/>
            <Route path="/people" element = {<People />}/>
            <Route path="/planets" element = {<Planets />}/>
            <Route path="/character/:id" element={<SingleCharacter />} />

            <Route path="*" element={
              <div>
                <h1 style={{ color: "red" }}>Page not found 404</h1>
              </div>
            }
          />

          </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
