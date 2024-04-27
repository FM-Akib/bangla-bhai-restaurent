import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const {user,loading} =useContext(AuthContext)
    const location = useLocation();
    

    
    if(loading||isAdminLoading) {
        <span className="loading loading-ring loading-lg flex items-center justify-center"></span>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>
   
};

export default AdminRoute;