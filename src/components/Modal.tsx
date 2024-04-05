function Modal() {
  return (
    <>
      <label
        htmlFor="my_modal_6"
        className="w-[89px] bg-cite-red pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center"
      >
        Delete
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white dark:bg-light-dark-cite dark:text-white pt-[51px] pl-[48px]">
          <h3 className="font-bold text-[24px]">Confirm Deletion</h3>
          <p className="py-4 dark:text-hover-white">
            Are you sure you want to delete invoice #XM9141? This action cannot
            be undone.
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
    </>
  );
}

export default Modal;