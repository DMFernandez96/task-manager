import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import TaskSection from "./TaskSection";

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
  };

  const editarTarea = (id) => {
    console.log(`Editar tarea con id: ${id}`);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <TaskSection
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
