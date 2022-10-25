import "../App.css";
import ReservasEventosBody from "../components/ReservasEventosBody";
import Footer from "../components/Footer";

function ReservaEvento() {
  return (
    <div className="App">
      <ReservasEventosBody evento={null} />
      <Footer />
    </div>
  );
}

export default ReservaEvento;
