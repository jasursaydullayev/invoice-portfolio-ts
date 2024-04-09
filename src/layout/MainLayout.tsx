import { Outlet, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div className="flex h-full 1285:flex-col 1285:w-full overflow-scroll overflow-x-hidden">
      <Navbar />
      <Outlet /> 
    </div>
  );
}

export default MainLayout;
