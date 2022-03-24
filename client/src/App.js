import './App.css';
import Navbar from './component/Navbar'
import Login from './component/Login'
import Home from './component/Home'
import { BrowserRouter,Routes, Route, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success",{
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          "Content-type": 'application/json',
          "Access-Control-Allow-Origin": true,
        },
      }).then(response => {
        if (response.status===200) return response.json();
        throw new Error("Failed!")
      }).then(resObject => {
        setUser(resObject.user)
      }).catch(err=>{
        console.log(err)
      })
    }
    getUser();
  },[])
  console.log(user)
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user}/>
        <Routes>
          <Route path='/' element={user ? <Home user={user}/> : <Login/>}/>
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
