import { Link } from "react-router-dom";
function InvoiceCards({ invoices }: any) {
  if (invoices.length < 1) {
    return (
      <div className="text-center mt-[100px]">
        <img
          className="mb-[66px] mx-auto 630:w-[193px] 630:h-[160px] 630:mb-[42px]"
          src="/png/empty.png"
          alt="empty image"
          width={241}
          height={200}
        />
        <h2 className="font-bold text-[24px] tracking-[-0.75px] mb-[23px] dark:text-white">
          There is nothing here
        </h2>
        <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-opacity-white mx-auto dark:text-hover-white">
          Create an invoice by clicking the <br />
          <span className="font-bold text-[14px]">New Invoice</span> button and
          get started
        </p>
      </div>
    );
  } else
    return (
      <div>
        <ul>
          {/* Desktop LI */}
          <Link
            to={"/invoice/RT3080"}
            className="py-[16px] bg-white dark:bg-light-dark-cite rounded-lg pl-[32px] tablet:pl-[24px] flex items-center gap-[59px] cursor-pointer tablet:hidden hover:border hover:border-dark-blue dark:text-white"
          >
            <div className="flex gap-x-[44px]">
              <h1 className="font-bold tracking-[-0.25px]">
                <span className="text-dark-blue">#</span>RT3080
              </h1>
              <p className="font-medium text-opacity-white dark:text-hover-white">
                Due 19 Aug 2021
              </p>
            </div>
            <div className="flex items-center gap-[40px] grow justify-between">
              <div className="flex grow justify-between">
                <p className="font-medium text-opacity-white dark:text-white">
                  Jensen Huang
                </p>
                <h1 className="font-bold text-[15px] text-dark-cite tracking-[-0.25px] dark:text-white">
                  £ 1,800.90
                </h1>
              </div>
              <div className="flex gap-[20px] items-center mr-[24px]">
                <button className="flex items-center gap-[8px] text-[#FF8F00] w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg bg-[#FF8F00] bg-opacity-5 justify-center">
                  <img
                    src="/svg/orange-oval.svg"
                    alt="green-oval"
                    width={8}
                    height={8}
                  />
                  Pending
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
            to={"/invoice/RT3080"}
            className="pt-[25px] pb-[22px] bg-white dark:bg-light-dark-cite dark:text-white rounded-xl container hidden tablet:block tablet:flex justify-between hover:border hover:border-dark-blue"
          >
            <div>
              <h1 className="font-bold tracking-[-0.25px] mb-[24px]">
                <span className="text-dark-blue">#</span>RT3080
              </h1>
              <p className="font-medium text-opacity-white dark:text-hover-white mb-[9px]">
                Due 19 Aug 2021
              </p>
              <h1 className="font-bold text-[15px] dark:text-light-bg text-dark-cite tracking-[-0.25px]">
                £ 1,800.90
              </h1>
            </div>
            <div className="text-end">
              <p className="font-medium text-opacity-white dark:text-hover-white mb-[24px]">
                Jensen Huang
              </p>
              <button className="flex items-center gap-[8px] text-[#FF8F00] w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg bg-[#FF8F00] bg-opacity-5 justify-center">
                <img
                  src="/svg/orange-oval.svg"
                  alt="green-oval"
                  width={8}
                  height={8}
                />
                Paid
              </button>
            </div>
          </Link>
        </ul>
      </div>
    );
}

export default InvoiceCards;
