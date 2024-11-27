import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Whather from './Components/Whather'
import SignInWG from './Components/SignInWG'
const App = () => {
  return (
    <div>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Whather/>}/>
            <Route path='/signIn' element={<SignInWG/>}/>
         </Routes>
       </BrowserRouter> 
    </div>
  )
}

export default App
