import React from "react";

function ConfirmDeleteModal({ tarea, onClose, onConfirm }) {
  return (
    <div
      className="modal show fade custom-modal-bg"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5 className="modal-title">
              ¿Seguro que deseas eliminar esta tarea?
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>Esta acción no se puede deshacer.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onConfirm(tarea.id_tarea)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
