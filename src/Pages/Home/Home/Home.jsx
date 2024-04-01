import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import AboutSection from "../About/AboutSection";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <SectionTitle 
           heading= 'Order online'
           subHeading='From 11:00am to 10:00pm'
           ></SectionTitle>
           <Category></Category>
           <AboutSection></AboutSection>
        </div>
    );
};

export default Home;