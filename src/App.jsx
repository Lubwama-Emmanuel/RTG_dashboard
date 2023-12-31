import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import { getLaptops } from "../helpers/Loaders";

// Entry
export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
          // loader: getLaptops,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}
