import axios from "axios";


const axiosPublic = axios.create({
    baseURL:'https://bangla-bhai-restaurent-server.vercel.app'
})
const useAxiosPublic = () => {
   return axiosPublic;
};

export default useAxiosPublic;