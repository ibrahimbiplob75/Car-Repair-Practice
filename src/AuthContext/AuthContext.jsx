import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect } from "react";
import auth from "../Firebase/Firebase.confiq";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

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

   
    //     const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
    //     const userEmail = CurrentUser?.email || user.email;
    //     const loggerUser = { email: userEmail };
        
          
    //       setUser(CurrentUser);
    //       setLoader(false);

    //       if(CurrentUser){
            
    //         axios
    //           .post("http://localhost:5000/jwt", loggerUser, {
    //             withCredentials: true,
    //           })
    //           .then((res) => {
    //             console.log("Token response Client site",res.data);
    //           });
    //       }
          
        
    //     else{
    //       axios
    //         .post("http://localhost:5000/logout", loggerUser, {
    //           withCredentials: true,
    //         })
    //         .then((res) => {
    //           console.log("Logout",res.data);
    //         });
    //     }
    //   });
    //   return () => {
    //     unSubscribe();
    //   };
    // }, []);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);
        console.log("current user", currentUser);
        setLoader(false);
        // if user exists then issue a token
        if (currentUser) {
          axios
            .post("http://localhost:5000/jwt", loggedUser, {
              withCredentials: true,
            })
            .then((res) => {
              console.log("token response", res.data);
            });
        } 
        else {
          axios
            .post("http://localhost:5000/logout", loggedUser, {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res.data);
            });
        }
      });
      return () => {
        return unsubscribe();
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