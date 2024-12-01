import React, { useState } from "react";

function EditModal({ tarea, onClose, onUpdate }) {
  const [titulo, setTitulo] = useState(tarea.titulo);
  const [contenido, setContenido] = useState(tarea.contenido);
  const [estado, setEstado] = useState(tarea.estado);
  const [prioridad, setPrioridad] = useState(tarea.prioridad);

  const handleUpdate = () => {
    const updatedTask = {
      ...tarea,
      titulo,
      contenido,
      estado,
      prioridad,
      fecha_creacion: new Date().toISOString(),
    };
    onUpdate(updatedTask);
    onClose();
  };

  return (
    <div
      className="modal show fade custom-modal-bg"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5 className="modal-title">Editar Tarea</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                className="form-control custom-input"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contenido</label>
              <textarea
                className="form-control custom-input"
                rows="3"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select
                className="form-select custom-input"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="Pendiente">Pendiente</option>
                <option value="En progreso">En progreso</option>
                <option value="Completada">Completada</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Prioridad</label>
              <select
                className="form-select custom-input"
                value={prioridad}
                onChange={(e) => setPrioridad(e.target.value)}
              >
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
