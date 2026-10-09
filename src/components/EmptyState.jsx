import { NavLink } from "react-router";
import { ClipboardList, Plus, ArrowRight } from "lucide-react";

function EmptyState() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-dashed border-blue-400/30 bg-linear-to-br from-slate-900 via-blue-950/40 to-emerald-950/30 px-5 py-14 text-center sm:px-8">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-linear-to-br from-blue-500/15 to-emerald-500/15 text-cyan-300">
        <ClipboardList size={30} />
      </div>

      <h3 className="relative mt-5 text-lg font-semibold text-white">
        Your practice journey starts here
      </h3>

      <p className="relative mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
        You haven't added any questions yet. Start building your interview
        preparation list and track your progress as you learn.
      </p>

      <NavLink
        to="/questions"
        className="relative mt-6 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 hover:from-blue-500 hover:to-emerald-400"
      >
        <Plus size={17} />
        Start Practicing
        <ArrowRight size={16} />
      </NavLink>
    </div>
  );
}

export default EmptyState;

