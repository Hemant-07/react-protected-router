import React,{useState} from 'react'
import  Login from "../component/Login"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import PrivateRoute from "./PrivateRoute"
import Home from './Home';



function Demo() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }

  return (
    <div>
     

         <BrowserRouter basename='/react-protected-router'>
       
      <Routes>
         <Route path='/home' element={<PrivateRoute auth={{isSignedIn:false}}>
                <Home />
              </PrivateRoute>}/>
        <Route path ="/login" element={<Login/>}/>
       
        <Route
            path="/dashboard"
            element={
              <PrivateRoute auth={{isSignedIn:true}}>
                <Dashboard />
              </PrivateRoute>
            }
          />
       
      </Routes>
    </BrowserRouter> 

 
    
    </div>
  )
}

export default Demo
