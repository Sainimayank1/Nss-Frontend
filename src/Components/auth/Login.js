import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux';
import './Login.css'
import loginMethod from "../../Store/AsyncMethods/loginMethod"
import toast, { Toaster } from "react-hot-toast"
import { Link } from 'react-router-dom'

function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const { loading, LoginError, LoginMessage ,user} = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if(state.email === "" || state.password === "")
      dispatch({type:"LOGIN_ERRORS",payload:["Please enter email & password"]})
    else
    dispatch(loginMethod(state))
  }

  const handleChange = props => {
    setState({ ...state, [props.target.name]: props.target.value });
  }

  useEffect(() => {
  if (LoginError.length > 0)
  {
    toast.error(LoginError);
    dispatch({ type: "CLEAR-LOGIN-ERRORS" });
  }
  }, [LoginError])

  useEffect(() => {
    if (LoginMessage.length > 0)
      toast.success(LoginMessage);
    dispatch({ type:"CLEAR-LOGIN-SUCCESS"});
  }, [LoginMessage])

  return (
    <>
       <Helmet>
        <meta charSet="utf-8" />
         <title>Login Here!</title>
       </Helmet>
      <div className='login-container bg-grey'>
        <div className='login-form bg-white'>
          {/* login img */}
          <img src='./picture/profile-user.png' alt='logo' className='img-container'></img>
          <span className="login-span">Login</span>
          <Toaster position="top-right" reverseOrder={false}
            toastOptions={{
              // Define default options
              duration: 5000,
              style: {
                fontsize: '16px'
              },
            }} />
            <p className='pl'>Please enter your login and Password</p>
            <form id='login-form'>
              <input type="text" onChange={handleChange} name="email" placeholder='Enter Email' value={state.email} required></input>
              <input type="password" onChange={handleChange} name="password" placeholder='Enter Password' value={state.password} required></input>
              <button className='btn-login'  onClick={handleSubmit}>
                {loading ? "......" : "Login"}
              </button>
              <Link to='#' className='fp'>Forgot Password</Link>
              <p className='p'>OR</p>
              <p className='para1'>New User? <Link to="/register">Register here</Link></p>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login