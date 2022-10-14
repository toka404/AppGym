import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

function ProtectedRoute({ children }) {
  const user = useUser();
  console.log(user);

  if (!user.mail) {
    return <Navigate to={"/login"} />;
  }
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
