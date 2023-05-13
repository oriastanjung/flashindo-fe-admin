import HeaderDashboard from "../parts/HeaderDashboard";
import Sidebar from "../components/Sidebar";

function Users() {
  return (
    <section className="flex container mx-auto">
      <Sidebar />
      <main className="xl:w-[80%] w-[100%] h-[100vh] overflow-y-scroll   pt-6 px-10">
        <HeaderDashboard />
        
      </main>
    </section>
  );
}

export default Users;
