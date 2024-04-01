import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import './Featured.css';
import featuredImg from '../../../assets/home/featured.jpg';
const Featured = () => {
    return (
        <div className="Featured-items text-white bg-fixed my-24">
            
            <SectionTitle
            subHeading='Check it out'
            heading='FROM OUR MENU'
            ></SectionTitle>

            <div className="px-72 pb-28 pt-7  grid grid-cols-2 gap-7 bg-slate-800 bg-opacity-30 ">
              <img className="w-[648px]" src={featuredImg} alt="" />
              <div className="gap-2 ">
                <p>March 20, 2023</p> 
                <p className='text-2xl font-semibold'>WHERE CAN I GET SOME?</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline uppercase border-0 text-white mt-3 border-b-4 border-white">add to cart</button>
              
              </div>
            </div>
            
        </div>
    );
};

export default Featured;