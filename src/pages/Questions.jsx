import { useMemo, useState } from "react";
import { ListPlus } from "lucide-react";

import QuestionForm from "../components/QuestionForm";
import QuestionCard from "../components/QuestionCard";
import SearchFilters from "../components/SearchFilters";
import EmptyState from "../components/EmptyState";

import { useQuestions } from "../context/QuestionContext";

function Questions() {
  const { questions } = useQuestions();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [status, setStatus] = useState("All");

  const [editingQuestion, setEditingQuestion] = useState(null);

  const filteredQuestions = useMemo(() => {
    return questions.filter((question) => {
      const matchesSearch = question.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || question.category === category;

      const matchesDifficulty =
        difficulty === "All" || question.difficulty === difficulty;

      const matchesStatus = status === "All" || question.status === status;

      return (
        matchesSearch && matchesCategory && matchesDifficulty && matchesStatus
      );
    });
  }, [questions, search, category, difficulty, status]);

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setDifficulty("All");
    setStatus("All");
  }

  return (
    <section>
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
          Practice
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Question Tracker
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Add, organize, search, and track your interview questions in one
              place.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-300">
            <ListPlus size={17} />

            <span>
              {questions.length}{" "}
              {questions.length === 1 ? "Question" : "Questions"}
            </span>
          </div>
        </div>
      </div>

      {/* Form */}
      <QuestionForm
        editingQuestion={editingQuestion}
        setEditingQuestion={setEditingQuestion}
      />

      {/* Filters */}
      {questions.length > 0 && (
        <div className="mt-6">
          <SearchFilters
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            status={status}
            setStatus={setStatus}
            clearFilters={clearFilters}
          />
        </div>
      )}

      {/* Questions */}
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Your Questions</h3>

            {questions.length > 0 && (
              <p className="mt-1 text-sm text-slate-400">
                Showing {filteredQuestions.length} of {questions.length}
              </p>
            )}
          </div>
        </div>

        {questions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/80">
            <EmptyState />
          </div>
        ) : filteredQuestions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/80 px-6 py-14 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
              <ListPlus size={22} className="text-blue-400" />
            </div>

            <h3 className="mt-4 font-semibold text-white">
              No questions found
            </h3>

            <p className="mx-auto mt-1 max-w-sm text-sm text-slate-400">
              No questions match your current search and filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-blue-500/40 hover:bg-slate-700"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                onEdit={setEditingQuestion}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Questions;
