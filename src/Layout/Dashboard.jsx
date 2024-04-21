import DashNav from "../Pages/Dashboard/DashNav";
import '../App.css';
import logo from '../assets/logo.png';
import { Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 Dash">
            <div className="col-span-3 bg-amber-300 min-h-screen p-6 w-full">
             <div className="flex flex-col justify-center items-center">
             <img className="h-16" src={logo} alt="" />
             <h2 className="text-lime-600 font-bold text-lg text-center">Bangla Bhai Restaurent</h2>
             </div>
             <DashNav></DashNav>
            </div>

            <div className="col-span-9 fontInter p-12">
               <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;