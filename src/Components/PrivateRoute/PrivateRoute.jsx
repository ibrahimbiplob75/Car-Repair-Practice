import { useContext } from "react";
import { ContextProvider } from "../../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import propTypes from "prop-types"


const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(ContextProvider);
    if(loader){
       return (
         <div className="text-center m-20">
           <progress className="progress w-56 "></progress>
         </div>
       );
    }

    if(user?.email){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
    
};

PrivateRoute.propTypes={
    children:propTypes.object,
}

export default PrivateRoute;