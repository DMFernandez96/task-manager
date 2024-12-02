import React from "react";

function TaskTable({ tareas, eliminarTarea, editarTarea }) {
  return (
    <div>
      {tareas && tareas.length > 0 ? (
        <table className="task-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Contenido</th>
              <th>Estado</th>
              <th>Prioridad</th>
              <th>Fecha de Creación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((tarea) => (
              <tr key={tarea.id_tarea}>
                <td>{tarea.titulo}</td>
                <td>
                  {tarea.contenido.length > 20
                    ? tarea.contenido.slice(0, 20) + "..."
                    : tarea.contenido}
                </td>
                <td>
                  <span>{tarea.estado}</span>
                </td>
                <td>
                  <span>{tarea.prioridad}</span>
                </td>
                <td>{tarea.fecha_creacion}</td>
                <td>
                  <button
                    className="btn-edit"
                    onClick={() => editarTarea(tarea.id_tarea)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => eliminarTarea(tarea.id_tarea)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay tareas. Crea una nueva tarea para que se muestre aquí!</p>
      )}
    </div>
  );
}

export default TaskTable;
