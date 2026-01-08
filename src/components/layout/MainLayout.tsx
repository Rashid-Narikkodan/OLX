import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full px-3 sm:px-6 py-4 md:py-6">
        {/* Centered container for responsiveness */}
        <div className="w-full mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
