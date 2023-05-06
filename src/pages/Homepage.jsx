import HeaderDashboard from "../parts/HeaderDashboard";
import Sidebar from "../components/Sidebar"

function Homepage() {
  return (
    <section className="flex container mx-auto">
      <Sidebar />
      <main className="xl:w-[80%] w-[100%] flex flex-row items-start justify-between pt-6 px-10">
        <HeaderDashboard />
      </main>
    </section>
  );
}

export default Homepage;
