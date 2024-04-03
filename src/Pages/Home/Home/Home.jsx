import { Helmet } from "react-helmet";
import AboutSection from "../About/AboutSection";
import Banner from "../Banner/Banner";
import Callus from "../CallUs/Callus";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import Featured from "../Featured/Featured";
import MenuSection from "../Menu/MenuSection";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
            
        <Helmet>
        <title>Bangla Bhai | Home</title>
        </Helmet>

           <Banner></Banner>
           <Category></Category>
           <AboutSection></AboutSection>
           <MenuSection></MenuSection>
           <Callus></Callus>
           <Chef></Chef>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;