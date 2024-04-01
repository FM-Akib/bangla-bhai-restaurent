import AboutSection from "../About/AboutSection";
import Banner from "../Banner/Banner";
import Callus from "../CallUs/Callus";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import MenuSection from "../Menu/MenuSection";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <AboutSection></AboutSection>
           <MenuSection></MenuSection>
           <Callus></Callus>
           <Chef></Chef>
        </div>
    );
};

export default Home;