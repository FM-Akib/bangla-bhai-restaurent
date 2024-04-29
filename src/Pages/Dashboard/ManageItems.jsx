import { TbPhotoEdit } from "react-icons/tb";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { HiTrash } from "react-icons/hi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu,refetch,loading] = useMenu();
    if (loading) return 'Loading...'

    // console.log(menu);
   const axiosSecure = useAxiosSecure();

    const handleDeleteBtn = (item) => {


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
              axiosSecure.delete(`/menu/${item._id}`)
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
    const updateItem = (item) => {

    }
    return (
        <div>
            <SectionTitle heading="Manage all item" subHeading="Hurry Up!"></SectionTitle>


           <div className="">
            
           <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     
     
      {menu?.map((item,index)=>   <tr key={item._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="" />
              </div>
            </div>
          </div>
        </td>
        <td>
         {item.name}
        </td>
        <td>{item.price}</td>
        <td>
        <button onClick={()=>updateItem(item)} className="btn btn-ghost "><TbPhotoEdit className="text-2xl text-amber-500"/></button>

          <button className="btn btn-ghost "></button>
        </td>
        <td>
        <button onClick={()=>handleDeleteBtn(item)} className="btn btn-ghost "><HiTrash className="text-2xl text-red-500" /></button>
            
        </td>
      </tr>)}
    

    </tbody>

    
  </table>
</div>
            
            </div> 
        </div>
    );
};

export default ManageItems;