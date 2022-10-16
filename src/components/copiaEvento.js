<div className="formFecha_Class">
  <div className="Grupo_820_Class">
    <svg className="Rectngulo_101_">
      <rect
        className="Rectngulo_101__Class"
        rx="9"
        ry="9"
        x="0"
        y="0"
        width="346"
        height="620"
      ></rect>
    </svg>

    {/* titulo del evento */}
    <div className="NameYoga__ClassEventos">
      <span>{informacion.titulo}</span>
    </div>

    {/* Fecha del evento */}
    <div className="Fecha__ClassEventos">
      <span>Fecha:</span>
      <span>{fireBaseTime.toDateString()}</span>
    </div>

    {/* imagen del evento */}
    <div className="imagen_cont">
      <img
        className="evento_class"
        src="images/Eventos/Yoga1.png"
        alt="imagen yoga"
      />
    </div>

    {/* descripcion de la informacion */}
    <div className="Contenido">
      <span>{informacion.descripcion}</span>
      <br />

      {/* informacion precio */}
      <span>Precio:</span>
      <span style={{ fontStyle: "normal", color: "rgba(236,66,36,1)" }}>
        {informacion.precio}
      </span>
      <br />

      {/* informacion profesor */}
      <span>Profesora:</span>
      <span
        style={{
          "fontStyle}": "{normal}",
          "{color}": "{rgba(236,66,36,1)",
        }}
      >
        {informacion.profesor}
      </span>
      <br />

      {/* informacion Hora */}
      <span>Hora:</span>
      <span style={{ fontStyle: "normal", color: "rgba(236,66,36,1)" }}>
        {fireBaseTime.toLocaleTimeString()}
      </span>
    </div>
  </div>
</div>;
