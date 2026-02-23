import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function PublicLayout() {
  const location = useLocation();
  const isDocsPage = location.pathname === "/docs" || location.pathname.startsWith("/docs/");

  return (
    <div className="flex min-h-screen flex-col">
      {!isDocsPage && <Header />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-16 h-16 bg-[#483285] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform group relative">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-2 stroke-current">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </button>
      </div>
    </div>
  );
}
