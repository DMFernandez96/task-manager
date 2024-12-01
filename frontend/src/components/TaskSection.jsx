import React from "react";
import TaskTable from "./TaskTable";

function TaskSection({ tareas, eliminarTarea, editarTarea }) {
  return (
    <section className="container my-4">
      <div className="d-flex justify-content-between mb-4">
        <button className="btn btn-primary">Crear tarea</button>
        <input
          type="text"
          placeholder="Buscar tarea..."
          className="form-control w-25"
        />
      </div>
      <TaskTable
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        editarTarea={editarTarea}
      />
    </section>
  );
}

export default TaskSection;
