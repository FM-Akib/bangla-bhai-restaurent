import Menucard from "../../Home/Menu/Menucard";

const MenuCategory = ({items}) => {
    return (
        <div className="pt-10">
            <div className="grid md:grid-cols-2 gap-10 mb-24 px-5">
         {
            items?.map(amenu=> <Menucard
            key={amenu._id}
            menu= {amenu}
            ></Menucard>)
         }
        </div>
        </div>
    );
};

export default MenuCategory;