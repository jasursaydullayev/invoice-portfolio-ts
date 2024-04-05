import SelectInput from "./SelectInput";

function Drawer() {
  return (
    <div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="w-[150px] py-[8px] rounded-full text-white pl-[8px] bg-dark-blue flex items-center gap-[16px] text-[15px] tracking-[-0.25px] befT:w-[90px] befT:pl-[6px] befT:gap-[8px] active:opacity-80"
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
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu rounded-r-2xl 1285:mt-[80px] 1285:pl-[56px] p-4 w-[616px] pl-[139px] pt-[59px] min-h-full bg-white  text-base-content overflow-scroll overflow-x-hidden">
          <h1 className="font-bold text-[24px] text-dark-cite tracking-[-0.5px] mb-[46px]">
            New Invoice
          </h1>
          <p className="font-bold text-[15px] text-dark-blue tracking-[-0.25px] mb-[24px]">
            Bill From
          </p>
          <form>
            <div className="mb-[25px]">
              <label
                htmlFor="finp"
                className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Street Address
              </label>
              <br />
              <input
                className="w-full mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="finp"
              />
            </div>

            <div className="flex items-center gap-[24px] mb-[49px]">
              <div>
                <label
                  htmlFor="seinp"
                  className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  City
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="seinp"
                />
              </div>
              <div>
                <label
                  htmlFor="tinp"
                  className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Post Code
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="tinp"
                />
              </div>
              <div>
                <label
                  htmlFor="foinp"
                  className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Country
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
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
                className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Client’s Name
              </label>
              <br />
              <input
                className="w-full mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="fiinp"
              />
            </div>

            <div className="mb-[25px]">
              <label
                aria-required="true"
                htmlFor="sinp"
                className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Client’s Email
              </label>
              <br />
              <input
                className="w-full mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="email"
                id="sinp"
              />
            </div>

            <div className="mb-[25px]">
              <label
                aria-required="true"
                htmlFor="sevinp"
                className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Street Address
              </label>
              <br />
              <input
                className="w-full mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="sevinp"
              />
            </div>

            <div className="flex items-center gap-[24px] mb-[49px]">
              <div>
                <label
                  htmlFor="seinp"
                  className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  City
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="seinp"
                />
              </div>
              <div>
                <label
                  htmlFor="tinp"
                  className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Post Code
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="tinp"
                />
              </div>
              <div>
                <label
                  htmlFor="foinp"
                  className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Country
                </label>
                <br />
                <input
                  className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="foinp"
                />
              </div>
            </div>

      <div className="flex gap-[24px] items-start">
      <div>
              <label
                htmlFor="foinp"
                className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Invoice Date
              </label>
              <br />
              <input
                className="w-full max-w-[240px] mt-[9px] focus:outline-dark-blue border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="date"
                id="foinp"
              />
            </div>
            <div>
              <label className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet">Payment Terms</label>
              <br />
              <SelectInput />
            </div>
      </div>
          </form>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
