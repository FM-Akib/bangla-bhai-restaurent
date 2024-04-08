import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Navigate} from 'react-router'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading) {
        <span className="loading loading-ring loading-lg flex items-center justify-center"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;