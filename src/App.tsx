import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SingleInvoice from "./pages/SingleInvoice";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
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
  ]);
  return (
    <div className="flex h-full 1285:flex-col 1285:w-full 1285:h-[80px]">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
