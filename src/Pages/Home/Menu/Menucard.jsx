import './Menucard.css';
const Menucard = ({menu}) => {
    // console.log(menu)
    const {name,recipe,image,price} = menu;
    return (
        <div className="menucard flex justify-between">
            <img className="md:w-28 w-20" src={image} alt="" />
            <div className="px-6">
                <h3 className="text-lg font-semibold text-orange-500">{name} --------------</h3>
                <p>{recipe}</p>
            </div>
            <h4 className="text-lg font-semibold text-orange-500">${price}</h4>
        </div>
    );
};

export default Menucard;