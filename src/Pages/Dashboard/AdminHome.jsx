import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const {user}  = useContext(AuthContext);

    const {data:stats = {}} = useQuery({
        queryKey:['adminstats'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })
    console.log(stats)
    return (
        <div>
            <div className="">
                <h1 className="text-3xl text-emerald-600 font-semibold">
                <span className="mr-2">Hi! Welcome</span>
                {
                    user?.displayName ? user.displayName : "Back," 
                }
                </h1>
            </div>
            
        </div>
    );
};

export default AdminHome;