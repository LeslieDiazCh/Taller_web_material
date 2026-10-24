import { useState } from "react"
import FormularioEstudiante from "./components/FormularioEstudiante"
import ListaEstudiantes from "./components/ListaEstudiantes"

export default function App() {
  const [estudiantes, setEstudiantes] = useState([])

  function registrarEstudiante(datos) {
    setEstudiantes((actuales) => [
      ...actuales,
      {
        id: crypto.randomUUID(),
        nombre: datos.nombre,
        carrera: datos.carrera,
      },
    ])
  }

  return (
    <div className="pagina">
      <header className="encabezado">
        <div className="encabezado-interno">
          <p className="sobre">Gestión académica</p>
          <h1>Estudiantes</h1>
        </div>
      </header>
      <main className="contenido">
        <FormularioEstudiante onRegistrar={registrarEstudiante} />
        <ListaEstudiantes estudiantes={estudiantes} />
      </main>
    </div>
  )
}
