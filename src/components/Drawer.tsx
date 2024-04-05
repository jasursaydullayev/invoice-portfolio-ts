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
        <ul className="menu rounded-r-2xl p-4 w-[616px] pl-[139px] pt-[59px] min-h-full bg-white  text-base-content overflow-scroll overflow-x-hidden">
          <h1 className="font-bold text-[24px] text-dark-cite tracking-[-0.5px] mb-[46px]">
            New Invoice
          </h1>
          <p className="font-bold text-[15px] text-dark-blue tracking-[-0.25px] mb-[24px]">
            Bill From
          </p>
          <form>
            <div>
            <label htmlFor="finp" className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet">Street Address</label>
            <br />
            <input className="w-full mt-[9px] border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-lg pl-[20px] pr-[15px]" type="text" id="finp" />
            </div>
          </form>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
