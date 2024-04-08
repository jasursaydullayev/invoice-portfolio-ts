import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SingleInvoice from "./pages/SingleInvoice";
import Login from "./pages/Login";
import Protected from "./pages/ProtectedRoute";
import SignUp from "./pages/SignUp";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected>
          <MainLayout />
        </Protected>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/invoice/:id",
          element: <SingleInvoice />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);
  return (
      <RouterProvider router={routes} />
  );
}

export default App;
