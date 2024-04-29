import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Menucard from "./Menucard";


const MenuSection = () => {
    const [menu , setMenu] = useState();
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    return (
        <>
        <SectionTitle 
           heading= 'FROM OUR MENU'
           subHeading='Check it out'
           ></SectionTitle>


            <div className="grid md:grid-cols-2 gap-10 mb-24 px-5">
            {
                menu?.map(amenu => <Menucard key={amenu._id} menu={amenu} />)
            }
            </div>

        {/* <div className="grid md:grid-cols-2 gap-10 mb-24 px-5">{
            menu?.map(amenu=> <Menucard
            key={menu._id}
            menu= {amenu}
            ></Menucard>)
         }
        </div> */}
            
        </>
    );
};

export default MenuSection;