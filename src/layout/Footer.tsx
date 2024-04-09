import Modal from "../components/Modal";
import ProductsPaid from "../hooks/ProductsPaid";

function Footer() {
  const { setPaid } = ProductsPaid();
  return (
    <div className="gap-[8px] items-center w-full  justify-center bg-white hidden tablet:flex py-[20px] dark:bg-light-dark-cite">
       <label htmlFor="my-drawer">
            <div className="w-[73px] text-center bg-[#F9FAFE] pt-[18px] pb-[15px] font-bold text-light-violet rounded-full text-[15px] tracking-[-0.25px] active:opacity-70">
           Edit
            </div>
          </label>
      <Modal />
      
      <button className="w-[131px] bg-dark-blue pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px]"
      onClick={() => setPaid(true)} 
      >
        Mark as Paid
      </button>
    </div>
  );
}

export default Footer;
