import SelectInput from "./SelectInput";

function Drawer() {
  return (
    <div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="dark:text-hover-white w-[150px] py-[8px] rounded-full text-white pl-[8px] bg-dark-blue flex items-center gap-[16px] text-[15px] tracking-[-0.25px] befT:w-[90px] befT:pl-[6px] befT:gap-[8px] active:opacity-80"
        >
          <img src="/svg/plus.svg" alt="plus.svg" width={32} height={32} />
          <div>
            New <span className="befT:hidden">Invoice</span>
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="dark:text-hover-white close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu rounded-r-2xl 1285:mt-[80px] 1285:pl-[56px] p-4 w-[678px] pl-[139px] pt-[59px] min-h-full bg-white dark:bg-[#141625]  text-base-content overflow-scroll overflow-x-hidden">
          <h1 className="font-bold text-[24px] text-dark-cite dark:text-white tracking-[-0.5px] mb-[46px]">
            New Invoice
          </h1>
          <p className="font-bold text-[15px] text-dark-blue tracking-[-0.25px] mb-[24px]">
            Bill From
          </p>
          <form>
            <div className="mb-[25px]">
              <label
                htmlFor="finp"
                className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Street Address
              </label>
              <br />
              <input
                className="w-full mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="finp"
              />
            </div>

            <div className="flex items-center gap-[24px] mb-[49px]">
              <div>
                <label
                  htmlFor="seinp"
                  className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  City
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="seinp"
                />
              </div>
              <div>
                <label
                  htmlFor="tinp"
                  className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Post Code
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="tinp"
                />
              </div>
              <div>
                <label
                  htmlFor="foinp"
                  className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Country
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="foinp"
                />
              </div>
            </div>

            <p className="font-bold text-[15px] text-dark-blue tracking-[-0.25px] mb-[24px]">
              Bill To
            </p>

            <div className="mb-[25px]">
              <label
                htmlFor="fiinp"
                className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Client’s Name
              </label>
              <br />
              <input
                className="w-full mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="fiinp"
              />
            </div>

            <div className="mb-[25px]">
              <label
                aria-required="true"
                htmlFor="sinp"
                className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Client’s Email
              </label>
              <br />
              <input
                className="w-full mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="email"
                id="sinp"
              />
            </div>

            <div className="mb-[25px]">
              <label
                aria-required="true"
                htmlFor="sevinp"
                className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Street Address
              </label>
              <br />
              <input
                className="w-full mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="sevinp"
              />
            </div>

            <div className="flex items-center gap-[24px] mb-[49px]">
              <div>
                <label
                  htmlFor="seinp"
                  className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  City
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="seinp"
                />
              </div>
              <div>
                <label
                  htmlFor="tinp"
                  className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Post Code
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="tinp"
                />
              </div>
              <div>
                <label
                  htmlFor="foinp"
                  className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Country
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="foinp"
                />
              </div>
            </div>

            <div className="flex gap-[24px] items-start mb-[25px]">
              <div>
                <label
                  htmlFor="nineinp"
                  className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Invoice Date
                </label>
                <br />
                <input
                  className="min-w-[200px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="date"
                  id="nineinp"
                />
              </div>
              <div>
                <label className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet">
                  Payment Terms
                </label>
                <br />
                <SelectInput />
              </div>
            </div>

            <div className="mb-[35px]">
              <label
                aria-required="true"
                htmlFor="eighinp"
                className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Project Description
              </label>
              <br />
              <input
                className="w-full mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="eighinp"
              />
            </div>
            <h1 className="font-bold text-[18px] text-[#777F98] tracking-[-0.38px] mb-[14px]">
              Item List
            </h1>
            <div className="flex items-center mb-[18px] justify-between">
              <div className="flex gap-[16px]">
                <div className="mb-[18px]">
                  <label
                    aria-required="true"
                    className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet dark:text-hover-white"
                  >
                    Item Name
                  </label>
                  <br />
                  <input
                    className="w-full max-w-[174px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[12px] pr-[10px]"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    aria-required="true"
                    className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet dark:text-hover-white"
                  >
                    Qty.
                  </label>
                  <br />
                  <input
                    className="w-full max-w-[46px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[3px] pr-[3px]"
                    type="number"
                  />
                </div>
                <div>
                  <label
                    aria-required="true"
                    className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet dark:text-hover-white"
                  >
                    Price
                  </label>
                  <br />
                  <input
                    className="w-full max-w-[100px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[13px] pr-[13px]"
                    type="number"
                  />
                </div>
                <div>
                  <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet mb-[28px] dark:text-hover-white">
                    Total
                  </p>
                  <p className="font-bold text-[15px] tracking-[-0.25px] text-opacity-white dark:text-hover-white">
                    0
                  </p>
                </div>
              </div>
              <div className="mt-[10px] cursor-pointer">
                <img src="/svg/delete.svg" alt="" width={12.44} height={16} />
              </div>
            </div>
            <div className="cursor-pointer mb-[39px] font-bold text-[15px] tracking-[-0.25px] text-dark-blue pt-[18px] pb-[15px] bg-[#F9FAFE] w-full rounded-full text-center dark:bg-[#252945] dark:text-[#DFE3FA]">
              + Add New Item
            </div>
            <div className="flex items-center  justify-between">
              <button className="font-bold text-[15px] tracking-[-0.25px] text-dark-blue w-[96px] rounded-full py-[17px] text-center bg-[#F9FAFE] opacity-70 dark:opacity-100">
                Discard
              </button>
              <div className="flex gap-[8px]">
                <button className="font-bold text-[15px] tracking-[-0.25px] text-[#888EB0] w-[133px] rounded-full py-[16px] text-center bg-[#373B53] dark:text-white">
                  Save as Draft
                </button>
                <button className="font-bold text-[15px] tracking-[-0.25px] text-white w-[128px] rounded-full py-[16px] text-center bg-dark-blue">
                  Save & Send
                </button>
              </div>
            </div>
          </form>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
