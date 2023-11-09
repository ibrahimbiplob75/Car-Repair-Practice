
import { Link } from "react-router-dom";
import logo from "../../assets/images/login/login.svg";

const Login = () => {

    const handleLogin=()=>{

    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col justify-between lg:flex-row">
            <div className="text-center lg:text-left mr-10">
              <img src={logo}></img>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl font-bold text-center mt-3">
                Sign-In now!
              </h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="User name"
                    name="user_name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login up!</button>
                </div>
              </form>
              <p className="text-center m-6">
                Not Register yet ? Please {" "}
                <Link
                  to="/register"
                  className="text-2xl text-bold text-green-600"
                >
                  Register
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;