import axios from "axios";


export const axioSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
 const useAxiosSecure = () => {
    return axioSecure
};

 export default useAxiosSecure;