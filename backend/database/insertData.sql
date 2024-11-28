INSERT INTO estado (descripcion) VALUES 
('Por hacer'),
('En progreso'),
('Terminada');

INSERT INTO prioridad (descripcion) VALUES 
('Baja'),
('Media'),
('Alta');

INSERT INTO usuario (nombre, apellido, email, contraseña) VALUES 
('Manuela', 'Fernandez', 'manu.fer@gmail.com', '123456'),
('Ana Maria', 'Ruiz', 'anaRuiz@gmail.com', '123456');

INSERT INTO tarea (titulo, contenido, id_usuario, id_estado, id_prioridad) VALUES 
('Aprender Node.js', 'Revisar el curso de Node.js y Express', 1, 1, 2),
('Crear API REST', 'Desarrollar la API RESTful para el proyecto final', 1, 2, 3),
('Revisar base de datos', 'Optimizar las consultas SQL en SQLite', 2, 1, 1),
('Escribir documentación', 'Redactar la documentación técnica del proyecto', 1, 3, 2),
('Hacer pruebas', 'Realizar pruebas de endpoints en Postman', 2, 1, 2),
('Frontend básico', 'Diseñar la estructura HTML/CSS inicial', 1, 2, 3),
('Conectar frontend y backend', 'Integrar la API con el frontend', 2, 2, 3),
('Estudiar seguridad', 'Investigar sobre la seguridad en Node.js', 1, 3, 2),
('Autenticación de usuarios', 'Implementar login y registro de usuarios', 1, 1, 3),
('Finalizar proyecto', 'Completar la aplicación antes de la entrega', 2, 3, 1);
