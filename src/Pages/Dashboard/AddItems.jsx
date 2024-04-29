import { useForm } from "react-hook-form";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import Category from "../Home/Category/Category";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key= import.meta.env.VITE_Image_Hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers: {
                'content-type': 'multipart/form-data',
            }
        }) 
        if(res.data.success) {
            const menuItem ={
                name: data.name,
                category:data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu',menuItem)
            if(menuRes.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} added!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
    }
    return (
        <div>
            <SectionTitle heading="Add an Item" subHeading="What's new?"></SectionTitle>

            <div className="bg-slate-100 p-10 rounded-md">

            <form onSubmit={handleSubmit(onSubmit)}>


            <label className="form-control w-full">
            <div className="label">
                <span className="label-text">Recipie name*</span>
            </div>
            <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full " />
            </label>

            <div className="flex gap-6 items-end my-2">

            <select {...register("category")} defaultValue="default" className="select select-bordered w-full ">
            <option disabled selected>Category*</option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="desserts">Desserts</option>
            <option value="drinks">Drinks</option>
            </select>

            <label className="form-control w-full">
            <div className="label">
                <span className="label-text">Price*</span>
            </div>
            <input {...register("price")} type="number" placeholder="Type here" className="input input-bordered w-full " />
            </label>

            </div>


            
            <label className="form-control w-full mt-4">
            <div className="label">
                <span className="label-text">Recipe Details*</span>
            </div>
            <textarea {...register("details")} className="textarea textarea-bordered w-full " placeholder="Recipe Details"></textarea>
            </label>
            <div className="">

            <input {...register("image")} type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs mt-4" />
            </div>
            

            <button className="btn btn-outline btn-primary mt-4">Add Items <FaUtensils className="ml-1"></FaUtensils></button>
            {/* <input type="submit" /> */}
            </form>
            </div>
        </div>
    );
};

export default AddItems;