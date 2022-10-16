import React from "react";

function AlimentoCalendarioBody() {
  return (
    <>
      <div className="main-container">
        <svg className="CalendarioAli" viewBox="0 0 429 926">
          <path
            id="CalendarioAli"
            d="M 0 0 L 429 0 L 429 926 L 0 926 L 0 0 Z"
          ></path>
        </svg>

        <svg className="Polgono_1_gz btn" viewBox="0 0 24 29">
          <path id="Polgono_1_gz" d="M 12 0 L 24 29 L 0 29 Z"></path>
        </svg>
        <section id="features">
          <div className="section-content">
            <p className="section-title --lng">Aliméntate de Forma Saludable</p>
          </div>
        </section>
        <section id="demos">
          <div className="section-content">
            <div className="console-log">
              <div className="log-content">
                <div className="--noshadow" id="demoEvoCalendar"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="./evo-calendar.min.js"></script>
      <script src="./demo.js"></script>
    </>
  );
}
export default AlimentoCalendarioBody;
