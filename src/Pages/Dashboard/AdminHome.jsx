import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ImUsers } from "react-icons/im";
import { RiFileList2Fill } from "react-icons/ri";
import { BiSolidBadgeDollar } from "react-icons/bi";

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
                <h1 className="text-2xl text-emerald-600 font-semibold">
                <span className="mr-2">Hi! Welcome</span>
                {
                    user?.displayName ? user.displayName : "Back," 
                }
                </h1>
            </div>





    <div className="">
           <section className="p-4 my-6 bg-gray-100 text-gray-800 rounded-md">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-emerald-600">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 w-9 text-gray-100">
					<polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
					<path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
					<path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
				</svg>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{stats.orders}</p>
				<p className="capitalize">Orders</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-emerald-600">
            <ImUsers className="text-white text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{stats.users}</p>
				<p className="capitalize">Customers</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-emerald-600">
            <RiFileList2Fill className="text-white text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{stats.menuItems}</p>
				<p className="capitalize">Products</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-50 text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-emerald-600">
            <BiSolidBadgeDollar   className="text-white text-4xl" />
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">{stats.revenue}</p>
				<p className="capitalize">Revenue</p>
			</div>
		</div>
	</div>
</section>
           </div>
            
        </div>
    );
};

export default AdminHome;