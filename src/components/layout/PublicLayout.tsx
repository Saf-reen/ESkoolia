import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "../FloatingButtons";

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

      {/* Floating Buttons */}
      <FloatingButtons />

    </div>
  );
}
