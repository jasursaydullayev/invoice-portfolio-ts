import HomeNavbar from "../components/HomeNavbar";
import InvoiceCards from "../components/InvoiceCards";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { documents } = useCollection("invoices");
  return (
    <div className="container">
      <HomeNavbar docs={documents} />
      <InvoiceCards invoices={documents} />
    </div>
  );
}

export default Home;
