import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Nav/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import '../App.css';

const Main = () => {
    return (
        <div className="Main">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;