import Main_navbar from "./Components/Navbars/Main_navbar";
import Navbar from "./Components/Navbars/Navbar";
import React from "react";
import Footer from "./Components/footer/footer";
import { Route, Routes, Navigate } from "react-router-dom";
import EmailVerify from "./Components/EmailVerify/EmailVerify";
import Home from "./Components/Home/Home";
import Login from "./Components/auth/Login"
import Register from "./Components/auth/Register";
import Loading from "./Components/Loader/Loading";
import NotFound from "./Components/auth/NotFound";
import { useSelector } from "react-redux";

function App() {
  const {user} = useSelector((state) => state.authReducer)
  return (
    <>
      <Main_navbar/>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={user ? <Home/> : <Login/>} />
      <Route exact path="/register" element={user ? <Home/> :<Register/>} />
      <Route exact path="/users/:id/verify/:token" element={<EmailVerify />} />
      <Route exact path="/loader" element={<Loading/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
