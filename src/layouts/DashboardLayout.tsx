import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import DashboardSideNav from "../components/Dashboard/DashboardSideNav";

const DashboardLayout = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-2 flex gap-6">
        <section className="shadow-md p-6 bg-slate-200 h-screen w-52">
          <DashboardSideNav />
        </section>
        <section>
          <Outlet />
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
