import { Link } from "react-router-dom";
import AbsoluteCard from "../components/AbsoluteCard";
import Footer from "../layout/Footer";
import SingleInvoicePage from "../components/SingleInvoicePage";

function SingleInvoice() {
  return (
    <>
      <div className="pt-[40px] 1285:pt-[127px] tablet:pt-[107px] mb-[30px]  container">
        <Link
          className="font-bold text-[15px] tracking-[-0.25px] text-dark-cite dark:text-white flex items-center gap-[20px] mb-[21px]"
          to={"/"}
        >
          <img src="/svg/left.svg" alt="" />
          Go back
        </Link>
        <AbsoluteCard />
        <SingleInvoicePage />
      </div>
      <Footer />
    </>
  );
}

export default SingleInvoice;
