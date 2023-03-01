import axios from "axios"

const postLogin = (state) =>
{
  return async (dispatch) => {
    const config =
    {
      header: {
        'Content-type': 'application/json'
      }
    }
    dispatch({ type: 'SET_LOADER' })
    try {
      const response = await axios.post('https://nssjmieti.onrender.com/login', state,config)
      if (response) {
        localStorage.setItem('NSSTOKEN',response.data.maintoken);
        dispatch({type:"LOGIN-SUCCESS",payload:response.data.msg})
        dispatch({type :"SET_TOKEN",payload:response.data.maintoken})
        console.log(response.data.maintoken)
      }
      else
        dispatch({ type: "LOGIN_ERRORS", payload: response.data.errors })
      dispatch({ type: "CLOSE_LOADER" })

    } catch (error) {
      dispatch({ type: "CLOSE_LOADER" })
      dispatch({ type: "LOGIN_ERRORS", payload: error.response.data.errors })
    }
  }
}

export default postLogin