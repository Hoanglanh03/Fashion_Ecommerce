import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ErrorNotFound from "./pages/ErrorNotFound/ErrorNotFound";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorNotFound />,
    },
    {
      path: "/cart",
      element: <CartPage />,
      errorElement: <ErrorNotFound />,
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorNotFound />,
    },
    {
      path: "/product",
      element: <ProductPage />,
      errorElement: <ErrorNotFound />,
    },
    {
      path: "/shop",
      element: <ShopPage />,
      errorElement: <ErrorNotFound />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
      errorElement: <ErrorNotFound />,
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
      errorElement: <ErrorNotFound />,
    },
  ]);

  return (
    <div>
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
