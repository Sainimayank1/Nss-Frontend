import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux';
import './Login.css'
import loginMethod from "../../Store/AsyncMethods/loginMethod"
import toast, { Toaster } from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [state, setState] = useState({ email: "", password: "" });
  const { loading, LoginError, LoginMessage ,user} = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginMethod(state))
  }

  const handleChange = props => {
    setState({ ...state, [props.target.name]: props.target.value });
  }

  useEffect(() => {
  if (LoginError.length > 0)
  {
    LoginError.map((error) =>toast.error(error));
    dispatch({ type: "CLEAR-LOGIN-ERRORS" });
  }
  }, [LoginError])

  useEffect(() => {
    if (LoginMessage.length > 0)
      toast.success(LoginMessage);
    dispatch({ type: "CLEAR-LOGIN-SUCCESS" });
  }, [LoginMessage])

  useEffect(()=>
  {
    if(user)
      navigate("/");
      
  },[user])
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <div className='img-container'>
        </div>
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
            <Toaster position="top-right" reverseOrder={false} toastOptions={{ style: { fontSize: '14px' } }} />
            <form id='login-form'>
              <input type="text" onChange={handleChange} name="email" placeholder='Enter Email' value={state.email} required></input>
              <input type="password" onChange={handleChange} name="password" placeholder='Enter Password' value={state.password} required></input>
              <button className='btn'  onClick={handleSubmit}>
                {loading ? "......" : "Login"}
              </button>
              <a href='#' className='fp'>Forgot Password</a>
              <p className='p'>OR</p>
              <p className='para1'>New User? Register here</p>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login