import { useState } from "react";
import { CheckCircle2, Clock3, Pencil, Trash2 } from "lucide-react";
import { useQuestions } from "../context/QuestionContext";

function QuestionCard({ question, onEdit }) {
  const { deleteQuestion, updateQuestion } = useQuestions();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const difficultyStyles = {
    Easy: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    Medium: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    Hard: "border-red-400/20 bg-red-400/10 text-red-300",
  };

  const statusStyles = {
    Pending: "border-slate-600 bg-slate-800 text-slate-300",
    "In Progress": "border-blue-400/20 bg-blue-400/10 text-blue-300",
    Completed: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  };

  function handleStatusChange(event) {
    updateQuestion(question.id, {
      status: event.target.value,
    });
  }

  function handleDelete() {
    deleteQuestion(question.id);
    setShowDeleteConfirm(false);
  }

  return (
    <article className="rounded-2xl border border-slate-700/70 bg-linear-to-br from-slate-900/95 to-slate-950/95 p-5 shadow-lg shadow-black/10 transition-colors hover:border-blue-400/30 sm:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-xs font-semibold text-cyan-300">
              {question.category}
            </span>

            <span
              className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${
                difficultyStyles[question.difficulty] ??
                difficultyStyles.Easy
              }`}
            >
              {question.difficulty}
            </span>
          </div>

          <h3 className="wrap-break-word text-base font-semibold leading-6 text-white sm:text-lg">
            {question.title}
          </h3>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-slate-400">
              {question.status === "Completed" ? (
                <CheckCircle2 size={15} className="text-emerald-400" />
              ) : (
                <Clock3 size={15} className="text-cyan-400" />
              )}
              Current status
            </span>

            <select
              aria-label={`Update status for ${question.title}`}
              value={question.status}
              onChange={handleStatusChange}
              className={`max-w-full rounded-lg border px-3 py-2 text-xs font-medium outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 ${
                statusStyles[question.status] ?? statusStyles.Pending
              }`}
            >
              <option value="Pending" className="bg-slate-900 text-white">
                Pending
              </option>
              <option value="In Progress" className="bg-slate-900 text-white">
                In Progress
              </option>
              <option value="Completed" className="bg-slate-900 text-white">
                Completed
              </option>
            </select>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(question)}
            aria-label={`Edit ${question.title}`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-2.5 text-sm font-medium text-slate-300 hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
          >
            <Pencil size={15} />
            <span>Edit</span>
          </button>

          <button
            type="button"
            onClick={() => setShowDeleteConfirm(true)}
            aria-label={`Delete ${question.title}`}
            className="inline-flex items-center justify-center rounded-xl border border-red-400/20 p-2.5 text-red-300 hover:border-red-400/40 hover:bg-red-400/10 focus:outline-none focus:ring-2 focus:ring-red-400/30"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="mt-5 flex flex-col gap-3 rounded-xl border border-red-400/20 bg-red-400/5 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-300">
            Delete this question? This action cannot be undone.
          </p>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(false)}
              className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

export default QuestionCard;
