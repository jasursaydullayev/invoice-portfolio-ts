import { useParams } from "react-router-dom";
import Modal from "./Modal";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Drawer from "./Drawer";
import ProductsPaid from "../hooks/ProductsPaid";

function AbsoluteCard() {
  const { setPaid, paid } = ProductsPaid();
  const params = useParams();
  const deleteCurrentDoc = async () => {
    await deleteDoc(doc(db, "invoices", `${params.id}`));
  };
  return (
    <div className="bg-white dark:bg-light-dark-cite container shadow rounded-xl flex justify-between tablet:flex-col mb-[17px]">
      <div className="py-[20px] flex items-center gap-[20px] justify-between">
        <p className="font-medium text-opacity-white dark:text-hover-white">
          Status
        </p>
        {paid ? (
          <button className="flex items-center gap-[8px] text-[#33D69F] w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg bg-[#33D69F] bg-opacity-5 justify-center">
            <img
              src="/svg/green-oval.svg"
              alt="green-oval"
              width={8}
              height={8}
            />
            Paid
          </button>
        ) : (
          <button className="flex items-center gap-[8px] text-[#FF8F00] w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg bg-[#FF8F00] bg-opacity-5 justify-center">
            <img
              src="/svg/orange-oval.svg"
              alt="green-oval"
              width={8}
              height={8}
            />
            Pending
          </button>
        )}
      </div>
      <div className="flex gap-[8px] items-center tablet:hidden">
        <Drawer edit={"Edit"} />
        <Modal deleteCurrentDoc={deleteCurrentDoc} />
        <button
          onClick={() => setPaid(true)}
          className="w-[131px] bg-dark-blue pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70"
        >
          Mark as Paid
        </button>
      </div>
    </div>
  );
}

export default AbsoluteCard;
