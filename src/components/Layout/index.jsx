import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex">
      <div className="w-52">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1"></div>
        <Footer />
      </div>
    </div>
  );
}
