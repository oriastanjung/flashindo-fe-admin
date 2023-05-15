import NavLink from "../NavLink";
import NavTitle from "../NavTitle";
import DashboardIcon from "../../assets/icons/DashboardSVG";
import UsersIcon from "../../assets/icons/UsersSVG";
import ItemsIcon from "../../assets/icons/ItemsSVG";
import TransactionsIcon from "../../assets/icons/TransactionsSVG";
import AccountIcon from "../../assets/icons/AccountSVG";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const urlPathActive = location.pathname.slice(1);
  const checkIsActive = (urlCheck) => {
    if (urlPathActive === urlCheck) {
      return true;
    }
  };
  return (
    <aside className="bg-[#ffffff] border-e-[1px] border-greyPrimary xl:w-[20%] lg:w-[30%] pl-10 pt-6 h-[100vh] hidden lg:block">
      <NavTitle />
      <ul className={"mt-20 flex flex-col gap-10"}>
        <li>
          <NavLink
            isActive={checkIsActive("")}
            title={"Dashboard"}
            href={"/"}
            icon={<DashboardIcon isActive={checkIsActive("")} />}
          />
        </li>
        <li>
          <NavLink
            isActive={checkIsActive("users")}
            title={"Users Management"}
            icon={<UsersIcon isActive={checkIsActive("users")} />}
            href={"/users"}
          />
        </li>
        <li>
          <NavLink
            isActive={checkIsActive("items")}
            title={"Items"}
            icon={<ItemsIcon isActive={checkIsActive("items")}/>}
          />
        </li>
        <li>
          <NavLink
            isActive={checkIsActive("transactions")}
            title={"Transactions"}
            icon={<TransactionsIcon isActive={checkIsActive("transactions")} />}
          />
        </li>
        <li className={"mt-20 flex flex-col gap-8"}>
          <p className={"text-xl"}>SETTINGS</p>
          <NavLink
            isActive={checkIsActive("account")}
            title={"Account Preferences"}
            icon={<AccountIcon isActive={checkIsActive("account")} />}
          />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
