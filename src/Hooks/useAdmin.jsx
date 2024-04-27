import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: isAdmin} = useQuery({
        queryKey:[user?.email, 'isAdmin'],
        queryFn: async()=>{
            const result = await axiosSecure.get(`/users/admin/${user?.email}`);
            return result.data?.admin; 
        }
    })
    return [isAdmin];
};

export default useAdmin;