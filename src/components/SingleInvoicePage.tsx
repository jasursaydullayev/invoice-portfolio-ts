import { useParams } from "react-router-dom";
function SingleInvoicePage({singleDoc}: any) {
  const params = useParams();
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
  
  //   return `${day} ${month} ${year}`;
  // }

  if (!singleDoc) {
    return (
      <div className="loader z-30 text-white">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  } else
    return (
      <div className="container rounded-xl py-[28px] bg-white dark:bg-light-dark-cite">
        <div className="flex items-center justify-between mb-[21px] tablet:flex-col tablet:items-start tablet:gap-y-[30px]">
          <div>
            <h1 className="font-bold tracking-[-0.25px] mb-[7px] dark:text-white">
              <span className="text-hover-white">#</span>
              {params.id?.slice(0, 6)}
            </h1>
            <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
              Graphic Design
            </p>
          </div>
          <div className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] text-end">
            <p>{singleDoc.streetAddress}</p>
            <p>{singleDoc.billFromCity}</p>
            <p>{singleDoc.billFromPostCode}</p>
          </div>
        </div>
        <div className="flex gap-x-[117px] tablet:flex-col tablet:mb-[32px]">
          <div className="flex items-start gap-[118px] tablet:gap-[61px]">
            <div>
              <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
                Invoice Date
              </p>
              <h1 className="font-bold tracking-[-0.25px] text-[15px] dark:text-white mb-[31px]">
                {singleDoc.invoiceDate}
              </h1>
              <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
                Payment Due
              </p>
              <h1 className="font-bold tracking-[-0.25px] dark:text-white text-[15px] mb-[31px]">
                {singleDoc.paymentTerms}
              </h1>
            </div>
            <div>
              <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
                Bill To
              </p>
              <h1 className="font-bold tracking-[-0.25px] dark:text-white text-[15px] mb-[7px]">
                {singleDoc.clientsEmail}
              </h1>
              <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
                {singleDoc.streetAddress}
              </p>
              <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
                {singleDoc.city}
              </p>
              <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
                {singleDoc.postCode}
              </p>
              <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
                {singleDoc.country}
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
              Sent to
            </p>
            <h1 className="font-bold tracking-[-0.25px] dark:text-white text-[15px] mb-[7px]">
              {singleDoc.clientsName}
            </h1>
          </div>
        </div>
        <div>
          <div className="container pt-[33px] pb-[19px] bg-[#F9FAFE] dark:bg-light-dark font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] rounded-t-lg">
            <div className="mb-[13px] flex justify-between items-center tablet:hidden">
              <p>Item Name</p>
              <div className="flex items-center gap-[104px]">
                <p>QTY.</p>
                <p>Price</p>
                <p>Total</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-[12px] tablet:flex-col tablet:items-start  gap-[12px] mobile:mx-[15px]">
                <h1 className="font-bold tracking-[-0.25px] text-[15px] dark:text-white text-dark-cite">
                  {singleDoc.itemName}
                </h1>
                <div className="flex items-center gap-[63px] tablet:gap-0 tablet:items-start">
                  <p className="flex gap-[5px]">
                    {singleDoc.qyt}{" "}
                    <span className="hidden tablet:block">x</span>
                    <p className="ml-[80px] tablet:ml-0">
                      £ {singleDoc.price}.00
                    </p>
                  </p>
                  <p className="text-dark-cite font-bold text-[15px] dark:text-white tablet:hidden">
                    £ {singleDoc.qyt * singleDoc.price}.00
                  </p>
                </div>
                <p className="text-dark-cite font-bold text-[15px] dark:text-white hidden tablet:block ml-auto mt-[-25px]">
                  £ 156.00
                </p>
              </div>
            </div>
          </div>
          <div className="py-[14px] container bg-[#373B53] dark:bg-dark-cite rounded-b-lg text-white flex items-center justify-between">
            <p className="font-medium text-[13px]">Amount Due</p>
            <h1 className="font-bold text-[24px] tracking-[-0.5px]">
              £ {singleDoc.qyt * singleDoc.price}.00
            </h1>
          </div>
        </div>
      </div>
    );
}

export default SingleInvoicePage;
