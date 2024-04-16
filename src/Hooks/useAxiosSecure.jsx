import axios from "axios";


const axioSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
 const useAxiosSecure = () => {
    return axioSecure;
};

 export default useAxiosSecure;