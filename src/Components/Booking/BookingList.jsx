import { useContext, useEffect } from "react";
import { ContextProvider } from "../../AuthContext/AuthContext";


const BookingList = () => {
    const {user}=useContext(ContextProvider);

    const url = `http://localhost:5000/booking?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        });
    },[]);
    return (
        <div>
            <h2>Booking list</h2>
        </div>
    );
};

export default BookingList;