import { USER_REGISTER, USER_LOGIN, GET_AUTH_USER, AUTH_ERRORS, LOAD_USER, USER_LOGOUT } from "../constant/actionTypes";
import axios from 'axios';
// import {toast } from 'react-toastify'

// const getToast = (err) => {
//     return toast.error(err, {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//     });
// }

export const userRegister = (formData) => async(dispatch) => {
    dispatch(loadingUser())
    try {
        const response = await axios.post('https://mernbackend-p7f6.onrender.com/api/auth/register', formData)
        console.log(response)
        dispatch({
            type : USER_REGISTER,
            payload : response.data // {user , msg , token} jebnehom mel back
        })
    } catch (error) {
        console.log(error);
        // const {errors, msg} = error.response.data;
        // if(Array.isArray(errors)){
        //     errors.forEach((err)=>getToast(err.msg))
        // }
        // if(msg){
        //     return getToast(msg)
        // }
        dispatch(
            {type : AUTH_ERRORS}
        );
    }
};

export const userLogin = (formData) => async(dispatch) => {
    dispatch(loadingUser())
    try {
        const response = await axios.post('https://mernbackend-p7f6.onrender.com/api/auth/login', formData)
        console.log(response)
        dispatch({
            type : USER_LOGIN,
            payload : response.data // {user , msg , token} jebnehom mel back
        })
    } catch (error) {
        console.log(error);
        // const {errors, msg} = error.response.data;
        // if(Array.isArray(errors)){
        //     errors.forEach((err)=>getToast(err.msg))
        // }
        // if(msg){
        //     return getToast(msg)
        // }
        dispatch(
            {type : AUTH_ERRORS}
        );
    }
}

export const getAuthUser = () => async(dispatch) =>{
    dispatch(loadingUser())
    try { //headeeers
        const config = {
            headers:{
                "x-auth-token": localStorage.getItem('token')
            }
        }
        const result = await axios.get("https://mernbackend-p7f6.onrender.com/api/auth/",config)
        dispatch(
            {type: GET_AUTH_USER,
            payload : result.data} 
        )        
    } catch (error) {
        console.log(error)
        // const {errors, msg} = error.response.data;
        // if(Array.isArray(errors)){
        //     errors.forEach((err)=>getToast(err.msg))
        // }
        // if(msg){
        //     return getToast(msg)
        // }
        dispatch(
            {type : AUTH_ERRORS}
        )
    }
}

export const loadingUser = () => (dispatch) => {
    dispatch({
        type: LOAD_USER })
}
export const logout = () => (dispatch) => {
    dispatch({
        type : USER_LOGOUT
    })
}