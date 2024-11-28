import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskTable from "./components/TaskTable";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:3001/api/tareas")
      .then((response) => response.json())
      .then((data) => setTareas(data.data))
      .catch((error) => console.error("Error al obtener tareas:", error));
  }, []);

  const eliminarTarea = (id) => {
    console.log(`Eliminar tarea con id: ${id}`);
    //TODO
  };

  const editarTarea = (id) => {
    console.log(`Editar tarea con id: ${id}`);
    //TODO
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="task-actions">
          <button className="btn-create">Crear tarea</button>
          <input
            type="text"
            placeholder="Buscar tarea..."
            className="search-bar"
          />
        </div>
        <TaskTable
          tareas={tareas}
          eliminarTarea={eliminarTarea}
          editarTarea={editarTarea}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
