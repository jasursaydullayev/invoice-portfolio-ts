import HomeNavbar from "../components/HomeNavbar";
import InvoiceCards from "../components/InvoiceCards";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function Home() {
  const [invoice, setInvoice] = useState<object[]>([]);
  useEffect(() => {
    async function getData() {
      let invoicesArr: any = [];
      const snapshots = await getDocs(collection(db, "invoices"));
      snapshots.forEach((snapshot) => {
        invoicesArr.push({ id: snapshot.id, ...snapshot.data() });
      });
      setInvoice(invoicesArr);
    }
    getData();
  }, []);
  return (
    <div className="container">
      <HomeNavbar />
      <InvoiceCards invoices={invoice} />
    </div>
  );
}

export default Home;
