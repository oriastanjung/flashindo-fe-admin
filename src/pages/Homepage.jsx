import HeaderDashboard from "../parts/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import ItemsSVG from "../assets/icons/ItemsSVG";
import UsersSVG from "../assets/icons/UsersSVG";
import TransactionsSVG from "../assets/icons/TransactionsSVG";

function Homepage() {
  return (
    <section className="flex container mx-auto">
      <Sidebar />
      <main className="xl:w-[80%] w-[100%]  pt-6 px-10">
        <HeaderDashboard />
        <div className="mt-14 flex gap-6">
          <Card title={"Items"} value={25} icon={<ItemsSVG isActive />}/>
          <Card title={"Users"} value={70} icon={<UsersSVG isActive />}/>
          <Card title={"Benefit"} value={"Rp25.830.000"} icon={<TransactionsSVG isActive />}/>
        </div>
      </main>
    </section>
  );
}

export default Homepage;
