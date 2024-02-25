import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLayout } from "./PageLayout";
import { HomeScreen } from "./pages/HomeScreen";
import { Timer } from "./pages/Timer";
import { SubjectList } from "./pages/SubjectList";

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        element: <HomeScreen />,
        path: "/",
      },
      {
        element: <Timer />,
        path: "/Timer",
      },
      {
        element: <SubjectList />,
        path: "/SubjectList",
      },
    ],
  },
]);

export const RootRouter: React.FC = () => <RouterProvider router={router} />;
