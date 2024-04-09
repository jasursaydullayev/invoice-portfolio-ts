import { Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from "./Footer";

function MainLayout() {
  // const params = useParams()
  return (
    <div className="flex h-full 1285:flex-col 1285:w-full overflow-scroll overflow-x-hidden">
      <Navbar />
      <Outlet /> 
      {/* {params.id ? <Footer /> : ""} */}
    </div>
  );
}

export default MainLayout;
