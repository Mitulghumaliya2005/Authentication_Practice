import { useState } from 'react'
import Signin from './componets/Signin.jsx'
import Signup from './componets/Signup.jsx'
import Secrate from './componets/Secrate.jsx'
import Home from './componets/Home.jsx'
import { replace, Route, Routes } from 'react-router-dom'
import { Usercontext } from './context/User_Authorizations.jsx'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'


function App() {

  // const navigate = useNavigate()

  const contextstate = useContext(Usercontext)
  console.log(contextstate.isUser);


  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path='/' element={(contextstate.isUser) ? <Secrate/> : <Home />}></Route>
        <Route path='/signin' element={(contextstate.isUser) ? <Navigate to={'/'} replace={true} /> : <Signin />}></Route>
        <Route path='/signup' element={(contextstate.isUser) ? <Navigate to={'/'} replace={true} /> : < Signup />}></Route>
        {/* <Route path='/secrate' element={<Secrate />}></Route> */}
      </Routes>
    </>
  )
}

export default App
