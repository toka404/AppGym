import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

function ProtectedRoute({ children }) {
  const { usuarioLoged } = useUser();

  if (!usuarioLoged) {
    return <Navigate to={"/login"} />;
  }
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
