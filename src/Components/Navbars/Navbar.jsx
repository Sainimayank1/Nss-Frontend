import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { user} = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const  logout = () =>
    {
        const token = localStorage.getItem("NSSTOKEN");
        if(token)
            localStorage.removeItem("NSSTOKEN");
        dispatch({type:"REMOVE-USER"});
        navigate("/");
    }
  return (
    <div className='Navbar blue-bg'>
      <div className='Navbar-left'>
        <Link to='/'>Home</Link>
      </div>
      <div className='Navbar-right'>
        {user ? <>
            <div className='Navbar-posts'><Link to='/'>Posts</Link></div>
            <div className='Navbar-create'><Link to='/register'>Create Post</Link></div>
            <div className='Navbar-login'><Link onClick={()=>{logout()}}>Logout</Link></div>
            </>
            :
            <>
            <div className='Navbar-posts'><Link to='/'>Posts</Link></div>
            <div className='Navbar-login'><Link to='/login'>Login</Link></div>
            <div className='Navbar-login'><Link to='/register'>Register</Link></div>
            </>
        }   
      </div>
    </div>


  )
}

export default Navbar