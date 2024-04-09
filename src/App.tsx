import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import SingleInvoice from "./pages/SingleInvoice";
import Login from "./pages/Login";
import Protected from "./pages/ProtectedRoute";
import SignUp from "./pages/SignUp";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const user = auth.currentUser;

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
      element: <>{user ? <Navigate to={"/"} /> : <Login />}</>,
    },
    {
      path: "/signup",
      element: <>{user ? <Navigate to={"/"} /> : <SignUp />}</>,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
