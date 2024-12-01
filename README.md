# Daily Tasky 📝

**Daily Tasky** es una aplicación web para la gestión de tareas diarias. Permite crear, editar, buscar y eliminar tareas de manera sencilla y rápida. Está desarrollada como una aplicación Full Stack utilizando **React** para el frontend y **Node.js** con **Express** para el backend.

## Características principales 🚀

- Crear nuevas tareas con título, contenido, estado y prioridad.
- Editar tareas existentes a través de un modal interactivo.
- Eliminar tareas con confirmación de acción.
- Visualización optimizada mediante Bootstrap para una interfaz moderna y responsiva.

---

## Tecnologías utilizadas 🛠️

### Frontend
- **React**: Librería para construir interfaces de usuario.
- **Bootstrap**: Framework CSS para estilizar los componentes.
- **JavaScript (ES6+)**
- **CSS personalizado**

### Backend
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir APIs REST.
- **SQLite**: Base de datos liviana para almacenamiento.
- **Cors**: Manejo de políticas de seguridad de recursos.

---

## Instalación y configuración 💻

### 1. Clonar el repositorio
```bash
git clone https://github.com/DMFernandez96/task-manager.git
```

### 2. Configuración del backend (servidor)
1. Navega a la carpeta del backend:
  ```bash
  cd backend
  ```
2. Instala las dependencias necesarias:
  ```bash
  npm install
  ```
3. Inicia el servidor (estar ubicado en la carpeta src de backend):
  ```bash
  nodemon server
  ```
Esto iniciará el servidor en http://localhost:3001/api/tareas y se reiniciará automáticamente al detectar cambios.

### 3. Configuración del frontend (cliente)
1. Vuelve a la carpeta raíz del proyecto o navega a la carpeta del frontend:
  ```bash
  cd frontend
  ```
2. Instala las dependencias necesarias:
  ```bash
  npm install
  ```
3. Inicia la aplicación de React (estar ubicado en la carpeta src de frontend):
  ```bash
  npm start
  ```
La aplicación estará disponible en http://localhost:3000.

#Estructura del proyecto 📂
```bash
Daily-Tasky/
│
├── backend/                # API y lógica del servidor
│   ├── app.js              # Configuración del servidor Express
│   ├── db/                 # Base de datos SQLite y scripts de inicialización
│   ├── routes/             # Rutas de la API
│   └── package.json        # Dependencias del backend
│
├── frontend/               # Aplicación React
│   ├── src/
│   │   ├── components/     # Componentes React (Header, Footer, etc.)
│   │   ├── App.js          # Componente principal
│   │   └── index.js        # Punto de entrada de la aplicación React
│   └── package.json        # Dependencias del frontend
│
└── README.md               # Documento actual
```
# Notas importantes ⚠️
- Asegúrate de que los puertos 3000 y 3001 estén libres.
- La base de datos se inicializa automáticamente con un conjunto de datos mínimos.
- Nodemon está configurado para facilitar el desarrollo y reiniciar el servidor automáticamente.

# Autor ✨
Proyecto desarrollado por:
- Diana Manuela Fernández
- Alejandro Colombo
- Lee Chirinos
- Franco Altamirano
  
