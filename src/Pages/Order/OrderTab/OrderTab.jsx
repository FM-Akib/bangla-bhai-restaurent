import FoodCard from "../FoodCard/FoodCard";


const OrderTab = ({item}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 mb-24 px-8">
         {
            item?.map(amenu=> <FoodCard
            key={amenu._id}
            item = {amenu}
            ></FoodCard>)
         }
         </div>
    );
};

export default OrderTab;