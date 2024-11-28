import React from "react";
import TaskTable from "./TaskTable";

function TaskSection({ tareas, eliminarTarea, editarTarea }) {
  return (
    <div className="task-section">
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
    </div>
  );
}

export default TaskSection;
