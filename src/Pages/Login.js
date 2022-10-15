import "../App.css";
import Body from "../components/LoginBody";
import { Navigate } from "react-router-dom";
import { useUser } from "../components/UserContext";

function Login() {
  const { loged } = useUser();
  if (loged) {
    return <Navigate to="/" />;
  }
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default Login;
