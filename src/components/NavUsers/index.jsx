import { useState } from "react";
import testUserIcon from "../../assets/test-user.png";
import chevrownDownIcon from "../../assets/chevrown-down.png";

function NavUsers(props) {
  const [pressed, setPressed] = useState(false);
  const showModal = () => {
    setPressed(!pressed);
  };
  return (
    <>
      <div className="flex items-center gap-5 cursor-pointer" onClick={showModal}>
        <p className="font-medium text-base">Admin</p>
        <div className="flex items-center gap-2.5">
          <div
            className="w-[50px] rounded-[12px]"
            style={{ boxShadow: "0px 4px 9px 1px rgba(0, 0, 0, 0.5)" }}
          >
            <img src={testUserIcon} alt="profile" />
          </div>
          <div>
            <img src={chevrownDownIcon} alt="" />
          </div>
        </div>
      </div>
    {pressed && 
    (
    <div className="flex flex-col gap-5 bg-white absolute z-10 md:right-[10%] lg:right-[3%] border-greyPrimary border-[1px] rounded-[12px] p-5">
        <p>Account Preferences</p>
        <p>Sign Out</p>
    </div>
    )}
    </>
  );
}

export default NavUsers;
