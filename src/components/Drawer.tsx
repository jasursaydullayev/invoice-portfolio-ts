import { useForm } from "react-hook-form";
import SelectInput from "./SelectInput";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useParams } from "react-router-dom";

type myDataTypes = {
  billFromCity: string;
  billFromCountry: string;
  billFromstreetAddress: string;
  billFromPostCode: string;
  city: string;
  clientsEmail: string;
  clientsName: string;
  country: string;
  invoiceDate: string;
  itemName: string;
  postCode: string;
  price: string;
  projectDescription: string;
  qyt: string;
  streetAddress: string;
};

function Drawer({ edit }: any) {
  const params = useParams();
  const form = useForm<myDataTypes>({
    defaultValues: {
      billFromCity: "",
      billFromCountry: "",
      billFromPostCode: "",
      billFromstreetAddress: "",
      city: "",
      clientsEmail: "",
      clientsName: "",
      country: "",
      invoiceDate: "",
      itemName: "",
      postCode: "",
      price: "",
      projectDescription: "",
      qyt: "",
      streetAddress: "",
    }
  });
  const { register, handleSubmit  } = form;
  const onSubmit = async (data: myDataTypes) => {
    const {
      billFromCity,
      billFromCountry,
      billFromPostCode,
      billFromstreetAddress,
      city,
      clientsEmail,
      clientsName,
      country,
      invoiceDate,
      itemName,
      postCode,
      price,
      projectDescription,
      qyt,
      streetAddress,
    } = data;

    if (data) {
      const ref = await addDoc(collection(db, "invoices"), {
        billFromCity,
        billFromCountry,
        billFromPostCode,
        billFromstreetAddress,
        city,
        clientsEmail,
        clientsName,
        country,
        invoiceDate,
        itemName,
        postCode,
        price,
        projectDescription,
        qyt,
        streetAddress,
      });
      console.log(ref);
    }
  };
  return (
    <div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {params.id ? (
          <label htmlFor="my-drawer">
            <div className="w-[73px] text-center bg-[#F9FAFE] pt-[18px] pb-[15px] font-bold text-light-violet rounded-full text-[15px] tracking-[-0.25px] active:opacity-70">
              {edit}
            </div>
          </label>
        ) : (
          <label
            htmlFor="my-drawer"
            className="dark:text-hover-white w-[150px] py-[8px] rounded-full text-white pl-[8px] bg-dark-blue flex items-center gap-[16px] text-[15px] tracking-[-0.25px] befT:w-[90px] befT:pl-[6px] befT:gap-[8px] active:opacity-80"
          >
            <img src="/svg/plus.svg" alt="plus.svg" width={32} height={32} />
            <div>
              New <span className="befT:hidden">Invoice</span>
            </div>
          </label>
        )}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="dark:text-hover-white close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-full rounded-r-2xl 1285:mt-[80px] befT:mt-[75px ] 1285:pl-[56px] bo:pl-[14px] p-4 max-w-[678px] pl-[139px] pt-[59px] min-h-full bg-white dark:bg-[#141625]  text-base-content">
          <label
            htmlFor="my-drawer"
            aria-label="dark:text-hover-white close sidebar"
            className="drawer-overlay hidden tablet:block mt-[-30px] mb-[10px]"
          >
            <div className="font-bold text-[15px] tracking-[-0.25px] text-dark-cite dark:text-white flex items-center gap-[20px] mb-[21px] cursor-pointer">
              <img src="/svg/left.svg" alt="" />
              Go back
            </div>
          </label>
          <h1 className="font-bold text-[24px] text-dark-cite dark:text-white tracking-[-0.5px] mb-[46px]">
            New Invoice
          </h1>
          <p className="font-bold text-[15px] text-dark-blue tracking-[-0.25px] mb-[24px]">
            Bill From
          </p>

          {/* Form Page */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-[25px]">
              <label
                htmlFor="finp"
                className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
              >
                Street Address
              </label>
              <br />
              <input
                required
                className="w-full mt-[9px] bo:max-w-[327px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="finp"
                {...register("billFromstreetAddress", {
                  required: "Street Address is required",
                })}
              />
            </div>

            <div className="flex items-center gap-[24px] mb-[49px] bo:flex-col bo:items-start">
              <div className="flex items-center gap-[24px]">
                <div>
                  <label
                    htmlFor="seinp"
                    className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                  >
                    City
                  </label>
                  <br />
                  <input
                    required
                    className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                    type="text"
                    id="seinp"
                    {...register("billFromCity")}
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
                    required
                    className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                    type="text"
                    id="tinp"
                    {...register("billFromPostCode")}
                  />
                </div>
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
                  required
                  className="w-full max-w-[152px] bo:min-w-[327px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="foinp"
                  {...register("billFromCountry")}
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
                required
                className="w-full mt-[9px] bo:max-w-[327px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="fiinp"
                {...register("clientsName")}
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
                required
                className="w-full mt-[9px] bo:max-w-[327px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="email"
                id="sinp"
                {...register("clientsEmail")}
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
                required
                className="w-full mt-[9px] bo:max-w-[327px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="sevinp"
                {...register("streetAddress")}
              />
            </div>

            <div className="flex items-center gap-[24px] mb-[49px] bo:flex-col bo:items-start">
              <div className="flex items-center gap-[24px]">
                <div>
                  <label
                    htmlFor="seinp"
                    className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                  >
                    City
                  </label>
                  <br />
                  <input
                    required
                    className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                    type="text"
                    id="seinp"
                    {...register("city")}
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
                    required
                    className="w-full max-w-[152px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                    type="text"
                    id="tinp"
                    {...register("postCode")}
                  />
                </div>
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
                  required
                  className="w-full max-w-[152px] bo:min-w-[327px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="text"
                  id="foinp"
                  {...register("country")}
                />
              </div>
            </div>

            <div className="flex gap-[24px] items-start mb-[25px] bo:flex-col">
              <div>
                <label
                  htmlFor="nineinp"
                  className="dark:text-hover-white font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet"
                >
                  Invoice Date
                </label>
                <br />
                <input
                  required
                  className="w-[200px] bo:min-w-[327px]  mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                  type="date"
                  id="nineinp"
                  {...register("invoiceDate")}
                />
              </div>
              <div>
                <label className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet dark:text-hover-white">
                  Payment Terms
                </label>
                <br />
                <SelectInput register={register} />
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
                required
                className="w-full bo:max-w-[327px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[20px] pr-[15px]"
                type="text"
                id="eighinp"
                {...register("projectDescription")}
              />
            </div>
            <h1 className="font-bold text-[18px] text-[#777F98] tracking-[-0.38px] mb-[14px]">
              Item List
            </h1>
            <div className="flex items-center mb-[18px] justify-between bo:flex-col bo:items-start">
              <div className="flex gap-[16px] bo:flex-col">
                <div className="mb-[18px]">
                  <label
                    aria-required="true"
                    className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet dark:text-hover-white"
                  >
                    Item Name
                  </label>
                  <br />
                  <input
                    required
                    className="w-full max-w-[174px] bo:max-w-full mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[12px] pr-[10px]"
                    type="text"
                    {...register("itemName")}
                  />
                </div>
                <div className="flex gap-[24px] bo:gap-[30px]">
                  <div>
                    <label
                      aria-required="true"
                      className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet dark:text-hover-white"
                    >
                      Qty.
                    </label>
                    <br />
                    <input
                      required
                      className="w-full max-w-[46px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[3px] pr-[3px]"
                      type="number"
                      {...register("qyt")}
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
                      required
                      className="w-full max-w-[100px] mt-[9px] focus:outline-dark-blue dark:bg-[#1E2139] dark:text-white border border-hover-white py-[12px] text-[15px] font-bold text-dark-cite rounded-md pl-[13px] pr-[13px]"
                      type="number"
                      {...register("price")}
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-light-violet mb-[28px] dark:text-hover-white">
                      Total
                    </p>
                    <p className="font-bold text-[15px] tracking-[-0.25px] text-opacity-white dark:text-hover-white mr-[40px] bo:mr-[65px]">
                      0
                    </p>
                  </div>
                  <div className="mt-[44px] cursor-pointer">
                    <img
                      src="/svg/delete.svg"
                      alt=""
                      width={12.44}
                      height={16}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer mb-[39px] font-bold text-[15px] tracking-[-0.25px] text-dark-blue pt-[18px] pb-[15px] bg-[#F9FAFE] w-full rounded-full bo:max-w-[327px] text-center dark:bg-[#252945] dark:text-[#DFE3FA]">
              + Add New Item
            </div>
            <div className="flex items-center justify-between bo:justify-start bo:gap-[7px]">
              <label
                htmlFor="my-drawer"
                aria-label="dark:text-hover-white close sidebar"
                className="font-bold text-[15px] tracking-[-0.25px] text-dark-blue w-[96px] bo:w-[84px] rounded-full py-[17px] text-center bg-[#F9FAFE] opacity-70 dark:opacity-100"
              >
                Discard
              </label>
              <div className="flex gap-[7px]">
              <label
                htmlFor="my-drawer"
                aria-label="dark:text-hover-white close sidebar"
              >
                <div className="font-bold text-[15px] tracking-[-0.25px] text-[#888EB0] w-[133px] bo:w-[117px]  rounded-full py-[16px] text-center bg-[#373B53] dark:text-white">
                Save as Draft
                </div>
              </label>
                
                <button className="font-bold text-[15px] tracking-[-0.25px] text-white w-[128px] bo:w-[112px] rounded-full py-[16px] text-center bg-dark-blue">
                  Save & Send
                </button>
              {params.id ?  <div
            className="cursor-pointer font-bold text-[15px] tracking-[-0.25px] text-white w-[128px] bo:w-[112px] rounded-full py-[16px] text-center bg-dark-blue">
                  Save The Edit
                </div>
                :
                ""}
              </div>
            </div>
          </form>

          {/* Form Page end */}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
