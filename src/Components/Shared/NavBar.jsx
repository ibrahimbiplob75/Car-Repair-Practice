import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../AuthContext/AuthContext";
import Swal from "sweetalert2";
import user_avatar from "../../assets/user.jpg"


const NavBar = () => {
  const { user, logout } = useContext(ContextProvider);
  const [booked, setBooked] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [dataFetched, setDataFetched] = useState(false);

  const url = `https://car-service-server-ctf7bl1pp-md-ibrahim-biplobs-projects.vercel.app/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url,{credentials:"include"})
      .then((res) => res.json())
      .then((data) => {
        // const Price = data.reduce(
        //   (acc, booking) => acc + booking.price,
        //   0
        // );
        let totalPrice =0;
        // totalPrice + Price;
        setBooked(data);
        setSubtotal(totalPrice);
        setDataFetched(true); // Set dataFetched to true after successful fetch
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  
 


  const logOut=()=>{
    logout()
      .then(() => {
          Swal.fire({
          title: "Success!",
          text: "You Have Logged Out",
          icon: "success",
          confirmButtonText: "Ok",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
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
    const list = (
      <>
        <li>
          <Link className="text-xl font-inter" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-xl font-inter" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="text-xl font-inter" to="/">
            Service
          </Link>
        </li>
        <li>
          <Link className="text-xl font-inter" to="/">
            Blog
          </Link>
        </li>
        <li>
          <Link className="text-xl font-inter" to="/">
            Contact
          </Link>
        </li>
      </>
    );
    
    return (
      <div>
        <div className="navbar bg-base-100 h-36 items-center w-full mx-auto p-10">
          <div className="navbar-start m-10">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {list}
              </ul>
            </div>
            <Link className="normal-case  text-xl w-2/3 md:w-3/4">
              <img src={logo}></img>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{list}</ul>
          </div>

          <div className="navbar-end">
         
              {/* cart */}
              {user ? (
                <div className="dropdown dropdown-end md:mr-2 lg:mr-4">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        {dataFetched ? booked.length : "Loading..."}
                      </span>
                    </div>
                  </label>

                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">
                        {dataFetched ? booked.length + " items" : "Loading..."}
                      </span>
                      <span className="text-info">
                        {" "}
                        {dataFetched ? `Subtotal: $${subtotal}` : "Loading..."}
                      </span>
                      <div className="card-actions">
                        <Link to="/booking">
                          <button className="btn btn-primary btn-block">
                            View cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                " "
              )}
           
            {/* search */}
            <button className="btn btn-ghost btn-circle md:mr-2 lg:mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Appointment */}

            <button className="btn btn-outline btn-warning">Appointment</button>
            {user ? (
              <div className="dropdown dropdown-end ml-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user?.photo ? (
                      <img src={user?.photo} />
                    ) : (
                      <img src={user_avatar} />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link onClick={logOut}>Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline btn-error ml-3">
                  Log in
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default NavBar;