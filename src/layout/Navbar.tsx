import { Link } from "react-router-dom";
import useDarkMode from "use-react-dark-mode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Navbar() {
  const { isDark, toggle } = useDarkMode();
  return (
    <div className="h-full bg-[#373B53] dark:bg-light-dark-cite rounded-tr-3xl rounded-br-3xl flex flex-col items-center justify-between 1285:rounded-none 1285:flex-row 1285:mb-[-32px] befT:h-[72px]">
      <Link to={"/"}>
        <img
          className="cursor-pointer 1285:h-[80px] 1285:ml-[-11px] befT:max-h-[72px] befT:w-[90px]"
          src="/svg/cite-logo.svg"
          alt="cite-logo.svg"
          width={103}
          height={103}
        />
        <img
          className="absolute top-[32px] left-[30px] 1285:w-[31px] 1285:h-[30.76px] 1285:top-[25px] 1285:left-[23px] befT:left-[18px] befT:top-[22px] mobile:w-[28px] mobile:h-[26px]"
          src="/svg/cite-svg-logo.svg"
          alt="cite-svg-logo"
          width={40}
          height={37.71}
        />
      </Link>
      <div className="flex flex-col justify-center min-w-full 1285:flex-row 1285:min-w-0 1285:gap-[32px]">
        {isDark ? (
          <div
            className="mb-[42px] mx-auto 1285:my-auto opacity-70"
            onClick={toggle}
          >
            <LightModeIcon style={{ color: "white" }} />
          </div>
        ) : (
          <img
            onClick={toggle}
            className="mb-[42px] mx-auto 1285:my-auto"
            src="/svg/moon.svg"
            alt="moon-img"
            width={19.99}
            height={19.99}
          />
        )}
        <div className="min-h-full w-[1px] bg-[#494E6E] my-[-20px] hidden 1285:block befT:my-[-15px]"></div>
        <div className="mb-[24px] 1285:mb-0 1285:mr-[32px]">
          <hr className="w-full h-[1px] opacity-20 bg-[#494E6E] mb-[24px] 1285:hidden" />
          <img
            className="mx-auto 1285:my-auto"
            src="/svg/man.svg"
            alt="man-img"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
