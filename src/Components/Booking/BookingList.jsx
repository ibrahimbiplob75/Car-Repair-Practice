import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../AuthContext/AuthContext";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../AxiosSecure/UseAxiosSecure";


const BookingList = () => {
    const {user}=useContext(ContextProvider);
    const [booked,setBooked]=useState([]);
    const AxiosSecure = UseAxiosSecure();

    const handleBookingConfirm=(_id)=>{
      fetch(`http://localhost:5000/booking/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            const remaining = booked.filter((book) => book._id !== _id);
            const updated = booked.filter((book) => book._id === _id);
            updated.status = "confirm";
            const newBooked = [updated, ...remaining];
            setBooked(newBooked);
          }
        });
    }

     const handleDelete = (_id) => {
       Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
       }).then((result) => {
         if (result.isConfirmed) {
           fetch(`http://localhost:5000/booking/${_id}`, {
             method: "DELETE",
           })
             .then((res) => res.json())
             .then((data) => {
               console.log(data);
               if (data.deletedCount > 0) {
                 Swal.fire(
                   "Deleted!",
                   "Your file has been deleted.",
                   "success"
                 );
               }
               const remaining = booked.filter((booking) => booking._id !== _id);
               setBooked(remaining);
               // Swal.fire("Deleted!", "Your file has not been deleted.");
             });
         }
       });
     };

    //const url = `http://localhost:5000/booking?email=${user.email}`;
    const url = `/booking?email=${user.email}`;
    useEffect(()=>{
      AxiosSecure.get(url).then((res) => {
        setBooked(res.data);
      });
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data);
        //     setBooked(data)
        // });
    },[url,AxiosSecure]);
    
    return (
      <div>
        <div className="w-3/4 m-auto">
          <h2 className="text-5xl">Your bookings</h2>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Image</th>
                  <th>Service</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {booked.map((booking) => (
                  <BookingRow
                    key={booking._id}
                    booking={booking}
                     handleDelete={handleDelete}
                     handleBookingConfirm={handleBookingConfirm}
                  ></BookingRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default BookingList;