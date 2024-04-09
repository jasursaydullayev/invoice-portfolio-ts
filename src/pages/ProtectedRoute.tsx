import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";

const Protected = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.authStateReady().finally(() => setLoading(false));
  }, [children]);

  if (loading) {
    return (
      <div className="loader z-30 text-white">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  } else {
    if (auth.currentUser) {
      return children;
    }
    return <Navigate to={"/login"} />;
  }
};

export default Protected;
