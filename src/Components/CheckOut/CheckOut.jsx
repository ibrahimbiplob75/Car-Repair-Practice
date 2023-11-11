import { useLoaderData } from "react-router-dom";
import slide1 from "../../assets/images/banner/2.jpg";
import { useContext } from "react";
import { ContextProvider } from "../../../AuthContext/AuthContext";
import Swal from "sweetalert2";

const CheckOut = () => {
    const data=useLoaderData();
    const {user}=useContext(ContextProvider);
    const { price, title, service_id ,img} = data;
    const handleBookService=(event)=>{
        event.preventDefault();
        const data=event.target;
        const name = data.name.value;
        const email = data.email.value;
        const date = data.date.value;
        const price = data.price.value;

        const booking_order={
            title,
            service_id,
            name,
            email,
            date,
            img,
            price
        }
        console.log(booking_order);

        fetch("http://localhost:5000/booking", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(booking_order),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Your Service Booked Successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });



    }
  return (
    <div>
      <div className="w-4/5 mx-auto  ">
        <div id="slide1" className="carousel-item relative w-full h-96">
          <img src={slide1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-full">
              <h2 className="text-4xl font-extrabold">Check Out</h2>
              <div className="text-center left-0 top-0">
                <button className="btn btn-primary mr-5">Home/Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center text-3xl mt-12">Book Service: {title} </h2>
          <form onSubmit={handleBookService}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due amount</span>
                </label>
                <input
                  type="text"
                  defaultValue={price}
                  name="price"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Order Confirm"
              />
            </div>
          </form>
          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
