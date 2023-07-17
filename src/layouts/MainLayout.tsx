import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <section className="pt-2">
        <Outlet />
      </section>
    </main>
  );
}
