import { BiSolidContact } from "react-icons/bi";
import { BsCalendar2DateFill, BsCartDashFill } from "react-icons/bs";
import { CgMenuHotdog } from "react-icons/cg";
import { GiWallet } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi";
import { IoCalendarSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { RiHome3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaBook, FaListCheck, FaUsers } from "react-icons/fa6";
import useAdmin from "../../Hooks/useAdmin";

const DashNav = () => {

    const [cart] = useCart();
    const [isAdmin]= useAdmin()

    return (
        <div className="">
            <ul className="menu p-5 items-start gap-3 w-full ">
            {
                isAdmin ? <>
                
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/adminHome"><RiHome3Fill />Admin Home</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/addItems"><PiForkKnifeFill />Add Items</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/manageItems"><FaListCheck />Manage Items</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/manageBookins"><FaBook />Manage Bookings </NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/allUsers"><FaUsers />All Users</NavLink> </li>
               
                </>:<>
                
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/userhome"><RiHome3Fill />User Home</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/reservation"><BsCalendar2DateFill/>Reservation</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/payment"><GiWallet />Payment History</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/mycart"><BsCartDashFill />My Cart ({cart.length})</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/review"><MdReviews />Add Review</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/dashboard/mybooking"><IoCalendarSharp />My Booking</NavLink> </li>
               
                </>
            }

               
                <div className="divider"></div>
                {/* shared Nav */}
                
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/"><RiHome3Fill />Home</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/menu"><CgMenuHotdog />Menu</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/"><HiShoppingBag />Shop</NavLink> </li>
                <li className="flex items-center text-lg font-semibold">  <NavLink to="/"><BiSolidContact />Contact</NavLink> </li>
            </ul>
        </div>
    );
};

export default DashNav;