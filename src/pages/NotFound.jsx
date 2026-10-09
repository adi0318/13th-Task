import { Link } from "react-router";

function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-6xl font-bold text-slate-200">404</p>

      <h2 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h2>

      <p className="mt-2 text-sm text-slate-500">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-600"
      >
        Back to Dashboard
      </Link>
    </section>
  );
}

export default NotFound;
