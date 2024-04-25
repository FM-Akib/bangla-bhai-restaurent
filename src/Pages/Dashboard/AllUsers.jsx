import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { HiTrash } from "react-icons/hi";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure =  useAxiosSecure();
    const { isPending, error, data:users=[],refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users',{
              headers: { 
                authorization: `Bearer ${localStorage.getItem('access-token')}`
              }
            })
            return res.data;
        }
      })


      if (isPending) return 'Loading...'
      if (error) return 'An error has occurred: ' + error.message


      const handleMakeAdmin=(user)=>{
        axiosSecure.patch(`users/admin/${user._id}`)
        .then(res=>{
          if(res.data.modifiedCount>0){
          refetch();
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${user.name} is admin now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

      }
      
 
  const handleDeleteBtn = (user) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
        .then(result => {
          // console.log(result);
          if(result.data.deletedCount > 0) {

          refetch();
          Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
          }
        })
      }
    });
    
  }

    return (
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-center text-emerald-600 text-3xl font-bold">All Users </h1>
          </div>

          <div className="w-full">
            <div className="bg-amber-50 rounded p-7  mx-auto mt-10 w-full">
              
              <div className="flex justify-between items-center mb-10">
                <h1 className="text-xl font-semibold">Total Users: {users.length}</h1>
              </div>

              <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users?.map((auser,index)=> <tr key={auser._id}>
         <td>{index+1}</td>
         <td className=" ">
            {auser.name}
          </td>
          <td className=" ">
            {auser.email}
          </td>
          <td> { auser.role==='admin' ? "Admin" :  <button  className="btn bg-amber-500 " onClick={()=>handleMakeAdmin(auser)}><FaUsers className="text-2xl text-white " /></button>}</td>
          <th>
            <button  className="btn  bg-red-500 " onClick={()=>handleDeleteBtn(auser)}><HiTrash className="text-2xl text-white " /></button>
          </th>
        </tr>)
      }
   
    </tbody>
 
  </table>
</div>

            </div>
          </div>
        </div>
    );
};

export default AllUsers;