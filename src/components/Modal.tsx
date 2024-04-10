import { Link, useParams } from "react-router-dom";

function Modal({ deleteCurrentDoc }: any) {
  const handleDelete = () => {
    deleteCurrentDoc()
  }
  const params = useParams();
  return (
    <>
      <label
        htmlFor="my_modal_6"
        className="w-[89px] bg-cite-red pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center mobile:pt-[14px] mobile:pb-[12px]"
      >
        Delete
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white dark:bg-light-dark-cite dark:text-white pt-[51px] pl-[48px]">
          <h3 className="font-bold text-[24px]">Confirm Deletion</h3>
          <p className="py-4 dark:text-hover-white">
            Are you sure you want to delete invoice #{params.id}? This action
            cannot be undone.
          </p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="w-[89px] bg-[#F9FAFE] text-dark-blue pt-[18px] pb-[15px] font-bold rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center mobile:pt-[14px] mobile:pb-[9px]"
            >
              Cancel
            </label>
            <Link to={"/"}>
              <label htmlFor="my_modal_6" onClick={handleDelete}>
                <button className="w-[89px] bg-cite-red flex justify-center items-center font-bold text-white rounded-full text-[15px] tracking-[-0.25px] active:opacity-70 text-center h-[56px] mobile:h-[51px]">
                  Delete
                </button>
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
