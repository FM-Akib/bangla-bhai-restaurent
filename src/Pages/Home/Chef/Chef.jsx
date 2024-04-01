import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ChefMenu from "./ChefMenu";


const Chef = () => {
    const [menu , setMenu] = useState();
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'offered').slice(0,3)
            setMenu(popularItems)
        })
    },[])
    return (
        <>
        <SectionTitle
        subHeading='Should Try'
        heading='CHEF RECOMMENDS'
        ></SectionTitle>

        <div className="grid md:grid-cols-3 gap-10 mb-24 px-8">
         {
            menu?.map(amenu=> <ChefMenu
            key={menu._id}
            menu= {amenu}
            ></ChefMenu>)
         }
        </div>
            
        </>
    );
};

export default Chef;