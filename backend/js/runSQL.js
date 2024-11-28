// Importar las dependencias necesarias
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Ruta del archivo de la base de datos
const dbPath = path.join(__dirname, 'database', 'tasks.db');

// Conectar a la base de datos SQLite (la base de datos se creará si no existe)
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
});

// Leer el archivo SQL que contiene la creación de las tablas
const sqlFilePath = path.join(__dirname, 'database', 'createTables.sql');
const createTablesSQL = fs.readFileSync(sqlFilePath, 'utf-8');

// Ejecutar el script SQL para crear las tablas
db.exec(createTablesSQL, (err) => {
    if (err) {
        console.error('Error al ejecutar el script SQL:', err.message);
    } else {
        console.log('Tablas creadas o modificadas exitosamente.');
    }
    db.close();
});
