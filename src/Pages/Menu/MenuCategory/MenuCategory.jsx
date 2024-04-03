import { Link } from "react-router-dom";
import Menucard from "../../Home/Menu/Menucard";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({items,title,img,subtitle}) => {
    return (
        <div className="pt-10">
            {<Cover img={img} title={title} subtitle={subtitle}></Cover>}
            <div className="grid md:grid-cols-2 gap-10  my-10 px-5">
         {
            items?.map(amenu=> <Menucard
            key={amenu._id}
            menu= {amenu}
            ></Menucard>)
         }

        </div>

         <div className="mb-16 flex justify-center items-center"> 
            <Link to={`/order/${title}`}><button className="btn btn-outline text-xl uppercase bg-slate-50 border-0 border-b-4 border-yellow-600">ORDER YOUR FAVOURITE FOOD</button></Link>
         </div>
        </div>
    );
};

export default MenuCategory;