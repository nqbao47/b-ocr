import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <div className="w-52">
        <Sidebar className="w-52" />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1"></div>
        <Footer />
      </div>
    </div>
  );
}
