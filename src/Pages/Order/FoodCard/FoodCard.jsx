import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";


const FoodCard = ({item}) => {
    const {name,recipe,image,price,_id} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    // const axiosSecure = useAaxiosSecure()

    const handleAddtoCart=()=>{
        if(user?.email){
            console.log(user.email);
            const cartItem = {
                menuId : _id,
                email : user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts',cartItem)
            .then(res=>console.log(res.data))
        }
        else {
            Swal.fire({
                title: "Please Login first.",
                text: "You are not logged in!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{from:location}})
                }
              });
             
        }  
    }

    return (
        <div className="max-w-[380px] bg-yellow-200 flex flex-col items-center rounded-md shadow-lg relative">
            <img className="w-full rounded-md" src={image} alt="" />
            <p className="bg-red-700 text-white px-4 py-2 rounded absolute top-4 right-0">${price}</p>
           <div className="p-5 flex flex-col items-center justify-between">
           <div className="px-5 py-4 text-center">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="pt-1">{recipe}</p>
            </div>
            <button onClick={handleAddtoCart} className="btn btn-outline uppercase bg-slate-50 border-0 border-b-4 border-yellow-600">add to cart</button>
           </div>
        </div>
    );
};

export default FoodCard;