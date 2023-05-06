import NavLink from "../NavLink";
import NavTitle from "../NavTitle";
import DashboardIcon from "../../assets/icons/DashboardSVG";
import UsersIcon from "../../assets/icons/UsersSVG"
import ItemsIcon from "../../assets/icons/ItemsSVG"
import TransactionsIcon from "../../assets/icons/TransactionsSVG"
import AccountIcon from "../../assets/icons/AccountSVG"


function Sidebar() {
  return (
    <aside className="bg-[#ffffff] border-e-[1px] border-greyPrimary xl:w-[20%] lg:w-[30%] pl-10 pt-6 h-[100vh] hidden lg:block">
      <NavTitle />
      <ul className={"mt-20 flex flex-col gap-10"}>
        <li>
          <NavLink
            isActive
            title={"Dashboard"}
            href={"/"}
            icon={<DashboardIcon isActive />}
          />
        </li>
        <li>
          <NavLink title={"Users Management"} icon={<UsersIcon />} />
        </li>
        <li>
          <NavLink title={"Items"} icon={<ItemsIcon />} />
        </li>
        <li>
          <NavLink title={"Transactions"} icon={<TransactionsIcon />} />
        </li>
        <li className={"mt-20 flex flex-col gap-8"}>
          <p className={"text-xl"}>SETTINGS</p>
          <NavLink title={"Account Preferences"} icon={<AccountIcon />} />
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
