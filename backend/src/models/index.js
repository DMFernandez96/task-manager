const sqlite3 = require("sqlite3").verbose();
const path = require("path");

//ruta a la DB
const dbPath = path.resolve(__dirname, "../../database/tasks.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
  } else {
    console.log("Conectado a la base de datos SQLite tasks");
  }
});

//obtener todas las tareas
const all = (req, res) => {
  const sql = `
  SELECT t.id_tarea, t.titulo, t.contenido, t.fecha_creacion, 
         e.descripcion AS estado, 
         p.descripcion AS prioridad
  FROM tarea t
  JOIN estado e ON t.id_estado = e.id_estado
  JOIN prioridad p ON t.id_prioridad = p.id_prioridad;
`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};

//crear tarea
const create = (req, res) => {
  const { titulo, contenido, id_estado, id_prioridad } = req.body;

	const id_usuario = req.body.id_usuario || 1;

  if (!titulo || !contenido || !id_usuario || !id_estado || !id_prioridad) {
    return res.status(400).json({ error: "Debe ingresar todos los campos" });
  }

  const validateUser = `SELECT id_usuario FROM usuario WHERE id_usuario = ?`;
  db.get(validateUser, [id_usuario], (err, row) => {
    if (err || !row) {
      return res.status(400).json({ error: "El usuario no existe" });
    }

    const validateStatus = `SELECT id_estado FROM estado WHERE id_estado = ?`;
    db.get(validateStatus, [id_estado], (err, row) => {
      if (err || !row) {
        return res.status(400).json({ error: "El estado no es válido" });
      }

      const validatePriority = `SELECT id_prioridad FROM prioridad WHERE id_prioridad = ?`;
      db.get(validatePriority, [id_prioridad], (err, row) => {
        if (err || !row) {
          return res.status(400).json({ error: "La prioridad no es válida" });
        }

        const sql = `INSERT INTO tarea (titulo, contenido, id_usuario, id_estado, id_prioridad, fecha_creacion) 
                     VALUES (?, ?, ?, ?, ?, datetime('now'))`;
        const params = [titulo, contenido, id_usuario, id_estado, id_prioridad];

        db.run(sql, params, function (err) {
          if (err) {
            return res.status(400).json({ error: err.message });
          }
          res.json({
            message: "Tarea creada exitosamente!",
            id_tarea: this.lastID,
            titulo,
            contenido,
            id_usuario,
            id_estado,
            id_prioridad,
          });
        });
      });
    });
  });
};

//actualizar una tarea
const update = (req, res) => {
  const { id } = req.params;
  const { titulo, contenido, id_estado, id_prioridad } = req.body;

  const validateTaskId = `SELECT id_tarea FROM tarea WHERE id_tarea = ?`;
  db.get(validateTaskId
, [id], (err, row) => {
    if (err || !row) {
      return res.status(400).json({ error: "La tarea seleccionada no existe" });
    }

    if (!titulo && !contenido && !id_estado && !id_prioridad) {
      return res.status(400).json({
        error: "Se necesita por lo menos un campo para actualizar",
      });
    }

    if (id_estado) {
      const validateStatus = `SELECT id_estado FROM estado WHERE id_estado = ?`;
      db.get(validateStatus, [id_estado], (err, row) => {
        if (err || !row) {
          return res.status(400).json({ error: "El estado no es válido" });
        }

        if (id_prioridad) {
          const validatePriority = `SELECT id_prioridad FROM prioridad WHERE id_prioridad = ?`;
          db.get(validatePriority, [id_prioridad], (err, row) => {
            if (err || !row) {
              return res
                .status(400)
                .json({ error: "La prioridad no es válida" });
            }

            const sql = `UPDATE tarea SET 
                           titulo = COALESCE(?, titulo), 
                           contenido = COALESCE(?, contenido),
                           id_estado = COALESCE(?, id_estado),
                           id_prioridad = COALESCE(?, id_prioridad)
                           WHERE id_tarea = ?`;
            const params = [titulo, contenido, id_estado, id_prioridad, id];

            db.run(sql, params, function (err) {
              if (err) {
                return res.status(400).json({ error: err.message });
              }
              res.json({ message: "La tarea fue actualizada exitosamente!!" });
            });
          });
        }
      });
    }
  });
};

//eliminar tarea
const del = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM tarea WHERE id_tarea = ?";
  const params = [id];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: `Se eliminó tarea con id ${id}` });
  });
};

// ------------------- USUARIO --------------------------------
//TODO: implementar registro y login (usando JWT)

module.exports = { all, create, update, del };
