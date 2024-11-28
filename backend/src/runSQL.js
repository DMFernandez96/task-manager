const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../database", "tasks.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
    return;
  }
  console.log("Conexión exitosa a la base de datos.");
});

const createTablesSQL = fs.readFileSync(
  path.join(__dirname, "../database", "createTables.sql"),
  "utf-8"
);
db.exec(createTablesSQL, (err) => {
  if (err) {
    console.error("Error al crear tablas:", err.message);
  } else {
    console.log("Tablas creadas o verificadas correctamente.");
  }

  const insertDataSQL = fs.readFileSync(
    path.join(__dirname, "../database", "insertData.sql"),
    "utf-8"
  );
  db.exec(insertDataSQL, (err) => {
    if (err) {
      console.error("Error al insertar datos:", err.message);
    } else {
      console.log("Datos insertados correctamente.");
    }

    db.close();
  });
});
