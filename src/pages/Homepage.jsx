import HeaderDashboard from "../parts/Homepage/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import ItemsSVG from "../assets/icons/ItemsSVG";
import UsersSVG from "../assets/icons/UsersSVG";
import TransactionsSVG from "../assets/icons/TransactionsSVG";
import CardTable from "../components/CardTable";
import TableTransactionDashboard from "../components/TableTransactionsDashboard";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

function Homepage() {
  const navigation = useNavigate();

  const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
  useEffect(() => {
    if (!token) {
      return navigation("/login");
    } else {
      return;
    }
  }, [token]);
  return (
    <section className="flex container mx-auto">
      <Sidebar />
      <main className="xl:w-[80%] w-[100%] h-screen overflow-y-scroll   pt-6 px-10">
        <HeaderDashboard />
        <div className="mt-10 flex gap-6 flex-wrap justify-center">
          <Card title={"Products"} value={25} icon={<ItemsSVG isActive />} />
          <Card title={"Users"} value={70} icon={<UsersSVG isActive />} />
          <Card
            title={"Benefit"}
            value={"Rp25.830.000"}
            icon={<TransactionsSVG isActive />}
          />
        </div>
        <div className="flex mt-10 flex-col gap-10 mb-10">
          <h2 className="text-2xl ">Latest Transactions</h2>
          <CardTable>
            <TableTransactionDashboard />
          </CardTable>
        </div>
      </main>
    </section>
  );
}

export default Homepage;
