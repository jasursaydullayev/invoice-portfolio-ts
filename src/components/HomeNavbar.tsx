function HomeNavbar() {
  return (
    <div className="pt-[78px] font-bold flex items-center justify-between mb-[64px] dark:text-white">
      <div>
        <h1 className="text-[36px] tracking-[-1.13px] mb-[6px] befT:text-[24px] befT:tracking-[-0.75px] befT:mb-[3px]">
          Invoices
        </h1>
        <p className="font-medium text-[13px] tracking-[-0.1px] text-opacity-white dark:text-hover-white">
          No invoices
        </p>
      </div>
      <ul className="flex items-center gap-[40.54px] befT:gap-[18.54px]">
        <div className="dropdown dropdown-end">
          <h3
            tabIndex={0}
            className="flex cursor-pointer items-center gap-[14px] text-[15px] befT:gap-[12px]"
          >
            <div>
              Filter <span className="befT:hidden">by status</span>
            </div>
            <img
              src="/svg/bottom.svg"
              alt="bottom.svg"
              width={8.46}
              height={4.23}
            />
          </h3>
          <ul
            tabIndex={0}
            className="dropdown-content mt-[22px] z-[1] menu py-[24px] pl-[24px] shadow bg-base-100 rounded-lg w-[192px]"
          >
            <div className="flex gap-[13px] mb-[15px]">
              <input
                className="w-[16px] h-[16px]"
                type="checkbox"
                id="#draft"
              />
              <label
                htmlFor="#draft"
                className="font-bold cursor-pointer text-[15px] tracking-[-0.25px]"
              >
                Draft
              </label>
            </div>
            <div className="flex gap-[13px] mb-[15px]">
              <input
                className="w-[16px] h-[16px]"
                type="checkbox"
                id="#pending"
              />
              <label
                htmlFor="#pending"
                className="font-bold cursor-pointer text-[15px] tracking-[-0.25px]"
              >
                Pending
              </label>
            </div>
            <div className="flex gap-[13px]">
              <input className="w-[16px] h-[16px]" type="checkbox" id="#paid" />
              <label
                htmlFor="#paid"
                className="font-bold cursor-pointer text-[15px] tracking-[-0.25px]"
              >
                Paid
              </label>
            </div>
          </ul>
        </div>

        <button className="w-[150px] py-[8px] rounded-full text-white pl-[8px] bg-dark-blue flex items-center gap-[16px] text-[15px] tracking-[-0.25px] befT:w-[90px] befT:pl-[6px] befT:gap-[8px] active:opacity-80">
          <img src="/svg/plus.svg" alt="plus.svg" width={32} height={32} />
          <div>
            New <span className="befT:hidden">Invoice</span>
          </div>
        </button>
      </ul>
    </div>
  );
}

export default HomeNavbar;
