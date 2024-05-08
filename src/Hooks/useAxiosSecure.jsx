import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const axioSecure = axios.create({
    baseURL: 'https://bangla-bhai-restaurent-server.vercel.app'
})
 const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)



    axioSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      // Add a response interceptor
      axioSecure.interceptors.response.use(function (response) {
      return response;
     },  async(error)=> {
     const status = error.response.status;
    
     if(status === 401 || status === 403){
        await logOut();
        navigate('/login')
     }
     return Promise.reject(error);
  });

    return axioSecure;
};

 export default useAxiosSecure;
