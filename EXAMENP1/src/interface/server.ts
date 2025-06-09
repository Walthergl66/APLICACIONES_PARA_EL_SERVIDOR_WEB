import express from 'express';
import fs from 'fs/promises';
import path from 'path';

const app = express();
app.use(express.json());

const DATA_PATH = path.resolve(__dirname, '../data/usuarios.json');

// Función para leer usuarios
async function leerUsuarios() {
  const data = await fs.readFile(DATA_PATH, 'utf-8');
  return JSON.parse(data);
}

// Función para escribir usuarios
async function escribirUsuarios(usuarios: any[]) {
  await fs.writeFile(DATA_PATH, JSON.stringify(usuarios, null, 2));
}

app.get('/api/usuarios', async (req, res) => {
  try {
    const usuarios = await leerUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error leyendo usuarios' });
  }
});

app.post('/api/usuarios', async (req, res) => {
  try {
    const usuarios = await leerUsuarios();
    const nuevo = { id: usuarios.length + 1, ...req.body };
    usuarios.push(nuevo);
    await escribirUsuarios(usuarios);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error creando usuario' });
  }
});

app.listen(3000, () => {
  console.log('Microservicio corriendo en puerto 3000');
});

export default app;