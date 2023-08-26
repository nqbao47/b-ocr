import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-semibold">My App Header</h1>
      </header>
      <main className="flex-grow p-6">
        <div className="bg-white p-10 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to the Homepage
          </h2>
          <p className="text-gray-600 mb-6">
            Explore and manage your departments easily.
          </p>
          <Link
            to="/ocrpage"
            className="block bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600"
          >
            Look up from your invoice here
          </Link>
        </div>
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 MedTech. All rights reserved.</p>
      </footer>
    </div>
  );
}
