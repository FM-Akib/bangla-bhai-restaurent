import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedSection from "../Featured/FeaturedSection";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <SectionTitle 
           heading= 'Order online'
           subHeading='From 11:00am to 10:00pm'
           ></SectionTitle>
           <Category></Category>
        </div>
    );
};

export default Home;