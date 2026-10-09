function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="group rounded-2xl border border-slate-700/70 bg-linear-to-br from-slate-900/95 to-slate-950/95 p-5 shadow-lg shadow-black/10 transition hover:border-blue-400/30">
      <div className="flex items-center justify-between">
        <p className="text-sm text-white">{title}</p>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500/15 to-emerald-500/15 text-cyan-400">
          <Icon size={19} />
        </div>
      </div>

      <h3 className="mt-4 text-3xl font-bold text-white">{value}</h3>
    </div>
  );
}

export default StatCard;
