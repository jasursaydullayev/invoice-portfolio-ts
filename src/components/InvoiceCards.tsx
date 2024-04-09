import { Link } from "react-router-dom";
import { UserContext } from "../context/GlobalConatext";
import { useContext } from "react";
import { GoDotFill } from "react-icons/go";

type myDataTypes = {
  billFromCity: string;
  billFromCountry: string;
  billFromstreetAddress: string;
  billFromPostCode: string;
  city: string;
  clientsEmail: string;
  clientsName: string;
  country: string;
  invoiceDate: string;
  itemName: string;
  postCode: string;
  price: string;
  projectDescription: string;
  qyt: string;
  status: string,
  id: string;
  streetAddress: string;
};

// function formatDateForDisplay() {
//   const months = [
//     "Yan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Iyun",
//     "Iyul",
//     "Avg",
//     "Sent",
//     "Okt",
//     "Noy",
//     "Dek",
//   ];
//   const date = new Date();
//   const day = date.getDate();
//   const month = months[date.getMonth()];
//   const year = date.getFullYear();

//   return `Due ${day} ${month} ${year}`;
// }

function InvoiceCards({ invoices }: any) {
  const {filter} = useContext(UserContext);
  if (invoices === null) {
    return (
      <div className="loader z-30 text-white">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  } else {
    return (
      invoices &&
      invoices.map((doc: myDataTypes) => {
        const {
          billFromCity,
          billFromCountry,
          billFromstreetAddress,
          billFromPostCode,
          city,
          clientsEmail,
          country,
          invoiceDate,
          itemName,
          postCode,
          price,
          projectDescription,
          qyt,
          streetAddress,
          status,
          id,
          clientsName,
        } = doc;
        console.log(
          billFromCity,
          billFromCountry,
          billFromstreetAddress,
          billFromPostCode,
          city,
          clientsEmail,
          country,
          invoiceDate,
          itemName,
          postCode,
          price,
          projectDescription,
          qyt,
          streetAddress
        );

        return (
          <>
          {filter.includes(status) || filter.length == 0 ? <div className="mb-[16px] overflow-y-auto" key={id}>
            <ul>
              {/* Desktop LI */}
              <Link
                to={`/invoice/${id}`}
                className="py-[16px] bg-white dark:bg-light-dark-cite rounded-lg pl-[32px] tablet:pl-[24px] flex items-center gap-[59px] cursor-pointer tablet:hidden hover:border hover:border-dark-blue dark:text-white"
              >
                <div className="flex gap-x-[44px]">
                  <h1 className="font-bold tracking-[-0.25px]">
                    <span className="text-dark-blue">#</span>
                    {id.slice(0, 6)}
                  </h1>
                  <p className="font-medium text-opacity-white dark:text-hover-white">
                    {invoiceDate ? invoiceDate : "Please Enter Invoice date"}
                  </p>
                </div>
                <div className="flex items-center gap-[40px] grow justify-between">
                  <div className="flex grow justify-between">
                    <p className="font-medium text-opacity-white dark:text-white">
                      {clientsName}
                    </p>
                    <h1 className="font-bold text-[15px] text-dark-cite tracking-[-0.25px] dark:text-white">
                      £ {(+price * +qyt).toLocaleString("uz-En")}
                    </h1>
                  </div>
                  <div className="flex gap-[20px] items-center mr-[24px]">
                  <button className={`flex items-center gap-[8px] ${status=="Pending" ? "text-[#FF8F00]" : "text-[#33D69F]"} w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg ${status=="Pending" ? "bg-[#FF8F00]" : "bg-[#33D69F]"}  bg-opacity-5 justify-center`}>
                    <GoDotFill/>
                    {status}
                  </button>
                    <img
                      className="cursor-pointer tablet:hidden"
                      src="/svg/right.svg"
                      alt="right"
                    />
                  </div>
                </div>
              </Link>

              {/* Tablet and mobile LI */}
              <Link
                to={`/invoice/${id}`}
                className="pt-[25px] pb-[22px] bg-white dark:bg-light-dark-cite dark:text-white rounded-xl container hidden tablet:block tablet:flex justify-between hover:border hover:border-dark-blue"
              >
                <div>
                  <h1 className="font-bold tracking-[-0.25px] mb-[24px]">
                    <span className="text-dark-blue">#</span>
                    {id.slice(0, 6)}
                  </h1>
                  <p className="font-medium text-opacity-white dark:text-hover-white mb-[9px]">
                    Due 19 Aug 2021
                  </p>
                  <h1 className="font-bold text-[15px] dark:text-light-bg text-dark-cite tracking-[-0.25px]">
                    £  £ {(price * qyt).toLocaleString("uz-En")}
                  </h1>
                </div>
                <div className="text-end">
                  <p className="font-medium text-opacity-white dark:text-hover-white mb-[24px]">
                    {clientsName}
                  </p>
                  <button className={`flex items-center gap-[8px] ${status=="Pending" ? "text-[#FF8F00]" : "text-[#33D69F]"} w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg ${status=="Pending" ? "bg-[#FF8F00]" : "bg-[#33D69F]"}  bg-opacity-5 justify-center`}>
                    <GoDotFill/>
                    {status}
                  </button>
                </div>
              </Link>
            </ul>
          </div> : ""}
          </>
        );
      })
    );
  }
}

export default InvoiceCards;
