import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { PageLayout } from "./PageLayout"
import { Home } from "./pages/Home"
import { Recipe } from "./pages/Recipe"
import { ShoppingCart } from "./pages/ShoppingCart"

const router = createBrowserRouter([
	{
		element: <PageLayout />,
		children: [
			{
				element: <Home />,
				path: "/",
			},
			{
				element: <Recipe />,
				path: "/recipe",
			},
			{
				element: <ShoppingCart />,
				path: "/cart",
			}
		],
	},
])

export const RootRouter: React.FC = () => <RouterProvider router={router} />
