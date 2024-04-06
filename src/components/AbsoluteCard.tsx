import Modal from "./Modal";

function AbsoluteCard({isPending, setIsPending}: any) {
  console.log(isPending);
  
  return (
    <div className="bg-white dark:bg-light-dark-cite container shadow rounded-xl flex justify-between tablet:flex-col mb-[17px]">
      <div className="py-[20px] flex items-center gap-[20px] justify-between">
        <p className="font-medium text-opacity-white dark:text-hover-white">
          Status
        </p>
        {isPending && isPending == 1 ? (
                <button className="flex items-center gap-[8px] text-[#FF8F00] w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg bg-[#FF8F00] bg-opacity-5 justify-center">
                  <img
                    src="/svg/orange-oval.svg"
                    alt="green-oval"
                    width={8}
                    height={8}
                  />
                  Pending
                </button>
              ) : isPending == 2 ? (
                <button className="flex items-center gap-[8px] text-[#33D69F] w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg bg-[#33D69F] bg-opacity-5 justify-center">
                  <img
                    src="/svg/green-oval.svg"
                    alt="black-oval"
                    width={8}
                    height={8}
                  />
                  Paid
                </button>
              ) : isPending == 3 ? (
                <button className="flex items-center gap-[8px] text-[#373B53] w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg bg-[#373B53] bg-opacity-5 justify-center">
                  <img
                    src="/svg/black-oval.svg"
                    alt="green-oval"
                    width={8}
                    height={8}
                  />
                  Draft
                </button>
              ) : (
                ""
              )}
      </div>
      <div className="flex gap-[8px] items-center tablet:hidden">
        <button className="w-[73px] bg-[#F9FAFE] pt-[18px] pb-[15px] font-bold text-light-violet rounded-full text-[15px] tracking-[-0.25px] active:opacity-70">
          Edit
        </button>
        <Modal />
        <button className="w-[131px] bg-dark-blue pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70">
          Mark as Paid
        </button>
      </div>
    </div>
  );
}

export default AbsoluteCard;
