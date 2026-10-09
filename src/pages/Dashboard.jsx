import { useMemo } from "react";
import { NavLink } from "react-router";
import {
  ListChecks,
  CheckCircle2,
  Clock3,
  CircleDot,
  ArrowRight,
} from "lucide-react";

import { useQuestions } from "../context/QuestionContext";
import ProgressBar from "../components/ProgressBar";
import StatCard from "../components/StatCard";

function Dashboard() {
  const { questions } = useQuestions();

  const stats = useMemo(() => {
    const total = questions.length;

    const completed = questions.filter(
      (question) => question.status === "Completed"
    ).length;

    const inProgress = questions.filter(
      (question) => question.status === "In Progress"
    ).length;

    const pending = questions.filter(
      (question) => question.status === "Pending"
    ).length;

    const completionPercentage =
      total === 0 ? 0 : Math.round((completed / total) * 100);

    const categories = ["DSA", "Technical", "Git"];

    const categoryProgress = categories.map((category) => {
      const categoryQuestions = questions.filter(
        (question) => question.category === category
      );

      const categoryCompleted = categoryQuestions.filter(
        (question) => question.status === "Completed"
      ).length;

      const percentage =
        categoryQuestions.length === 0
          ? 0
          : Math.round((categoryCompleted / categoryQuestions.length) * 100);

      return {
        category,
        total: categoryQuestions.length,
        completed: categoryCompleted,
        percentage,
      };
    });

    return {
      total,
      completed,
      inProgress,
      pending,
      completionPercentage,
      categoryProgress,
    };
  }, [questions]);

  const recentQuestions = questions.slice(-5).reverse();

  return (
    <section>
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
          Overview
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Interview Practice Dashboard
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Track your preparation, monitor your progress, and stay consistent
              with your interview practice.
            </p>
          </div>

          <NavLink
            to="/questions"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:from-blue-500 hover:to-emerald-400"
          >
            Manage Questions
            <ArrowRight size={17} />
          </NavLink>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Questions"
          value={stats.total}
          icon={ListChecks}
        />

        <StatCard
          title="Completed"
          value={stats.completed}
          icon={CheckCircle2}
        />

        <StatCard title="In Progress" value={stats.inProgress} icon={Clock3} />

        <StatCard title="Pending" value={stats.pending} icon={CircleDot} />
      </div>

      {/* Progress */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Overall */}
        <div className="rounded-2xl border border-blue-400/20 bg-linear-to-br from-slate-900/90 via-blue-950/80 to-slate-900/90 p-6 shadow-xl shadow-black/10 backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white">Overall Progress</h3>

              <p className="mt-1 text-sm text-slate-400">
                Your completed interview questions
              </p>
            </div>

            <span className="text-3xl font-bold text-cyan-400">
              {stats.completionPercentage}%
            </span>
          </div>

          <div className="mt-7">
            <ProgressBar value={stats.completionPercentage} />
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-slate-400">
              {stats.completed} of {stats.total} completed
            </span>

            <span className="text-emerald-400">
              {stats.total === 0
                ? "Start practicing"
                : stats.completionPercentage >= 75
                  ? "Excellent progress"
                  : "Keep going"}
            </span>
          </div>
        </div>

        {/* Category Progress */}
        <div className="rounded-2xl border border-emerald-400/20 bg-linear-to-br from-slate-900/90 via-emerald-950/50 to-slate-900/90 p-6 shadow-xl shadow-black/10 backdrop-blur">
          <div>
            <h3 className="font-semibold text-white">Category Progress</h3>

            <p className="mt-1 text-sm text-slate-400">
              Track your preparation by category
            </p>
          </div>

          <div className="mt-7 space-y-6">
            {stats.categoryProgress.map((item) => (
              <div key={item.category}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-200">
                    {item.category}
                  </span>

                  <span className="text-xs text-slate-400">
                    {item.total === 0
                      ? "No questions"
                      : `${item.completed}/${item.total} completed`}
                  </span>
                </div>

                <ProgressBar value={item.percentage} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Questions */}
      <div className="mt-6 rounded-2xl border border-blue-400/20 bg-linear-to-br from-slate-900/95 via-slate-900/90 to-blue-950/70 p-6 shadow-xl shadow-black/10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white">Recent Questions</h3>

            <p className="mt-1 text-sm text-slate-400">
              Your latest interview questions
            </p>
          </div>

          <NavLink
            to="/questions"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            View all
          </NavLink>
        </div>

        {recentQuestions.length === 0 ? (
          <div className="py-12 text-center">
            <ListChecks size={32} className="mx-auto text-slate-600" />

            <p className="mt-3 text-sm font-medium text-white">
              No questions yet
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Add your first question to start tracking.
            </p>
          </div>
        ) : (
          <div className="mt-5 divide-y divide-slate-800">
            {recentQuestions.map((question) => (
              <div
                key={question.id}
                className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
              >
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-medium text-white">
                    {question.title}
                  </h4>

                  <p className="mt-1 text-xs text-slate-500">
                    {question.category} · {question.status}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  {question.difficulty}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
