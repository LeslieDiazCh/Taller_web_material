import { useState } from "react"

export default function FormularioEstudiante({ onRegistrar }) {
  const [nombre, setNombre] = useState("")
  const [carrera, setCarrera] = useState("")
  const [error, setError] = useState("")

  function manejarEnvio(event) {
    event.preventDefault()

    const nombreLimpio = nombre.trim()
    const carreraLimpia = carrera.trim()

    if (!nombreLimpio || !carreraLimpia) {
      setError("Completa el nombre y la carrera.")
      return
    }

    onRegistrar({
      nombre: nombreLimpio,
      carrera: carreraLimpia,
    })

    setNombre("")
    setCarrera("")
    setError("")
  }

  return (
    <section className="panel formulario">
      <h2>Nuevo registro</h2>
      <form onSubmit={manejarEnvio}>
        <label className="campo">
          <span>Nombre</span>
          <input
            type="text"
            name="nombre"
            value={nombre}
            maxLength={80}
            autoComplete="name"
            onChange={(event) => {
              setNombre(event.target.value)
              if (error) setError("")
            }}
          />
        </label>
        <label className="campo">
          <span>Carrera</span>
          <input
            type="text"
            name="carrera"
            value={carrera}
            maxLength={80}
            autoComplete="off"
            onChange={(event) => {
              setCarrera(event.target.value)
              if (error) setError("")
            }}
          />
        </label>
        {error ? <p className="error">{error}</p> : null}
        <button type="submit">Registrar</button>
      </form>
    </section>
  )
}
