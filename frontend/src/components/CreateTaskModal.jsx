import React, { useState } from "react";

function CreateTaskModal({ onClose, onCreate }) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [estado, setEstado] = useState("1"); //por hacer
  const [prioridad, setPrioridad] = useState("1"); //baja

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      titulo,
      contenido,
      id_estado: parseInt(estado),
      id_prioridad: parseInt(prioridad),
    };
    onCreate(nuevaTarea);
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
            <h5 className="modal-title">Crear Tarea</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
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
                  <option value="1">Por hacer</option>
                  <option value="2">En progreso</option>
                  <option value="3">Completada</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Prioridad</label>
                <select
                  className="form-select custom-input"
                  value={prioridad}
                  onChange={(e) => setPrioridad(e.target.value)}
                >
                  <option value="1">Baja</option>
                  <option value="2">Media</option>
                  <option value="3">Alta</option>
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
              <button type="submit" className="btn btn-primary">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
