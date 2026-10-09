import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/AppRoutes";
import { QuestionProvider } from "./context/QuestionContext";

createRoot(document.getElementById("root")).render(
  <QuestionProvider>
    <RouterProvider router={router} />
  </QuestionProvider>
);
