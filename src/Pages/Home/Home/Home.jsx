import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <SectionTitle 
           heading= 'Order online'
           subHeading='From 11:00am to 10:00pm'
           ></SectionTitle>
        </div>
    );
};

export default Home;