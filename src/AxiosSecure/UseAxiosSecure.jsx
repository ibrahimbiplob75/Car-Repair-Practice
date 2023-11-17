import axios from "axios";
import { useContext, useEffect } from "react";
import { ContextProvider } from "../AuthContext/AuthContext";


const AxiosSecure = axios.create({
  baseURL: "https://car-service-server-ctf7bl1pp-md-ibrahim-biplobs-projects.vercel.app",
  withCredentials:true,
});

const UseAxiosSecure = () => {
const {  logout } = useContext(ContextProvider);
    useEffect(()=>{
            AxiosSecure.interceptors.response.use(
              (res) => {
                return res;
              },

              (error) => {
                console.log("Interseptors error", error.response);
                if (
                  error.response.status === 401 ||
                  error.response.status === 403
                ) {
                  logout();
                }
              }
            );
        },[AxiosSecure])
    return (
        AxiosSecure
        
    );
};

export default UseAxiosSecure;