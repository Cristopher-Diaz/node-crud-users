# CRUD con Node.js, Express, MySQL y EJS

Este proyecto es un CRUD (Create, Read, Update, Delete) básico construido con Node.js, Express, MySQL, y EJS. Implementa un sistema de plantillas utilizando EJS y maneja las vistas con `express-ejs-layouts`.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu entorno:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/Cristopher-Diaz/node-crud-users.git
    cd node-crud-users
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Configura las variables de entorno:

    - Copia el archivo `env.example` y renómbralo a `.env`:

      ```bash
      cp env.example .env
      ```

    - Edita el archivo `.env` para configurar las variables de entorno de tu base de datos. Asegúrate de incluir la siguiente configuración:

      ```env
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=tu_contraseña
      DB_NAME=nombre_de_tu_base_de_datos
      DB_PORT=3306
      ```

4. Crea la base de datos en MySQL con el nombre que especificaste en la variable `DB_NAME`.

5. Ejecuta el proyecto en modo de desarrollo utilizando nodemon:

    ```bash
    node app.js
    ```

    Esto iniciará el servidor en `http://localhost:3000`.


6. Crea la base de datos y la tabla con datos iniciales:

    Conéctate a MySQL y ejecuta los siguientes scripts:

    #### 1. Creación de la Base de Datos

    ```sql
    CREATE DATABASE IF NOT EXISTS crud_db;
    USE crud_db;
    ```

    #### 2. Creación de la Tabla `users`

    ```sql
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        role VARCHAR(50) NOT NULL,
        deleted_at DATETIME DEFAULT NULL
    );
    ```

    #### 3. Insertar Datos Iniciales (opcional)

    ```sql
    INSERT INTO users (name, role)
    VALUES 
    ('Alice', 'admin'),
    ('Bob', 'user'),
    ('Charlie', 'user');
    ```