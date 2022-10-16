import { useNavigate } from "react-router-dom";

function BotonBack() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/");
      }}
    >
      <svg className="btnBack btn" viewBox="0 0 24 29">
        <path className="btnBack_Class" d="M 12 0 L 24 29 L 0 29 Z"></path>
      </svg>
    </button>
  );
}

export default BotonBack;
