import AboutSection from "../About/AboutSection";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import MenuSection from "../Menu/MenuSection";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <AboutSection></AboutSection>
           <MenuSection></MenuSection>
        </div>
    );
};

export default Home;