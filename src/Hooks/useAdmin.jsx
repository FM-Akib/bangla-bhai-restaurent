import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    // console.log(user?.email);


    const {data: isAdmin,isPanding: isAdminLoading} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/isadmin/${user?.email}`)
            console.log(res)

            return res.data?.admin; 
        }
    })
    console.log(isAdmin)
    return [isAdmin,isAdminLoading];
};

export default useAdmin;