import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'

const NavBar = () => {
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
        <div className="navbar bg-base-100 h-36 items-center w-4/5 mx-auto pt-4">
          <div className="navbar-start">
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
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
          </div>
        </div>
      </div>
    );
};

export default NavBar;