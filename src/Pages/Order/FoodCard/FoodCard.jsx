

const FoodCard = ({item}) => {
    const {name,recipe,image,price} = item;

    return (
        <div className="max-w-[380px] bg-yellow-200 flex flex-col items-center rounded-md shadow-lg relative">
            <img className="w-full rounded-md" src={image} alt="" />
            <p className="bg-red-700 text-white px-4 py-2 rounded absolute top-4 right-0">${price}</p>
           <div className="p-5 flex flex-col items-center justify-between">
           <div className="px-5 py-4 text-center">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="pt-1">{recipe}</p>
            </div>
            <button className="btn btn-outline uppercase bg-slate-50 border-0 border-b-4 border-yellow-600">add to cart</button>
           </div>
        </div>
    );
};

export default FoodCard;