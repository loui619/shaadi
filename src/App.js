import React,{useState,useEffect} from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import UserDetails from './components/UserDetails';
const  App=()=> {
  const [auth,setAuth] = useState(false);
  useEffect(()=>{
    if(sessionStorage.getItem("username") && sessionStorage.getItem("password") && sessionStorage.getItem("username") == 'nikhilouis619@gmail.com' && sessionStorage.getItem("password") == 'test'){
      setAuth(true)
    } 
  },[])
  
  const clickAlert = (username,password) => {
   if(username=='nikhilouis619@gmail.com' && password=="test"){
    setAuth(true);
   }
   else{
     alert('failure')
   }
  };
  return (
    <div className="App">
      <BrowserRouter>
      {
        auth ?  <UserDetails /> : <Login data="Click here" onChildClick={clickAlert} />
              
      }
      </BrowserRouter>
      
    </div>
  );
}
export default App;
