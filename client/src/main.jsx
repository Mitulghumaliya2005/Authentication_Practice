import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Usercontextprovider } from './context/User_Authorizations.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Usercontextprovider>
        <App />
      </Usercontextprovider>
    </BrowserRouter>
  </StrictMode>,
)
