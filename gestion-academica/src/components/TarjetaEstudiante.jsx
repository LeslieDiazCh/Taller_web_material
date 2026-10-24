export default function TarjetaEstudiante({ nombre, carrera }) {
  return (
    <article className="tarjeta">
      <h3>{nombre}</h3>
      <p>{carrera}</p>
    </article>
  )
}
