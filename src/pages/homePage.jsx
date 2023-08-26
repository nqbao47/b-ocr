import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <navigator>
        <h1 className="text-xl text-white font-semibold bg-[#9f938a]">
          Nav bar ...
        </h1>
      </navigator>
      <header className=" text-white p-4">
        <div className="flex-grow p-6">
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <h2 className="text-3xl font-semibold mb-4">
              <p className="text-[#00000094]">Welcome to</p>
              <span className="font-bold text-5xl text-[#9f938a] ">
                MedTech
              </span>
            </h2>
            <p className="text-gray-600 mb-6">
              Look up and extract through your invoice to find any medicine.
            </p>
            <Link
              to="/ocrpage"
              className=" bg-[#9f938a] text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-300"
            >
              Look up from your invoice here
            </Link>
          </div>
        </div>
      </header>

      <main>
        <p>Infomation about ...</p>
      </main>

      <footer className="bg-gray-200 p-4 text-center mt-auto">
        <p>&copy; 2023 MedTech. All rights reserved.</p>
      </footer>
    </div>
  );
}
