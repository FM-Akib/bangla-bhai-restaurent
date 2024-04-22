import { HiTrash } from "react-icons/hi";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const MyCart = () => {
  const [cart,refetch] = useCart();
  //  console.log(cart);
  const totalPrice = cart?.reduce((total,item)=>total+item.price,0);
  const axiosSecure = useAxiosSecure();
  const handleDeleteBtn = (id) =>{
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
        axiosSecure.delete(`/carts/${id}`)
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
            <h1 className="text-center text-emerald-600 text-3xl font-bold">My Carts </h1>
          </div>

          <div className="w-full">
            <div className="bg-amber-50 rounded p-7 w-4/5 mx-auto mt-10">
              
              <div className="flex justify-between items-center mb-10">
                <h1 className="text-xl font-semibold">Total Orders: {cart.length}</h1>
                <h1 className="text-xl font-semibold">Total Price: <span className="text-red-600">${totalPrice}</span></h1>
                <button className="btn py-0 bg-emerald-600 text-white px-6">Pay</button>
              </div>

              <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart?.map((acart,index)=> <tr key={acart._id}>
         <td>{index+1}</td>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={acart.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </div>
          </td>
          <td className=" ">
            {acart.name}
          </td>
          <td>${acart.price}</td>
          <th>
            <button onClick={()=>handleDeleteBtn(acart._id)} className="btn btn-ghost "><HiTrash className="text-2xl text-red-500" /></button>
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

export default MyCart;