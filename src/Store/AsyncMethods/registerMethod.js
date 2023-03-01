import axios from "axios";
// import { useDispatch } from "react-redux";
// import toast, { Toaster } from "react-hot-toast"

export const registerMethod = (state) => {
  return async (dispatch) => {
    const config = {
      header: {
        "Content-type": "application/json",
      },
    };

    dispatch({ type: "SET_LOADER" });
    try {
      const response = await axios.post(
        "https://nssjmieti.onrender.com/register",
        state,
        config
      );
      if (!response)
        dispatch({ type: "REGISTER_ERRORS", payload: response.data.errors });
      else
        dispatch({type:"REGISTER-SUCCESS" , payload:response.data.message})
      dispatch({ type: "CLOSE_LOADER" });
    } catch (error) {
      dispatch({ type: "CLOSE_LOADER" });
      dispatch({
        type: "REGISTER_ERRORS",
        payload: error.response.data.errors,
      });
    }
  };
};
