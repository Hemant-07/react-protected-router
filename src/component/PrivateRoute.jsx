import React from "react";
import { Outlet,Navigate } from "react-router-dom";

  

// const PrivateRoute = ({ auth: { isSignedIn }, children }) => {
//     return isSignedIn ? children : <Navigate to="/login" />;
//   };


  
// export default PrivateRoute


const useAuth=()=>{
  const user=localStorage.getItem('user')
  if(user){
    return true
  } else {
    return false
  }
}


const  PrivateRoute=(props:any) =>{


  const auth=useAuth()


  return auth?<Outlet/>: <Navigate to="/login"/>
}


export default PrivateRoute;;


