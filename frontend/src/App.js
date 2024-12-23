import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/EditModal.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskSection from "./components/TaskSection";
import EditModal from "./components/EditModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import CreateTaskModal from "./components/CreateTaskModal";

function App() {
  const [tareas, setTareas] = useState([]);
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);
  const [tareaEliminar, setTareaEliminar] = useState(null);
  const [mostrarModalCrear, setMostrarModalCrear] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/api/tareas")
      .then((response) => response.json())
      .then((data) => setTareas(data))
      .catch((error) => console.error("Error al obtener tareas:", error));
  }, []);

  const crearTarea = (nuevaTarea) => {
    console.log("Datos enviados al servidor:", nuevaTarea);
    fetch("http://localhost:3001/api/tareas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaTarea), 
    })
      .then((response) => response.json())
      .then(() => {
        fetch("http://localhost:3001/api/tareas")
          .then((response) => response.json())
          .then((data) => {
            console.log("Tareas actualizadas:", data);
            setTareas(data); 
            setMostrarModalCrear(false); 
          })
          .catch((error) => console.error("Error al obtener tareas:", error));
      })
      .catch((error) => console.error("Error al crear tarea:", error));
  };


  const eliminarTarea = (id) => {
    const tarea = tareas.find((t) => t.id_tarea === id);
    setTareaEliminar(tarea);
  };

  const confirmarEliminacion = (id) => {
    console.log(`Tarea con ID ${id} eliminada`);
    setTareas(tareas.filter((t) => t.id_tarea !== id));
    setTareaEliminar(null);
  };

  const editarTarea = (id) => {
    const tarea = tareas.find((t) => t.id_tarea === id);
    setTareaSeleccionada(tarea);
  };

  const actualizarTarea = (tareaActualizada) => {
    setTareas((prevTareas) =>
      prevTareas.map((t) =>
        t.id_tarea === tareaActualizada.id_tarea ? tareaActualizada : t
      )
    );
    setTareaSeleccionada(null);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <TaskSection
          tareas={tareas}
          eliminarTarea={eliminarTarea}
          editarTarea={editarTarea}
          setMostrarModalCrear={setMostrarModalCrear}
        />
      </main>
      <Footer />

      {tareaSeleccionada && (
        <EditModal
          tarea={tareaSeleccionada}
          onClose={() => setTareaSeleccionada(null)}
          onUpdate={actualizarTarea}
        />
      )}

      {tareaEliminar && (
        <ConfirmDeleteModal
          tarea={tareaEliminar}
          onClose={() => setTareaEliminar(null)}
          onConfirm={confirmarEliminacion}
        />
      )}

      {mostrarModalCrear && (
        <CreateTaskModal
          onClose={() => setMostrarModalCrear(false)}
          onCreate={crearTarea}
        />
      )}
    </div>
  );
}

export default App;
