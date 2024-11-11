import { useEffect, useState } from 'react'

import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import Login from './Login'
import SignIn from './SignIn'
import ProtectedRoute from './ProtectedRoute'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebase'
import { doc } from 'firebase/firestore'
import VerticalBar from './VerticalBar'
function App() {
  const[user,setUser]=useState(null);
  useEffect(()=>{
    const unsubcribe=onAuthStateChanged(auth,(current)=>{
   
      setUser(current);
      
    })
    return ()=>unsubcribe();
  })
  const [close,setClose]=useState(false)

  return (
   <Router>
 <Routes>
 
  <Route path='/' element={<Home close={close} setClose={setClose} user={user}/>} />
 <Route path='/dashboard' element={<ProtectedRoute user={user}><Dashboard close={close} setClose={setClose} user={user}/></ProtectedRoute>} />
 <Route path='/signin' element={<SignIn/>}/>
 <Route path='/login' element={<Login/>}/>
 {/* <Route /> */}

 </Routes>
   </Router> 
      
  )
}

export default App
