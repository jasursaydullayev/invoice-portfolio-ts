function AbsoluteCard() {
  return (
    <div className="bg-white dark:bg-light-dark-cite container shadow rounded-xl flex justify-between tablet:flex-col mb-[17px]">
      <div className="py-[20px] flex items-center gap-[20px] justify-between">
        <p className="font-medium text-opacity-white dark:text-hover-white">
          Status
        </p>
        <button className="flex items-center gap-[8px] text-[#33D69F] w-[124px] pt-[14px] pb-[11px] font-bold rounded-lg bg-[#33D69F] bg-opacity-5 justify-center">
          <img
            src="/svg/green-oval.svg"
            alt="green-oval"
            width={8}
            height={8}
          />
          Paid
        </button>
      </div>
      <div className="flex gap-[8px] items-center tablet:hidden">
        <button className="w-[73px] bg-[#F9FAFE] pt-[18px] pb-[15px] font-bold text-light-violet rounded-full text-[15px] tracking-[-0.25px] active:opacity-70">
          Edit
        </button>

        <label
          htmlFor="my_modal_6"
          className="w-[89px] bg-cite-red pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center"
        >
          Delete
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box pt-[51px] pl-[48px]">
            <h3 className="font-bold text-[24px]">Confirm Deletion</h3>
            <p className="py-4">
              Are you sure you want to delete invoice #XM9141? This action
              cannot be undone.
            </p>
            <div className="modal-action">
            <label
                htmlFor="my_modal_6"
                className="w-[89px] bg-[#F9FAFE] text-dark-blue pt-[18px] pb-[15px] font-bold rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center"
              >
               Cancel
              </label>
              <label
                htmlFor="my_modal_6"
                className="w-[89px] bg-cite-red pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center"
              >
                Delete
              </label>
            </div>
          </div>
        </div>

        <button className="w-[131px] bg-dark-blue pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70">
          Mark as Paid
        </button>
      </div>
    </div>
  );
}

export default AbsoluteCard;
