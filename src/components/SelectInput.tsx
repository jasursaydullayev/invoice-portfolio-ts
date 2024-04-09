export default function SelectInput({register}: any) {
  return (
   <>
  <select id="large" className="w-full mt-[9px] bo:max-w-[327px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[15.7px] text-[15px] font-bold text-dark-cite rounded-md pl-[25px] flex items-center justify-between pr-[60px]"
   {...register("paymentTerms")}
  >
    <option className="font-bold text-[15px]" selected>Next 30 Days</option>
    <option className="font-bold text-[15px]" value="1">Next 1 Day</option>
    <option className="font-bold text-[15px]" value="7">Next 7 Days</option>
    <option className="font-bold text-[15px]" value="14">Next 14 Days</option>
    <option className="font-bold text-[15px]" value="30">Next 30 Days</option>
  </select>
  </>
  );
}
