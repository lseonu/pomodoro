import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLayout } from "./PageLayout";
import SelectScreen from "./SelectScreen";

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        element: <SelectScreen />,
        path: "/",
      },
    ],
  },
]);

export const RootRouter: React.FC = () => <RouterProvider router={router} />;
