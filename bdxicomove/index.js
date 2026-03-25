require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.BD_PASSWORD,
  database: "xicomove",
});

db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err.message);
    return;
  }
  console.log("¡Conectado exitosamente a la base de datos MySQL!");
});

app.get("/api/administrador", (req, res) => {
  const sql = "SELECT * FROM administrador";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error en la consulta SQL:", err.message);
      return res
        .status(500)
        .json({ error: "Hubo un error al obtener los datos" });
    }
    res.json(results);
  });
});

app.get("/api/cliente", (req, res) => {
  const sql = "SELECT * FROM cliente";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error en la consulta SQL:", err.message);
      return res
        .status(500)
        .json({ error: "Hubo un error al obtener los datos" });
    }
    res.json(results);
  });
});

app.get("/api/unidades", (req, res) => {
  const sql = "SELECT * FROM unidades";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error en la consulta SQL:", err.message);
      return res
        .status(500)
        .json({ error: "Hubo un error al obtener los datos" });
    }
    res.json(results);
  });
});

app.get("/api/rutas", (req, res) => {
  const sql = "SELECT * FROM rutas";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error en la consulta SQL:", err.message);
      return res
        .status(500)
        .json({ error: "Hubo un error al obtener los datos" });
    }
    res.json(results);
  });
});

app.get("/api/conductor", (req, res) => {
  const sql = "SELECT * FROM conductor";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error en la consulta SQL:", err.message);
      return res
        .status(500)
        .json({ error: "Hubo un error al obtener los datos" });
    }
    res.json(results);
  });
});

app.get("/api/paradas_ruta", (req, res) => {
  const sql = "SELECT * FROM paradas_ruta";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error en la consulta SQL:", err.message);
      return res
        .status(500)
        .json({ error: "Hubo un error al obtener los datos" });
    }
    res.json(results);
  });
});

app.get("/api/admirutas", (req, res) => {
  const sql = "SELECT * FROM admirutas";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error en la consulta SQL:", err.message);
      return res
        .status(500)
        .json({ error: "Hubo un error al obtener los datos" });
    }
    res.json(results);
  });
});

app.get("/api/clienterutas", (req, res) => {
  const sql = "SELECT * FROM clienterutas";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error en la consulta SQL:", err.message);
      return res
        .status(500)
        .json({ error: "Hubo un error al obtener los datos" });
    }
    res.json(results);
  });
});

//Login obteniendo datos de la bd para validar el usuario y contraseña
app.post("/api/login", (req, res) => {
  const { usuario, contraseña } = req.body;
  const sqlAdmin =
    "SELECT * FROM administrador WHERE usuario = ? AND contrasenia = ?";
  db.query(sqlAdmin, [usuario, contraseña], (err, adminResult) => {
    if (err) return res.status(500).json({ error: "Error en el servidor" });

    if (adminResult.length > 0) {
      return res.json({
        exito: true,
        rol: "admin",
        mensaje: "Login exitoso como Administrador",
      });
    }

    const sqlCliente =
      "SELECT * FROM cliente WHERE correoElectronico = ? AND contrasenia = ?";

    db.query(sqlCliente, [usuario, contraseña], (err, clienteResult) => {
      if (err) return res.status(500).json({ error: "Error en el servidor" });

      if (clienteResult.length > 0) {
        return res.json({
          exito: true,
          rol: "cliente",
          mensaje: "Login exitoso como Cliente",
        });
      } else {
        return res
          .status(401)
          .json({ exito: false, error: "Usuario o contraseña incorrectos" });
      }
    });
  });
});

// Obtener Unidades de la bd
app.get("/api/unidades", (req, res) => {
  const sql = "SELECT * FROM unidades";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener unidades:", err);
      return res.status(500).json({ error: "Error al cargar las unidades" });
    }
    res.json(results);
  });
});

// Obtener Unidades de la bd
app.get("/api/conductores", (req, res) => {
  const sql = "SELECT * FROM conductores";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener conductores:", err);
      return res.status(500).json({ error: "Error al cargar los conductores" });
    }
    res.json(results);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor Backend corriendo en http://localhost:${PORT}`);
});
