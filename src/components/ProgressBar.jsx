function ProgressBar({ value }) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-emerald-400 shadow-sm shadow-cyan-500/20 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default ProgressBar;
