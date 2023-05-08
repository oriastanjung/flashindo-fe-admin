import HeaderDashboard from "../parts/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import ItemsSVG from "../assets/icons/ItemsSVG";
import UsersSVG from "../assets/icons/UsersSVG";
import TransactionsSVG from "../assets/icons/TransactionsSVG";
import CardTable from "../components/CardTable";

function Homepage() {
  return (
    <section className="flex container mx-auto">
      <Sidebar />
      <main className="xl:w-[80%] w-[100%] h-[100vh] overflow-y-scroll   pt-6 px-10">
        <HeaderDashboard />
        <div className="mt-10 flex gap-6">
          <Card title={"Items"} value={25} icon={<ItemsSVG isActive />} />
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
            table disini
          </CardTable>
        </div>
      </main>
    </section>
  );
}

export default Homepage;
