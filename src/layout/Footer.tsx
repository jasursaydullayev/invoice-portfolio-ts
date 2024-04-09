import Edit from "../components/Edit";
import Modal from "../components/Modal";
import ProductsPaid from "../hooks/ProductsPaid";

function Footer() {
  const { setPaid } = ProductsPaid();
  return (
    <div className="gap-[8px] items-center w-full  justify-center bg-white hidden tablet:flex py-[20px] dark:bg-light-dark-cite">
       <Edit />
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
