import { Link } from "react-router-dom";
import AbsoluteCard from "../components/AbsoluteCard";
import Footer from "../layout/Footer";

function SingleInvoice() {
  return (
 <>
    <div className="pt-[65px] container">
        <Link className="font-bold text-[15px] tracking-[-0.25px] text-dark-cite dark:text-white flex items-center gap-[20px] mb-[31px]" to={"/"}>
          <img src="/svg/left.svg" alt="" />
          Go back
        </Link>
        <AbsoluteCard />
    </div>
    <Footer />
 </>
  );
}

export default SingleInvoice;
