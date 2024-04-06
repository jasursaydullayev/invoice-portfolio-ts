function SingleInvoicePage() {
  return (
    <div className="container rounded-xl py-[28px] bg-white dark:bg-light-dark-cite">
      <div className="flex items-center justify-between mb-[21px] tablet:flex-col tablet:items-start tablet:gap-y-[30px]">
        <div>
          <h1 className="font-bold tracking-[-0.25px] mb-[7px] dark:text-white">
            <span className="text-hover-white">#</span>RT3080
          </h1>
          <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
            Graphic Design
          </p>
        </div>
        <div className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] text-end">
          <p>19 Union Terrace</p>
          <p>London</p>
          <p>E1 3EZ</p>
          <p className="tablet:mb-[21px]">United Kingdom</p>
        </div>
      </div>
      <div className="flex gap-x-[117px] tablet:flex-col tablet:mb-[32px]">
        <div className="flex items-start gap-[118px] tablet:gap-[61px]">
          <div>
            <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
              Invoice Date
            </p>
            <h1 className="font-bold tracking-[-0.25px] text-[15px] dark:text-white mb-[31px]">
              21 Aug 2021
            </h1>
            <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
              Payment Due
            </p>
            <h1 className="font-bold tracking-[-0.25px] dark:text-white text-[15px] mb-[31px]">
              20 Sep 2021
            </h1>
          </div>
          <div>
            <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
              Bill To
            </p>
            <h1 className="font-bold tracking-[-0.25px] dark:text-white text-[15px] mb-[7px]">
              Alex Grim
            </h1>
            <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
              84 Church Way
            </p>
            <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
              Bradford
            </p>
            <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
              BD1 9PB
            </p>
            <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px]">
              United Kingdom
            </p>
          </div>
        </div>
        <div>
          <p className="font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] mb-[13px]">
            Sent to
          </p>
          <h1 className="font-bold tracking-[-0.25px] dark:text-white text-[15px] mb-[7px]">
            alexgrim@mail.com
          </h1>
        </div>
      </div>
      <div>
        <div className="container pt-[33px] pb-[19px] bg-[#F9FAFE] dark:bg-light-dark font-medium text-[13px] text-dark-blue dark:text-hover-white tracking-[-0.1px] rounded-t-lg">
          <div className="mb-[13px] flex justify-between items-center tablet:hidden">
            <p>Item Name</p>
            <div className="flex items-center gap-[92px]">
              <p>QTY.</p>
              <p>Price</p>
              <p>Total</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-[12px] tablet:flex-col tablet:items-start mobile:mx-[15px]">
              <h1 className="font-bold tracking-[-0.25px] text-[15px] dark:text-white text-dark-cite">
                Banner Design
              </h1>
              <div className="flex items-center gap-[63px] tablet:gap-0 tablet:items-start">
                <p className="flex gap-[5px]">
                  1 <span className="hidden tablet:block">x</span>
                  <p className="ml-[80px] tablet:ml-0">£ 15600</p>
                </p>
                <p className="text-dark-cite font-bold text-[15px] dark:text-white tablet:hidden">
                  £ 156.00
                </p>
              </div>
              <p className="text-dark-cite font-bold text-[15px] dark:text-white hidden tablet:block ml-auto mt-[-25px]">
                £ 156.00
              </p>
            </div>
            <div className="flex justify-between items-center tablet:flex-col tablet:items-start mobile:mx-[15px]">
              <h1 className="font-bold tracking-[-0.25px] text-[15px] dark:text-white text-dark-cite">
                Email Design
              </h1>
              <div className="flex items-center gap-[64px]">
                <p className="flex gap-[5px]">
                  1 <span className="hidden tablet:block">x</span>
                  <p className="ml-[80px] tablet:ml-0">£ 15600</p>
                </p>
                <p className="text-dark-cite font-bold text-[15px] dark:text-white tablet:hidden">
                  £ 156.00
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
          <h1 className="font-bold text-[24px] tracking-[-0.5px]">£ 556.00</h1>
        </div>
      </div>
    </div>
  );
}

export default SingleInvoicePage;
