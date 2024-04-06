import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SingleInvoice from "./pages/SingleInvoice";
import Login from "./pages/Login";
import Protected from "./pages/ProtectedRoute";

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
  ]);
  return (
    <div className="flex h-full 1285:flex-col 1285:w-full">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
