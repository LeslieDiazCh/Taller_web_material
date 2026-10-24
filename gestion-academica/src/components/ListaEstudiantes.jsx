import TarjetaEstudiante from "./TarjetaEstudiante"

export default function ListaEstudiantes({ estudiantes }) {
  return (
    <section className="panel lista">
      <div className="panel-encabezado">
        <h2>Registros</h2>
        <span className="conteo">{estudiantes.length}</span>
      </div>
      {estudiantes.length === 0 ? (
        <p className="vacio">Sin registros</p>
      ) : (
        <ul className="tarjetas">
          {estudiantes.map((estudiante) => (
            <li key={estudiante.id}>
              <TarjetaEstudiante
                nombre={estudiante.nombre}
                carrera={estudiante.carrera}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
