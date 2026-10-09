import { NavLink } from "react-router";
import { BrainCircuit, LayoutDashboard, ClipboardList } from "lucide-react";

function Navbar() {
  const navLinkStyles = ({ isActive }) =>
    `inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
      isActive
        ? "border border-cyan-400/20 bg-gradient-to-r from-blue-500/15 to-emerald-500/15 text-cyan-300"
        : "border border-transparent text-slate-400 hover:bg-slate-800/70 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-700/60 bg-slate-950/80 shadow-lg shadow-black/10 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <NavLink to="/" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-emerald-400 text-white shadow-lg shadow-blue-950/30">
            <BrainCircuit size={22} />
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-base font-bold tracking-tight text-white sm:text-lg">
              Interview Prep
            </h1>
            <p className="hidden text-xs text-slate-400 sm:block">
              Track your progress, one question at a time
            </p>
          </div>
        </NavLink>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <NavLink to="/" end className={navLinkStyles}>
            <LayoutDashboard size={17} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/questions" className={navLinkStyles}>
            <ClipboardList size={17} />
            <span>Questions</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
