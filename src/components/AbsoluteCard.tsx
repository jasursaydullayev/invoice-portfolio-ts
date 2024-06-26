import { useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import Drawer from "./Drawer";
import { GoDotFill } from "react-icons/go";
import { toast } from "react-toastify";

function AbsoluteCard({ singleDoc }: any) {
  const navigate = useNavigate();
  const editStatus = async (e: any) => {
    navigate("/");
    const washingtonRef = doc(db, "invoices", e);
    await updateDoc(washingtonRef, {
      status: "Paid",
    }).then(() => {
      toast.info("You paided a invoice")
    })
  };
  const params = useParams();
  const deleteCurrentDoc = async () => {
    await deleteDoc(doc(db, "invoices", `${params.id}`))
        .then(() => {toast.error("You are delete one Invoice")})
        .catch((error) => toast.error(error));
  };
  return (
    <div className="bg-white dark:bg-light-dark-cite container shadow rounded-xl flex justify-between tablet:flex-col mb-[17px]">
      <div className="py-[20px] flex items-center gap-[20px] justify-between">
        <p className="font-medium text-opacity-white dark:text-hover-white">
          Status
        </p>
        <button
          className={`flex items-center gap-[8px] ${
            status == "Pending" ? "text-[#33D69F]" : "text-[#FF8F00]"
          } w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg ${
            status == "Pending" ? "bg-[#33D69F]" : "bg-[#FF8F00]"
          }  bg-opacity-5 justify-center`}
        >
          <GoDotFill />
          {singleDoc ? singleDoc.status! : ""}
        </button>
      </div>
      <div className="flex tablet:min-w-full gap-[8px] tablet:fixed tablet:bottom-0  tablet:left-0 bg-white items-center tablet:justify-center tablet:py-[14px] mobile:py-[10px] dark:bg-[#1E2139]">
        <Drawer edit={"Edit"} />
        <Modal deleteCurrentDoc={deleteCurrentDoc} />
        <button
          onClick={() => editStatus(params.id)}
          className="w-[131px] bg-dark-blue pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 mobile:pt-[14px] mobile:pb-[12px]"
        >
          Mark as Paid
        </button>
      </div>
    </div>
  );
}

export default AbsoluteCard;
