import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure =  useAxiosSecure();
    const { isPending, error, data:users=[] } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('users')
            return res.data;
        }
      })

      
      if (isPending) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message

    return (
        <div>
            {
                users.length 
            }
        </div>
    );
};

export default AllUsers;