import { createBrowserRouter } from "react-router";

import Dashboard from "../pages/DashBoard";
import Questions from "../pages/Questions";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "questions",
        element: <Questions />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;