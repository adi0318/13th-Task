import { Search, SlidersHorizontal, X } from "lucide-react";

function SearchFilters({
  search,
  setSearch,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  status,
  setStatus,
  clearFilters,
}) {
  const selectStyles =
    "w-full rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-3 text-sm text-slate-200 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20";

  const hasFilters =
    search !== "" ||
    category !== "All" ||
    difficulty !== "All" ||
    status !== "All";

  return (
    <div className="rounded-2xl border border-blue-400/20 bg-linear-to-br from-slate-900/95 to-slate-950/95 p-5 shadow-lg shadow-black/10 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400">
            <SlidersHorizontal size={18} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Search & Filters
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Narrow down your question list.
            </p>
          </div>
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            <X size={14} />
            Clear filters
          </button>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Search */}
        <div className="sm:col-span-2 lg:col-span-1">
          <label
            htmlFor="question-search"
            className="mb-2 block text-xs font-medium text-slate-400"
          >
            Search questions
          </label>

          <div className="relative">
            <Search
              size={17}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              id="question-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by title..."
              className="w-full rounded-xl border border-slate-700 bg-slate-950/70 py-3 pl-10 pr-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="filter-category"
            className="mb-2 block text-xs font-medium text-slate-400"
          >
            Category
          </label>

          <select
            id="filter-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className={selectStyles}
          >
            <option value="All">All categories</option>
            <option value="DSA">DSA</option>
            <option value="Technical">Technical</option>
            <option value="Git">Git</option>
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label
            htmlFor="filter-difficulty"
            className="mb-2 block text-xs font-medium text-slate-400"
          >
            Difficulty
          </label>

          <select
            id="filter-difficulty"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
            className={selectStyles}
          >
            <option value="All">All difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="filter-status"
            className="mb-2 block text-xs font-medium text-slate-400"
          >
            Status
          </label>

          <select
            id="filter-status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className={selectStyles}
          >
            <option value="All">All statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchFilters;
