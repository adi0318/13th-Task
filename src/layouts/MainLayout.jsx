import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800/70 px-4 py-5 text-center text-xs text-slate-500">
        Built for consistent practice and steady progress.
      </footer>
    </div>
  );
}

export default MainLayout;
