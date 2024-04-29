import { useForm } from "react-hook-form";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <SectionTitle heading="Add an Item" subHeading="What's new?"></SectionTitle>

            <div className="bg-slate-100 p-5 rounded-md">

            <form onSubmit={handleSubmit(onSubmit)}>


            <label className="form-control w-full">
            <div className="label">
                <span className="label-text">Recipie name*</span>
            </div>
            <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full " />
            </label>

            <div className="flex gap-6 items-end my-2">

            <select {...register("category")} className="select select-bordered w-full ">
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