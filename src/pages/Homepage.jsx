import Sidebar from "../components/Sidebar"

function Homepage() {
  return (
    <section className="flex container">
      <Sidebar />
      <main className="w-[80%] ">
        main
      </main>
    </section>
  )
}

export default Homepage