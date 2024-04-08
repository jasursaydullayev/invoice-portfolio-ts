import HomeNavbar from "../components/HomeNavbar";
import InvoiceCards from "../components/InvoiceCards";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const {documents, error} = useCollection("invoices")
  return (
    <div className="container">
      <HomeNavbar />
      <InvoiceCards invoices={documents} />
    </div>
  );
}

export default Home;
