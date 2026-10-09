import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Plus, Pencil, X } from "lucide-react";

import { useQuestions } from "../context/QuestionContext";

function QuestionForm({ editingQuestion, setEditingQuestion }) {
  const { addQuestion, updateQuestion } = useQuestions();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "DSA",
      difficulty: "Easy",
      status: "Pending",
    },
  });

  useEffect(() => {
    if (editingQuestion) {
      reset({
        title: editingQuestion.title,
        category: editingQuestion.category,
        difficulty: editingQuestion.difficulty,
        status: editingQuestion.status,
      });
    } else {
      reset({
        title: "",
        category: "DSA",
        difficulty: "Easy",
        status: "Pending",
      });
    }
  }, [editingQuestion, reset]);

  function onSubmit(data) {
    if (editingQuestion) {
      updateQuestion(editingQuestion.id, data);
      setEditingQuestion(null);
    } else {
      addQuestion(data);
    }

    reset();
  } 

  function handleCancelEdit() {
    setEditingQuestion(null);
    reset();
  }

  const inputStyles =
    "w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20";

  const labelStyles = "mb-2 block text-sm font-medium text-slate-300";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-2xl border border-blue-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-blue-950/70 shadow-xl shadow-black/10"
    >
      {/* Form Header */}
      <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-5 py-5 sm:px-7">
        <div>
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-linear-to-br from-blue-500/20 to-emerald-500/20 text-cyan-400">
            {editingQuestion ? <Pencil size={19} /> : <Plus size={21} />}
          </div>

          <h3 className="text-lg font-semibold text-white">
            {editingQuestion ? "Edit Question" : "Add a Question"}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            {editingQuestion
              ? "Update the details of your interview question."
              : "Build your preparation list one question at a time."}
          </p>
        </div>

        {editingQuestion && (
          <button
            type="button"
            onClick={handleCancelEdit}
            aria-label="Cancel editing"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Form Fields */}
      <div className="space-y-5 p-5 sm:p-7">
        <div>
          <label htmlFor="title" className={labelStyles}>
            Question title <span className="text-emerald-400">*</span>
          </label>

          <input
            id="title"
            type="text"
            placeholder="e.g. Two Sum, Binary Search..."
            {...register("title", {
              required: "Question title is required",
              minLength: {
                value: 3,
                message: "Enter at least 3 characters",
              },
            })}
            aria-invalid={Boolean(errors.title)}
            className={`${inputStyles} ${
              errors.title
                ? "border-red-400 focus:border-red-400 focus:ring-red-400/20"
                : ""
            }`}
          />

          {errors.title && (
            <p className="mt-2 text-xs text-red-400">{errors.title.message}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label htmlFor="category" className={labelStyles}>
              Category
            </label>

            <select
              id="category"
              {...register("category")}
              className={inputStyles}
            >
              <option value="DSA">DSA</option>
              <option value="Technical">Technical</option>
              <option value="Git">Git</option>
            </select>
          </div>

          <div>
            <label htmlFor="difficulty" className={labelStyles}>
              Difficulty
            </label>

            <select
              id="difficulty"
              {...register("difficulty")}
              className={inputStyles}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className={labelStyles}>
              Status
            </label>

            <select id="status" {...register("status")} className={inputStyles}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 border-t border-slate-800 pt-5">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 hover:from-blue-500 hover:to-emerald-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            {editingQuestion ? <Pencil size={17} /> : <Plus size={18} />}

            {editingQuestion ? "Update Question" : "Add Question"}
          </button>

          {editingQuestion && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-300 hover:border-slate-500 hover:bg-slate-800"
            >
              Cancel
            </button>
          )}

          <p className="text-xs text-slate-500">Fields are ready to fill in.</p>
        </div>
      </div>
    </form>
  );
}

export default QuestionForm;
