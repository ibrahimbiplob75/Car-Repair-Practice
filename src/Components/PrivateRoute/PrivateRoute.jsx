import { useContext } from "react";
import { ContextProvider } from "../../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import propTypes from "prop-types"


const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(ContextProvider);
    const location=useLocation();
    
    if(loader){
       
         <div className="text-center m-20">
           <progress className="progress w-56 "></progress>
         </div>
       

    }

    if(user?.email){
        return children;
    }
    
    else{
      return (
        <Navigate state={location.pathname} to="/login" ></Navigate>
      );
    }
    
    
};

PrivateRoute.propTypes={
    children:propTypes.object,
}

export default PrivateRoute;