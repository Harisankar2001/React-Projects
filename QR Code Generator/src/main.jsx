import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./QRCode.css"
import QRCode from './QRCode'
// import Cart from './formSamples/Cart'
import UserDetail from './formSamples/UserDetail'
// import UserCard from './UserCard'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />  <UserCard />  <Cart /> */}
    <QRCode/>
    
  </StrictMode>,
)
