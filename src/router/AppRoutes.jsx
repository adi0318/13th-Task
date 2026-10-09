import { createBrowserRouter } from "react-router";

import DashBoard from "../pages/DashBoard";
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
        element: <DashBoard />,
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