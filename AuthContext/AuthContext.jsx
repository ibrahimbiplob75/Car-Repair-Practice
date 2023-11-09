import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect } from "react";
import auth from "../Firebase/Firebase.confiq";
import { useState } from "react";
import PropTypes from "prop-types";

export const ContextProvider=createContext(null);

const AuthContext = ({children}) => {
    const [user,setUser]=useState([null]);
    const provider = new GoogleAuthProvider();

    const registerWithemail = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithemail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    };

    //google signIn
    const googleSign=()=>{
        return signInWithPopup(auth,provider);
    }

    const logout = () => {
      return signOut(auth);
    };

    useEffect(()=>{
        const unSubscibe=onAuthStateChanged(auth,(currentUser)=>
        {
            if(currentUser){
                setUser(currentUser);
            }
        });
        return ()=>{
            unSubscibe();
        }
    },[])



   

    const authInfo = {
      signInWithemail,
      registerWithemail,
      logout,
      user,
      googleSign,
    };
    return (
      <ContextProvider.Provider value={authInfo}>
        {children}
      </ContextProvider.Provider>
    );
};
AuthContext.propTypes={
    children:PropTypes.node,
}

export default AuthContext;