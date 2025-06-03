// src/app.ts o src/server.ts

import express from "express";
import cultivoRoutes from "./interface/routes/cultivo.routes";
import { iniciar } from "./interface/database";
import usuarioRoutes from "./interface/routes/usuario.routes";
import zonaCultivoRoutes from "./interface/routes/ZonaCultivo.routes";
import riegoRoutes from "./interface/routes/Riego.routes";
import sensorRoutes from "./interface/routes/sensor.routes";

// Iniciar base de datos
(async () => {
  try {
    await iniciar();

  console.log("Servidor corriendo en http://localhost:3000");

  } catch (error) {
    console.error('❌ Error al conectar a la base de datos', error);
  }
})();

const app = express();
app.use(express.json());

app.use("/api/cultivos", cultivoRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/zona", zonaCultivoRoutes);
app.use("/api/riegos", riegoRoutes);
app.use("/api/sensores", sensorRoutes);
app.listen(3000, () => {});
