import { Outlet } from "react-router-dom"
import Footer from "./Components/Shared/Footer";
import NavBar from "./Components/Shared/NavBar";


function App() {
 

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App
