function Footer() {
  return (
    <div className="gap-[8px] items-center w-full  justify-center bg-white hidden tablet:flex py-[20px] fixed bottom-0 dark:bg-light-dark-cite">
      <button className="w-[73px] bg-[#F9FAFE] pt-[18px] pb-[15px] font-bold text-light-violet rounded-full text-[15px] tracking-[-0.25px]">
        Edit
      </button>
      <button className="w-[89px] bg-cite-red pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px]">
        Delete
      </button>
      <button className="w-[131px] bg-dark-blue pt-[18px] pb-[15px] font-bold text-white rounded-full text-[15px] tracking-[-0.25px]">
        Mark as Paid
      </button>
    </div>
  );
}

export default Footer;
