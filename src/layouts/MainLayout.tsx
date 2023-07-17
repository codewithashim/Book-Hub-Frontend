import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <main>
      <Navbar />
      <section className="py-2 mb-4">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
