

const ChefMenu = ({menu}) => {
    const {name,recipe,image} = menu;

    return (
        <div className="max-w-[380px] bg-yellow-200 flex flex-col items-center rounded-md shadow-lg">
            <img className="w-full rounded-md" src={image} alt="" />
           <div className="p-5 flex flex-col items-center justify-between">
           <div className="px-5 py-4 text-center">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="pt-1">{recipe}</p>
            </div>
            <button className="btn btn-outline uppercase border-0 border-b-4 border-yellow-600">add to cart</button>
           </div>
        </div>
    );
};

export default ChefMenu;