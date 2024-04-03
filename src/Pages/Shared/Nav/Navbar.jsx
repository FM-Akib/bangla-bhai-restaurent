
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
const Navbar = () => {
    return (
    <div className="navbar bg-black text-white fixed z-10 px-4 bg-opacity-30 max-w-screen-xl">
     <div className="navbar-start">
      <div className="dropdown">
       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-50 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl ">
       <div className="h-full flex items-center gap-1">
       <img className="h-[100%]" src={logo} alt="" />
        Bangla Bhai<br/>Restaurent   
        </div> 
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Our Menu</Link></li>
      <li><Link to="/order/salad">Order</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-orange-600 text-white border-0">Login</a>
  </div>
</div>
    );
};

export default Navbar;