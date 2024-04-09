import { Link, useParams } from "react-router-dom";
import AbsoluteCard from "../components/AbsoluteCard";
import SingleInvoicePage from "../components/SingleInvoicePage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

function SingleInvoice() {
  const params = useParams();
  const [singleDoc, setSingleDoc] = useState<any>(null);
  useEffect(() => {
    async function getOneDoc() {
      const docRef = doc(db, "invoices", `${params.id}`);
      const docSnap = await getDoc(docRef);
      setSingleDoc(docSnap.data());
    }
    getOneDoc();
  }, []);
  return (
    <>
      <div className="pt-[40px] 1285:pt-[127px] tablet:pt-[107px] mb-[30px] tablet:mb-[130px] container">
        <Link
          className="font-bold text-[15px] tracking-[-0.25px] text-dark-cite dark:text-white flex items-center gap-[20px] mb-[21px]"
          to={"/"}
        >
          <img src="/svg/left.svg" alt="" />
          Go back
        </Link>
        <AbsoluteCard singleDoc={singleDoc}/>
        <SingleInvoicePage singleDoc={singleDoc} />
      </div>
    </>
  );
}

export default SingleInvoice;
