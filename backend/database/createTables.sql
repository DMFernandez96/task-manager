CREATE TABLE IF NOT EXISTS "usuario" (
  "id_usuario" INTEGER PRIMARY KEY AUTOINCREMENT,
  "nombre" TEXT NOT NULL,
  "apellido" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "contraseña" TEXT NOT NULL,
  "fecha_creacion" DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "estado" (
  "id_estado" INTEGER PRIMARY KEY AUTOINCREMENT,
  "descripcion" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "prioridad" (
  "id_prioridad" INTEGER PRIMARY KEY AUTOINCREMENT,
  "descripcion" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "tarea" (
  "id_tarea" INTEGER PRIMARY KEY AUTOINCREMENT,
  "titulo" TEXT NOT NULL,
  "contenido" TEXT,
  "fecha_creacion" DATETIME DEFAULT CURRENT_TIMESTAMP,
  "id_usuario" INTEGER,
  "id_estado" INTEGER,
  "id_prioridad" INTEGER,
  FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario"),
  FOREIGN KEY ("id_estado") REFERENCES "estado"("id_estado"),
  FOREIGN KEY ("id_prioridad") REFERENCES "prioridad"("id_prioridad")
);
