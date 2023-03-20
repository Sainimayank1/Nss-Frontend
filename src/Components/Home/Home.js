import React from 'react'
import MyCarousel from "../Carousel/MyCarousel";
import Main1 from "../Main/Main1";
import toast, { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux';
import Organization from '../Organization/Organization';
import { useEffect } from 'react';
function Home() {
  const dispatch = useDispatch();
  const { loading, LoginError, LoginMessage ,user} = useSelector((state) => state.authReducer);
  useEffect(() => {
    if (LoginMessage.length > 0)
      toast.success(LoginMessage);
    dispatch({ type:"CLEAR-LOGIN-SUCCESS"});
  }, [LoginMessage])

  return (
    <>
    <Toaster position="top-right" reverseOrder={false}
            toastOptions={{
              // Define default options
              duration: 5000,
              style: {
                fontsize: '16px'
              },
            }} />
        <MyCarousel /> 
       <Main1 /> 
       <Organization />
    </>
  )
}

export default Home