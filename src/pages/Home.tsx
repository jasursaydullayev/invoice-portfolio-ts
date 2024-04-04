import HomeNavbar from "../components/HomeNavbar";
import InvoiceCards from "../components/InvoiceCards";

function Home() {
  return (
    <div className="container">
      <HomeNavbar />
      {/* <div className="text-center mt-[100px]">
        <img
          className="mb-[66px] mx-auto 630:w-[193px] 630:h-[160px] 630:mb-[42px]"
          src="/png/empty.png"
          alt="empty image"
          width={241}
          height={200}
        />
        <h2 className="font-bold text-[24px] tracking-[-0.75px] mb-[23px]">
          There is nothing here
        </h2>
        <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-opacity-white w-full max-w-[196px] mx-auto">
          Create an invoice by clicking the 
          New Invoice button and get started
        </p>
      </div> */}
      <InvoiceCards />
    </div>
  );
}

export default Home;
