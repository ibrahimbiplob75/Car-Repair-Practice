import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect } from "react";
import auth from "../Firebase/Firebase.confiq";
import { useState } from "react";
import PropTypes from "prop-types";

export const ContextProvider=createContext(null);

const AuthContext = ({children}) => {
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);
    const provider = new GoogleAuthProvider();

    const registerWithemail = (email, password) => {
        setLoader(true);
       return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithemail=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    //google signIn
    const googleSign=()=>{
        setLoader(true);
        return signInWithPopup(auth,provider);
    }

    const logout = () => {
      setLoader(true)
      return signOut(auth);
    };

    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
        if (CurrentUser) {
          setUser(CurrentUser);
          setLoader(false);
        }
      });
      return () => {
        unSubscribe();
      };
    }, []);



   

    const authInfo = {
      signInWithemail,
      registerWithemail,
      logout,
      user,
      googleSign,
      loader,
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